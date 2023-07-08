'use client'
import AuthModal from '@/component/modal/AuthModal'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignIn() {
    const router = useRouter()

    return (
        <AuthModal
            title="Login"
            reject="cancel"
            accept="login"
            rejectHandler={() => router.push('/')}
            acceptHandler={() => router.push('/')}
        >
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail Address" />
                        <span className="input-icon"><i className="fa fa-envelope"></i></span>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="psw"
                            placeholder="Password" />
                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                    </div>
                    <a className="reset-psw" href="#">Forgot your password?</a>
                    <div className="seperator"><b className='or'>or</b></div>
                    <div className="social-icon">
                        <button type="button"><i className="fa fa-google"></i></button>
                        <button type="button"><i className="fa fa-linkedin"></i></button>
                    </div>
                    <p className='login-text'>Don't have an account? <a className="reset-psw" href="#">Signup</a> </p>
                </form>
            </div>
        </AuthModal>
    )
}
