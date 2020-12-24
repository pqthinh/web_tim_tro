import React, { useState } from 'react'
// import { Link }  from 'react-router-dom'

// chưa có validation / chưa handle form
export default function RegisterOwnerScreen() {
    const [error, setError] = useState("Tai khoan cua ban dang cho duyet")
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="login100-pic js-tilt" data-tilt>
                    <img src="images/img-01.png" alt="IMG" />
                </div>
                <div className="wrap-login100 col-sm-6">
                    <span className="login100-form-title">
                        Owner register
                    </span>
                    
                    <span className="text-center">
                        {error && <><small style={{ color: 'red' }}>{error}</small></>}
                    </span>

                    <form >
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="name"
                                    placeholder="Full Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="email"
                                placeholder="Email Address" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="phone"
                                    placeholder="Phone number" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user"
                                    id="identification" placeholder="ID" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user"
                                    id="tinh" placeholder="City"/>
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user"
                                    id="huyen" placeholder="District" />
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user"
                                    id="xa" placeholder="Wards" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="sonha"
                                placeholder="Street, Number ... " />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user"
                                    id="pass" placeholder="Password" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user"
                                    id="repass" placeholder="Repeat Password" />
                            </div>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" value= 'Register' />
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};