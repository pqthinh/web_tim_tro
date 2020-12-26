import React, { useState } from 'react'
import { Link , useHistory}  from 'react-router-dom'

import axios from 'axios'
import baseUrl from '../fetch/baseurl'
import {setUserSession} from '../Utils/Common'
import uriClient from '../fetch/uriClient'

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)
  
    const handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? !target.checked : target.value;
        setValue(value)
    }
    return {
        value,
        onChange: handleChange
    }
}


export default function Login() {
    let history = useHistory()
    
    const [loading, setLoading] = useState(false)
    const email = useFormInput('')
    const password = useFormInput('')
    const isMember = useFormInput(true)
    const [error, setError] = useState(null)

    // handle button click of login form
    const handleLoginMember = () => {
        console.log(email.value, password.value , isMember.value)
        setError(null)
        setLoading(true)
        // passwordHash.generate(password.value )
        isMember.value? (
            axios.post(`${baseUrl}/user/member/login`, { email: email.value, password: password.value })
            .then(response => {
                setLoading(false)
                setUserSession(response.data.token, response.data.user)
                history.push('/')
            }).catch(error => {
                setLoading(false);
                if (error.response.status === 401) setError(error.response.data.message)
                else if(error.response.status === 400) setError("Something went wrong. Please try again later.")
                else setError("Code invalid route redirect")
            })
        ):
        (
            axios.post(`${baseUrl}/user/owner/login`, { email: email.value, password: password.value })
            .then(response => {
                setLoading(false)
                setUserSession(response.data.token, response.data.user)
                history.push('/')
            }).catch(error => {
                setLoading(false);
                if (error.response.status === 401) setError(error.response.data.message)
                else if(error.response.status === 400) setError("Something went wrong. Please try again later.")
                else setError("Code invalid route redirect")
            })
        )
    }

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={`${uriClient}/images/img-01.png`} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" {...email} name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" {...password} name="pass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input">
                            <label>
                                Đăng nhập là chủ trọ:
                                <input name="isMember"  type="checkbox" {...isMember} />
                            </label>
                        </div>

                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" value={loading ? 'Loading...' : 'Login'}  onClick={() => handleLoginMember()}  disabled={loading}/>
                        </div>
                        <div className="text-center p-t-12">
                            <span className="text-center">
                                {error && <><small style={{ color: 'red' }}>{error}</small></>}
                            </span>
                        </div>

                        <div className="text-center p-t-10">
                            
                        </div>
                        <div class="text-center">
                            <Link class="small" to="forgotpass">Forgot Password? </Link>
                        </div>
                        <hr/>
                        <div class="text-center">
                            <Link class="small" to="register">Register Account </Link>
                        </div>
                    </form>
                    <hr/>
                    
                </div>
            </div>
        </div>
    );
};