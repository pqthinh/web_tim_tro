import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>

                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                    and we'll send you a link to reset your password!</p>
                            </div>
                            <form className="login100-form validate-form">
                                    <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="email" name="email" placeholder="Email" />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <input type="button"  className="login100-form-btn" value= 'Reset password' />
                                    </div>
                            </form>
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