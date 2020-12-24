import React, { useState } from 'react'
import { Link }  from 'react-router-dom'

export default function Login() {
    const [error, setError] =  useState(false)
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Member Login
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" value= 'Login' />
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