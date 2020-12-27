import React , { useState } from 'react'
import { Link , useHistory }  from 'react-router-dom'

import axios from '../../fetch/axios'
import baseUrl from '../../fetch/baseurl'
import uriClient from '../../fetch/uriClient'

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


export default function RegisterRenterScreen() {

    let history = useHistory()
    
    const [loading, setLoading] = useState(false)
    const name = useFormInput('')
    const email = useFormInput('')
    const place = useFormInput('')
    const phone = useFormInput('')
    const password = useFormInput('')
    const repass = useFormInput('')
    const [error, setError] = useState(null)

    // handle button click of login form
    const handleRegister = () => {
        console.log(password.value , name.value)
        // email
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email.value)) {
          setError("Email not validation")
          return
        }
        setError(null)
        // numberphone
        var part =  new RegExp(/(09|01[2|6|8|9])+([0-9]{8})\b/)
        if (!part.test(phone.value)) {
            setError("Phone number not validation")
            return
        }
        setError(null)

        // check pass
        if(password.value.length < 5 || password.value.length > 40) {
            setError("password  in range 5-40 charector")
            return
        }

        if(password.value !== repass.value) {
            setError("confirm pass not match")
            return
        }
        setError(null)
        setLoading(true)

        axios.post(`${baseUrl}/user/member/signup`, { email: email.value, password: password.value, phone: phone.value, place:  place.value , name: name.value })
        .then(response => {
            setLoading(false)
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
                        <img src={`${uriClient}/images/img-01.png`} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Register Member renter
                        </span>

                        <div className="wrap-input100 validate-input" data-validate = "Valid name is required: pham quang thinh">
                            <input className="input100" {...name} type="text" name="name" placeholder="Full name" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user-circle" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                            <input className="input100" {...email} type="email" name="email" placeholder="Email" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid place is required: pham quang thinh">
                            <input className="input100" {...place} type="text" name="place" placeholder="Type your's address" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Valid name is required: 0998765456">
                            <input className="input100" {...phone} type="text" name="phone" placeholder="Phone number" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                            <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" {...password} type="password" name="repass" placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Type confirm password is required">
                            <input className="input100" {...repass} type="password" name="repass" placeholder="Retype your password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" onClick={()=> handleRegister()} value={loading ? 'Loading...' : 'Register'}  disabled={loading} />
                        </div>
                        <div className="text-center p-t-12">
                            <span className="text-center">
                                {error && <><small style={{ color: 'red' }}>{error}</small></>}
                            </span>
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
                            <Link class="small" to="../login">Already have an account? Login! </Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};