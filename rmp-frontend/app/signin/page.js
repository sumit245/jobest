'use client'
import React, { useState } from 'react'
import AuthModal from '@/component/modal/AuthModal'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function SignIn() {
    const router = useRouter()
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)

    const onChangeText = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    const onSubmit = async () => {
        console.log(state)
        setLoading(true)
        const response = await axios.post('http://localhost:4000/api/users/auth/signin-email-password/', state)
        const { user, token } = response.data
        console.log(user)
        if (token) {
            router.push('/home')
            setLoading(false)
        }
    }
    return (
        <AuthModal
            title="Login"
            reject="cancel"
            accept={!loading ? "login" : "Please wait..."}
            rejectHandler={() => router.push('/')}
            acceptHandler={onSubmit}
        >
            <div className="login-form">
                <form>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email_id"
                            placeholder="E-mail Address"
                            onChange={onChangeText}
                        />
                        <span className="input-icon"><i className="fa fa-envelope"></i></span>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChangeText}
                        />
                        <span className="input-icon"><i className="fa fa-lock"></i></span>
                    </div>
                    <a className="reset-psw" href="#">Forgot your password?</a>
                    <div className="seperator"><b className='or'>or</b></div>
                    <div className="social-icon">
                        <button type="button"><i className="fa fa-google"></i></button>
                        <button type="button"><i className="fa fa-linkedin"></i></button>
                    </div>
                    <a className="reset-psw" href="register"> Create an account</a>
                    <span className='reset-psw' style={{ color: '#777' }}>Not registered yet?{" "}</span>
                </form>
            </div>
        </AuthModal>
    )
}
