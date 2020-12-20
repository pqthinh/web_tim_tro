import React from 'react'
import { Link }  from 'react-router-dom'

export default function RegisterRenterScreen() {

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Register Member renter
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="name" placeholder="Full name" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" type="email" name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="repass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="pass" placeholder="Retype your password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" value= 'Register' />
                        </div>

                        <Link to="#"> 
                            <button class="btn btn-google btn-user btn-block p-t-10" >
                                <i class="fa fa-google fa-fw"></i> Register with Google
                            </button>
                        </Link>
                        <Link to="#">
                            <button class="btn btn-facebook btn-user btn-block p-t-10">
                                <i class="fa fa-facebook-f fa-fw"></i> Register with Facebook
                            </button> 
                        </Link>
                        <hr/>
                        <div class="text-center">
                            <Link class="small" to="login">Already have an account? Login! </Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};