import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    const [page, setPage] = useState('')
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="https://previews.123rf.com/images/perhapzzz/perhapzzz1603/perhapzzz160301101/54368918-real-estate-concept-notepad-with-buy-or-rent-message-pen-and-flower-office-supplies-on-desk-table-to.jpg" alt="img of register selection" />
                    </div>

                    <form className="login100-form validate-form">
                        
                        <div className="container-login100-form-btn">
                            <Link to="/renter">
                                <button className="login100-form-btn" onClick={()=> setPage("renter")}>
                                    Register acount as renter
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </Link> 
                        </div>

                        <div className="container-login100-form-btn">
                            <Link to="/owner">
                                <button className="login100-form-btn" onClick={()=>setPage("owner")}>
                                    Register acount as owner <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </Link> 
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
        
    )
}
