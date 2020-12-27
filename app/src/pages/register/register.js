import React from 'react'
import { Link , useHistory } from 'react-router-dom'

export default function Register() {
    let history = useHistory()
    return (
        <div className="limiter">
            <div className="container-login100">
                <div style={{position: "absolute", top: 1 , left: 1}} onClick={()=> history.goBack()}>
                    <i class="fas fa-hand-point-left"></i> Back
                </div>
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="https://previews.123rf.com/images/perhapzzz/perhapzzz1603/perhapzzz160301101/54368918-real-estate-concept-notepad-with-buy-or-rent-message-pen-and-flower-office-supplies-on-desk-table-to.jpg" alt="img of register selection" />
                    </div>

                    <form className="login100-form validate-form">
                        
                        <div className="container-login100-form-btn">
                            <Link to="/renter/signup">
                                <button className="login100-form-btn">
                                    Register acount as renter
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </Link> 
                        </div>

                        <div className="container-login100-form-btn">
                            <Link to="/owner/signup">
                                <button className="login100-form-btn" >
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

// const [page, setPage] = useState('')
// onClick={()=> setPage("renter")}
// onClick={()=>setPage("owner")}