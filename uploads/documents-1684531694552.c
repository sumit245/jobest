#include <xc.h>
#include <libq.h>
#include "inverter.h"

int calculateRMS(int *pBuffer);
int mainsSampleSearch(int voltage);
int VectorPowerx(int *srcV);
int VectorMin(int numElems, fractional *srcV, int *minIndex);
int VectorMax(int numElems, fractional *srcV, int *maxIndex);
extern void delay_ms(unsigned int delay);
extern void delay_100us(void);

int systemState = SYSTEM_STARTUP;
int mainsState = MAINS_NOT_OK;
int mainsStartupState = MAINS_STATE_UNKNOWN;
int batteryState = BATTERY_UNKNOWN;
int dcLinkState = DC_LINK_UNKNOWN;
int errorState = NO_FAULT;
int pushPullCurrentState = PUSHPULL_CURRENT_OK;
int inverterCurrentState = INVERTER_CURRENT_OK;
int inverterDriverState = DRIVER_FAULT_CLEARED;
int fPushPullSoftStart = PUSHPULL_SOFTSTART_INACTIVE;
int fSwitchRelay = NOT_READY_TO_SWITCH;
int fRMSCalculation = READY_TO_COLLECT_DATA;
int fCrestFactorWarning = CREST_FACTOR_OK;
int inverterVoltageRMS = 0;
int inverterCurrentRMS = 0;
int inverterVoltageMin = 0;
int inverterVoltageMax = 0;
int inverterCurrentMin = 0;
int inverterCurrentMax = 0;
int inverterVoltageImbalance = 0;
int inverterOffsetAdjustment = 0;
int voltageRMSBuffer[RMS_BUFFER_SIZE] __attribute__((space(xmemory)));
int currentRMSBuffer[RMS_BUFFER_SIZE] __attribute__((space(xmemory)));
int inverterOverCurrentCount = 0;
int inverterImbalanceCount = 0;
int crestFactorCount = 0;
int mainsStartupCount = 0;
extern int pushpullOverCurrentCount;
extern int driverFaultCount;
extern int dcLinkVoltage;
extern int sampleCount;
extern int batteryVoltage;
extern int batteryCurrent;
extern int mainsQuadrant;
extern int mainsVoltage;
extern int pushpullVoltageRef;
extern long temp4;
extern int prevFilteredVo;
extern int pushpullVoltagePreviousError;
extern long PPtemp4;
extern int finverterISR;

void pushpullTurnOnRoutine(void)
{
    LATCbits.LATC7 = 0;                                                /* Disable Battery Charger control   */
                                                                       //  IOCON4bits.OVRENL = 1;        /* Turn OFF PWM4L output for battery charger control                   */
    LATCbits.LATC0 = 1;                                                /* Disconnect mains from UPS output */
    LATCbits.LATC1 = 1;                                                /* Bypass inverter series resistor because DC Link capacitors are charged            */
    PDC3 = 0;                                                          /* Make push-pull duty cycle zero before starting push-pull */
    pushpullVoltagePreviousError = 0;                                  /* Purge control loop history */
    PPtemp4 = 0;                                                       /* Purge control loop history */
    pushpullVoltageRef = dcLinkVoltage + PUSHPULL_SOFTSTART_INCREMENT; /* Make the current value of dcLinkVoltage as the reference for control loop */

    /* Enable Leading edge blanking for PWM3 */
    //  LEBCON3 = 0xA7F8;                       /* Blank rising edge of PWMxH and PWMxL outputs. Blanking period is 1.1us. Due to errata on A0 and A1 silicon word-writes must be used for LEBCONx */

    /* Turn ON PWM outputs to enable push-pull output */
    //  IOCON3bits.OVRENH = 0;
    //  IOCON3bits.OVRENL = 0;

    LATBbits.LATB7 = 1; /* Send FAULT_CLR = 1 to clear all existing fault conditions before power up.(FAULT_CLR is active-high)        */
}

void softStartRoutine(void)
{
    int softStartTimerCount = 0;
    fPushPullSoftStart = PUSHPULL_SOFTSTART_ACTIVE;
    while ((pushpullVoltageRef <= DC_LINK_VOLTAGE_NOM) && (dcLinkVoltage <= DC_LINK_VOLTAGE_MAX))
    {
        delay_100us();
        softStartTimerCount++;
        pushpullVoltageRef += PUSHPULL_SOFTSTART_INCREMENT;
    }

    pushpullVoltageRef = DC_LINK_VOLTAGE_NOM;
    while (softStartTimerCount < 60)
    {
        delay_100us();
        softStartTimerCount++;
    }

    fPushPullSoftStart = PUSHPULL_SOFTSTART_INACTIVE;
    pushpullOverCurrentCount = 0;
}

void inverterTurnOnRoutine(void)
{
    //  PDC1 = INVERTER_PDC_NOMINAL_VALUE;      /* Change duty cycle to nominal value before starting inverter */
    //  PDC2 = INVERTER_PDC_NOMINAL_VALUE;      /* Change duty cycle to nominal value before starting inverter */

    /* Find out starting sample for inverter based on output capacitor voltage */
    if (mainsQuadrant == FIRST_QUADRANT)
    {
        sampleCount = mainsSampleSearch(mainsVoltage);
    }
    else if (mainsQuadrant == SECOND_QUADRANT)
    {
        sampleCount = (103 - mainsSampleSearch(mainsVoltage)) + 104;
    }
    else if (mainsQuadrant == THIRD_QUADRANT)
    {
        sampleCount = mainsSampleSearch(mainsVoltage) + 208;
    }
    else if (mainsQuadrant == FOURTH_QUADRANT)
    {
        sampleCount = (103 - mainsSampleSearch(mainsVoltage)) + 312;
    }

    mainsQuadrant = UNKNOWN_QUADRANT;
    temp4 = 0;          /* Purge control loop history */
    prevFilteredVo = 0; /* Purge control loop history */

    /* Wait for two iterations of the inverter ISR to pass before enabling the PWM's for the Inverter */
    finverterISR = 0;
    while (finverterISR == 0)
        ;

    //  finverterISR = 0;
    //  while(finverterISR == 0);

    /* Turn ON PWM outputs to enable inverter output */
    //  TODO:
    //  IOCON1bits.OVRENH = 0;
    //  IOCON1bits.OVRENL = 0;
    //  IOCON2bits.OVRENH = 0;
    //  IOCON2bits.OVRENL = 0;

    delay_ms(1);
    LATBbits.LATB7 = 0; /* Make FAULT_CLR = 0 so that future faults can be detected. (FAULT_CLR is active-high) */
}

void batteryChargerTurnOnRoutine(void)
{
    fSwitchRelay = NOT_READY_TO_SWITCH;
    while (fSwitchRelay == NOT_READY_TO_SWITCH)
        ;
    /* Before turning ON battery charger mode,
     * wait till inverter output reaches zero crossing.
     * Switching of output relay near the zero crossing
     * will reduce stress on both relay and Inverter IGBTs */

    LATCbits.LATC0 = 0; /* Connect mains to UPS output when in Battery Charger mode */
    delay_ms(11);       /* Wait 10ms to allow relay to switch
                         * During this time, the inverter is
                         * still operating and will be turned
                         * OFF near the zero crossing to
                         * reduce stress on the circuitry. */

    /* Turn OFF PWM outputs to disable inverter */
    //  IOCON1bits.OVRENH = 1;
    //  IOCON1bits.OVRENL = 1;
    //  IOCON2bits.OVRENH = 1;
    //  IOCON2bits.OVRENL = 1;
    //  IOCON3bits.OVRENH = 1;
    //  IOCON3bits.OVRENL = 1;

    driverFaultCount = 0;
    LATBbits.LATB7 = 1; /* Clear driver faults and keep disabled until inverter mode is entered */

    /* Disable Leading edge blanking for PWM3 */
    //  LEBCON3 = 0x07F8;   /* Disable LEB as PWM outputs are in override. Due to errata on A0 and A1 silicon word-writes must be used for LEBCONx */
    //  LATCbits.LATC10 = 1;  /* Bypass inverter series resistor because DC Link capacitors are charged */
    delay_ms(12);       /* Wait for relays to switch before turning ON battery charger */
                        //  SDC4 = MIN_CHARGING_CURRENT;            /* Set minimum charging current */
                        //  IOCON4bits.OVRENL = 0;                  /* Turn ON PWM4L output for battery charger control */
    LATCbits.LATC7 = 1; /* Enable Battery Charger control */
}

void batteryChargingRoutine(void)
{
    unsigned int batteryChargerDutyCycle;
    int batteryCurrentReference;
    int batteryCurrentError;

    if (batteryVoltage < BATTERY_TRICKLE_VOLTAGE)
    {
        batteryCurrentReference = MIN_CHARGING_CURRENT;
    }
    else if ((batteryVoltage > BATTERY_TRICKLE_VOLTAGE) && (batteryVoltage < BATTERY_BULK_VOLTAGE))
    {
        batteryCurrentReference = MAX_CHARGING_CURRENT;
    }
    else if ((batteryVoltage > BATTERY_BULK_VOLTAGE) && (batteryVoltage < BATTERY_FLOAT_VOLTAGE))
    {
        batteryCurrentReference = BATTERY_OVERCHARGING_SLOPE * (batteryVoltage + BATTERY_OVERCHARGING_OFFSET);
    }
    else if ((batteryVoltage > BATTERY_FLOAT_VOLTAGE) && (batteryVoltage < BATTERY_VOLTAGE_MAX))
    {
        batteryCurrentReference = MIN_CHARGING_CURRENT;
    }
    else if (batteryVoltage > BATTERY_VOLTAGE_MAX)
    {
        batteryCurrentReference = MIN_CHARGING_CURRENT;
        LATCbits.LATC7 = 0;
    }
    batteryCurrentError = batteryCurrentReference - batteryCurrent;
    //  batteryChargerDutyCycle = SDC4;

    if (_Q15abs(batteryCurrentError) > 100)
    {
        if (batteryCurrentError < 0)
        {
            if (batteryChargerDutyCycle > BATTERY_CHARGER_SDC_MIN)
            {
                batteryChargerDutyCycle = batteryChargerDutyCycle - BATTERY_CHARGER_DUTYCYCLE_INCREMENT;
            }
            else
            {
                batteryChargerDutyCycle = BATTERY_CHARGER_SDC_MIN;
            }
        }
        else if (batteryCurrentError >= 0)
        {
            if (batteryChargerDutyCycle < BATTERY_CHARGER_SDC_MAX)
            {
                batteryChargerDutyCycle = batteryChargerDutyCycle + BATTERY_CHARGER_DUTYCYCLE_INCREMENT;
            }
            else
            {
                batteryChargerDutyCycle = BATTERY_CHARGER_SDC_MAX;
            }
        }
        //    SDC4 = batteryChargerDutyCycle;
    }
}

int calculateRMS(int *pBuffer)
{
    signed int SumofSquares;
    signed int Calculated_RMS;
    SumofSquares = 2 * (VectorPowerx(pBuffer) / 13);
    Calculated_RMS = _Q15sqrt(SumofSquares);
    return Calculated_RMS;
}

int mainsSampleSearch(int voltage)
{
    int measuredVoltage, sample;
    measuredVoltage = _Q15abs(voltage);

    if (measuredVoltage > SINE_45_DEGREES)
    {
        if (measuredVoltage > SINE_67_5_DEGREES)
        {
            if (measuredVoltage > SINE_78_75_DEGREES)
            {
                sample = 100;
            }
            else
            {
                sample = 90;
            }
        }
        else
        {
            if (measuredVoltage > SINE_56_25_DEGREES)
            {
                sample = 70;
            }
            else
            {
                sample = 58;
            }
        }
    }
    else
    {
        if (measuredVoltage > SINE_22_5_DEGREES)
        {
            if (measuredVoltage > SINE_33_75_DEGREES)
            {
                sample = 43;
            }
            else
            {
                sample = 31;
            }
        }
        else
        {
            if (measuredVoltage > SINE_11_25_DEGREES)
            {
                sample = 19;
            }
            else
            {
                sample = 6;
            }
        }
    }
    return sample;
}

void __attribute__((__interrupt__, no_auto_psv)) _T2Interrupt()
{
    switch (systemState)
    {
    case SYSTEM_STARTUP:
    {
        if (mainsState == MAINS_NOT_OK)
        {
            if (batteryState == BATTERY_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_UNDERVOLTAGE_FAULT;
            }
            else if (batteryState == BATTERY_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_OVERVOLTAGE_FAULT;
            }
            else
            {
                if (dcLinkState == DC_LINK_UNDERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_UNDERVOLTAGE_FAULT;
                }
                else if (dcLinkState == DC_LINK_OVERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_OVERVOLTAGE_FAULT;
                }
                else
                {
                    mainsStartupCount++;
                    if (mainsStartupCount >= 10000)
                    {
                        mainsStartupState = MAINS_NOT_OK;
                        systemState = SYSTEM_ERROR;
                        errorState = MAINS_STARTUP_FAULT;
                    }
                }
            }
        }
        else if (mainsState == MAINS_OK)
        {
            if (dcLinkState == DC_LINK_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_UNDERVOLTAGE_FAULT;
            }
            else if (dcLinkState == DC_LINK_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_OVERVOLTAGE_FAULT;
            }
            else
            {
                if (batteryState == BATTERY_OVERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = BATTERY_OVERVOLTAGE_FAULT;
                }
                else
                {
                    systemState = BATTERY_CHARGER_MODE;
                    /* If AC mains is good and wrong battery is not connected then switch to  Battery Charger mode */
                    batteryChargerTurnOnRoutine();
                }
            }
        }
    }
    break;
    case BATTERY_CHARGER_MODE:
    {
        if (mainsState == MAINS_OK)
        {
            batteryChargingRoutine();
            if (dcLinkState == DC_LINK_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_UNDERVOLTAGE_FAULT;
            }
            else if (dcLinkState == DC_LINK_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_OVERVOLTAGE_FAULT;
            }
        }
        else if (mainsState == MAINS_NOT_OK)
        {
            if (batteryState == BATTERY_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_UNDERVOLTAGE_FAULT;
            }
            else if (batteryState == BATTERY_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_OVERVOLTAGE_FAULT;
            }
            else
            {
                if (dcLinkState == DC_LINK_UNDERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_UNDERVOLTAGE_FAULT;
                }
                else if (dcLinkState == DC_LINK_OVERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_OVERVOLTAGE_FAULT;
                }
                else
                {
                    systemState = INVERTER_MODE;
                    pushpullTurnOnRoutine();
                    softStartRoutine();
                    inverterTurnOnRoutine();
                }
            }
        }
    }
    break;

    case INVERTER_MODE:
    {
        driverFaultCount = 0;

        if (fRMSCalculation == READY_TO_CALCULATE)
        {
            inverterVoltageRMS = calculateRMS(voltageRMSBuffer);
            inverterCurrentRMS = calculateRMS(currentRMSBuffer) >> 2;

            inverterCurrentMax = VectorMax(RMS_BUFFER_SIZE, currentRMSBuffer, currentRMSBuffer);
            inverterCurrentMin = VectorMin(RMS_BUFFER_SIZE, currentRMSBuffer, currentRMSBuffer);

            if ((inverterCurrentMax > INVERTER_CURRENT_MAX_PEAK - 500) || (inverterCurrentMin < -INVERTER_CURRENT_MAX_PEAK + 500))
            {
                crestFactorCount++;
                if (crestFactorCount >= 20)
                {
                    fCrestFactorWarning = CREST_FACTOR_HIGH;
                }
            }
            else
            {
                crestFactorCount--;
                if (crestFactorCount <= 0)
                {
                    fCrestFactorWarning = CREST_FACTOR_OK;
                }
            }

            inverterVoltageMax = VectorMax(RMS_BUFFER_SIZE, voltageRMSBuffer, voltageRMSBuffer);
            inverterVoltageMin = VectorMin(RMS_BUFFER_SIZE, voltageRMSBuffer, voltageRMSBuffer);

            if (inverterImbalanceCount >= 16)
            {
                /* Adjustment for DC offset in output voltage */
                if (inverterVoltageImbalance > 40)
                {
                    inverterOffsetAdjustment -= 5;
                    if (inverterOffsetAdjustment <= -200)
                    {
                        inverterOffsetAdjustment = -200;
                    }
                }
                else if (inverterVoltageImbalance < -40)
                {
                    inverterOffsetAdjustment += 5;
                    if (inverterOffsetAdjustment >= 200)
                    {
                        inverterOffsetAdjustment = 200;
                    }
                }

                inverterImbalanceCount = 0;
                inverterVoltageImbalance = 0;
            }
            else
            {
                inverterImbalanceCount++;
                inverterVoltageImbalance += inverterVoltageMax + inverterVoltageMin;
            }
            fRMSCalculation = CALCULATION_DONE;
            if (inverterCurrentRMS > INVERTER_CURRENT_MAX)
            {
                inverterOverCurrentCount++;

                // If inverter over power (current) is greater than 1000W
                // shut off immediately

                if (inverterCurrentRMS > INVERTER_CURRENT_MAX_OVERLOAD)
                {
                    inverterCurrentState = INVERTER_OVERCURRENT;
                    PTCONbits.PTEN = 0;
                    systemState = SYSTEM_ERROR;
                    errorState = INVERTER_OVERCURRENT_FAULT;
                }
            }
            else
            {
                inverterOverCurrentCount = 0;
            }

            // If inverter over current exists for more than a minute disable the PWM
            // RMS current calculated every AC cycle 16.6ms
            if (inverterOverCurrentCount >= 1800)
            {
                inverterCurrentState = INVERTER_OVERCURRENT;
                PTCONbits.PTEN = 0;
                systemState = SYSTEM_ERROR;
                errorState = INVERTER_OVERCURRENT_FAULT;
            }
        }

        if (mainsState == MAINS_OK)
        {
            if (dcLinkState == DC_LINK_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_UNDERVOLTAGE_FAULT;
            }
            else if (dcLinkState == DC_LINK_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = DC_LINK_OVERVOLTAGE_FAULT;
            }
            else
            {
                if (batteryState == BATTERY_OVERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = BATTERY_OVERVOLTAGE_FAULT;
                }
                else
                {
                    systemState = BATTERY_CHARGER_MODE;
                    /* If AC mains is good and
                       wrong battery is not
                       connected then switch to
                       Battery Charger mode */
                    batteryChargerTurnOnRoutine();
                }
            }
        }
        else if (mainsState == MAINS_NOT_OK)
        {
            if (batteryState == BATTERY_UNDERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_UNDERVOLTAGE_FAULT;
            }
            else if (batteryState == BATTERY_OVERVOLTAGE)
            {
                systemState = SYSTEM_ERROR;
                errorState = BATTERY_OVERVOLTAGE_FAULT;
            }
            else
            {
                if (dcLinkState == DC_LINK_UNDERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_UNDERVOLTAGE_FAULT;
                }
                else if (dcLinkState == DC_LINK_OVERVOLTAGE)
                {
                    systemState = SYSTEM_ERROR;
                    errorState = DC_LINK_OVERVOLTAGE_FAULT;
                }
            }
        }
    }
    break;

    case SYSTEM_ERROR:
    {
        /* Turn OFF PWM outputs to disable inverter and push-pull
           boost converter */
        PTCONbits.PTEN = 0;

        /* Disable state machine because system is in error */
        T2CONbits.TON = 0;

        /* Turn OFF Battery Charger when system is in Error */
        LATCbits.LATC7 = 0;

        /* Connect Mains to UPS output when system is in Error */
        LATCbits.LATC0 = 0;

        // -- Scan/Check for particular fault with following if statements --

        if (dcLinkState == DC_LINK_UNDERVOLTAGE)
        {
            /* DC_LINK_UNDERVOLTAGE is a hard fault */
            errorState = DC_LINK_UNDERVOLTAGE_FAULT;
        }

        if (dcLinkState == DC_LINK_OVERVOLTAGE)
        {
            /* DC_LINK_OVERVOLTAGE is a hard fault */
            errorState = DC_LINK_OVERVOLTAGE_FAULT;
        }

        if (batteryState == BATTERY_UNDERVOLTAGE)
        {
            errorState = BATTERY_UNDERVOLTAGE_FAULT;
        }

        if (batteryState == BATTERY_OVERVOLTAGE)
        {
            errorState = BATTERY_OVERVOLTAGE_FAULT;
        }

        if (pushPullCurrentState == PUSHPULL_OVERCURRENT)
        {
            errorState = PUSHPULL_OVERCURRENT_FAULT;
        }

        if (inverterCurrentState == INVERTER_OVERCURRENT)
        {
            errorState = INVERTER_OVERCURRENT_FAULT;
        }

        if (inverterDriverState == DRIVER_FAULT_ACTIVE)
        {
            errorState = INVERTER_DRIVER_FAULT;
        }

        if (mainsStartupState == MAINS_NOT_OK)
        {
            errorState = MAINS_STARTUP_FAULT;
        }
    }
    break;
    }

    TMR2 = 0;
    IFS0bits.T2IF = 0; /* Clear Interrupt Flag */
}