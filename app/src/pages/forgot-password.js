import React , { useState } from 'react'
import { Link , useHistory } from 'react-router-dom'

import axios from '../fetch/axios'
import baseUrl from '../fetch/baseurl'

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)
  
    const handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setValue(value)
    }
    return {
        value,
        onChange: handleChange
    }
}

export default function ForgotPassword() {
    let history = useHistory()

    const [loading, setLoading] = useState(false)
    const email = useFormInput('')
    const isMember = useFormInput(true)
    const [error, setError] = useState(null)

    // handle button click of login form
    const handleRepass = () => {
        console.log(email.value, isMember.value)
        // validate
        if(!email.value || email.value.length === 0) {
            setError("Bạn chua nhập email")
            return
        }
        setError(null)
        setLoading(true)
        
        axios.post(`${baseUrl}/user/${isMember.value? "member" : "owner"}/forgotpass`, { email: email.value })
        .then(response => {
            setLoading(false)
            alert(response.data.msg)
            // setUserSession(response.data.token, response.data.user)
            history.push('/login')
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message)
            else if(error.response.status === 400) setError("Something went wrong. Please try again later.")
            else setError("Code invalid route redirect")
        })
        
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div style={{position: "absolute", top: 1 , left: 1}} onClick={()=> history.goBack()}>
                    <i class="fas fa-hand-point-left"></i> Back
                </div>
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                    and we'll send you a new password to reset your password!</p>
                            </div>
                            <form className="login100-form validate-form">
                                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="email" {...email} name="email" placeholder="Email" />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <label>
                                            Bạn là chủ trọ:
                                            <input name="isMember"  type="checkbox" {...isMember} />
                                        </label>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <input type="button"  className="login100-form-btn" value={loading ? 'Loading...' : 'Reset password'}  onClick={() => handleRepass()}  disabled={loading}/>
                                    </div>
                            </form>
                            <div className="text-center p-t-12">
                                <span className="text-center">
                                    {error && <><small style={{ color: 'red' }}>{error}</small></>}
                                </span>
                            </div>
                            <hr/>
                            <div className="text-center">
                                <Link className="small" to="/register">Create an Account! </Link>
                            </div>
                            <div className="text-center">
                                <Link className="small" to="/login">Already have an account? Login! </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}