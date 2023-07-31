'use client'
import { useState } from "react"
import AuthModal from '@/component/modal/AuthModal'
import { useRouter } from 'next/navigation'
import React from 'react'
import axios from "axios"
export default function SignUp() {
    const router = useRouter()
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)

    const onChangeText = (e) => { setState({ ...state, [e.target.name]: e.target.value }) }
    const onSubmit = async () => {
        setLoading(true)
        const response = await axios.post('http://localhost:4000/api/users/auth/signup-email-password/', state)
        const { data, status, msg } = response.data
        if (status === 200) {
            router.push('/signin')
            setLoading(false)
        }
    }
    return (
        <AuthModal
            title="Create account"
            reject="cancel"
            accept={!loading ? "Create Account" : "Please wait..."}
            rejectHandler={() => router.push('/')}
            acceptHandler={onSubmit}
        >
            <div className="login-form">
                <form>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="first_name"
                                    style={{ paddingLeft: 40 }}
                                    placeholder="First Name"
                                    onChange={onChangeText}
                                />
                                <span className="input-icon"><i className="fa fa-user"></i></span>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="last_name"
                                    style={{ paddingLeft: 40 }}
                                    placeholder="Last Name"
                                    onChange={onChangeText}
                                />
                                <span className="input-icon"><i className="fa fa-user"></i></span>
                            </div>
                        </div>
                    </div>

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
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            onChange={onChangeText}
                        />
                        <span className="input-icon"><i className="fa fa-phone"></i></span>
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
                    <div className="seperator"><b>or</b></div>
                    <div className="social-icon">
                        <button type="button"><i className="fa fa-google"></i></button>
                        <button type="button"><i className="fa fa-linkedin"></i></button>
                    </div>
                    <a className="reset-psw" href="signin">Login Instead</a>
                </form>
            </div>
        </AuthModal>
    )
}
