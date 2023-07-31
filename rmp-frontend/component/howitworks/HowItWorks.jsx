import React from 'react'

export default function HowItWorks() {
    return (
        <section className="py-5">
            <div
                className="bg-holder"
                style={{
                    backgroundImage: "url(assets/img/illustrations/bg.png)",
                    backgroundPosition: "left top",
                    backgroundSize: "initial",
                    marginTop: "-180px"
                }}
            ></div>
            {/*/.bg-holder*/}
            <div className="container">
                <div className="row flex-center">
                    {/* <div className="col-md-3 order-md-0 text-center text-md-start">
                        <img
                            className="img-fluid mb-4"
                            src="assets/img/illustrations/passion.png"
                            width={450}
                            alt=""
                        />
                    </div> */}
                    <div className="col-md-6 text-center text-md-start">
                        <h6 className="fw-bold fs-3 fs-lg-3 display-3 lh-sm">
                            This is how ReferMyPal will transform the recruitment industry
                        </h6>
                        <p className="my-2 pe-xl-8">
                            Find a job that suits your interests and talents. A high salary is not
                            the top priority. Most importantly,You can work according to your
                            heart's desire.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <div className='card bg-white border-light'>
                            <div className='card-header bg-white border-light'>
                                <h6 className="fw-bold fs-1 fs-lg-1 text-center lh-sm">How It Works</h6>
                            </div>
                            <ul className='list-unstyled'>
                                <li className='list-item my-4 justify-content-between mx-4'>
                                    <img src="assets/img/illustrations/passion.png" width={48} className='img-fluid' />
                                    <span className="my-4 pe-xl-8">Submit your candidate's details.</span>
                                </li>
                                <li className='list-item my-4 justify-content-between mx-4'>
                                    <img src="assets/img/illustrations/passion.png" width={48} className='img-fluid' />
                                    <span className="my-4 pe-xl-8">Your candidate is notified by email and accepts your referral.</span>
                                </li>
                                <li className='list-item my-4 justify-content-between mx-4'>
                                    <img src="assets/img/illustrations/passion.png" width={48} className='img-fluid' />
                                    <span className="my-4 pe-xl-8">If your employer hires and retains your candidate for 3 months, you get the reward.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
