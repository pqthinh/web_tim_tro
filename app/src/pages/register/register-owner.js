import React, { useState } from 'react'
import { Link , useHistory}  from 'react-router-dom'

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

// chưa có validation / chưa handle form
export default function RegisterOwnerScreen() {
    let history = useHistory()
    
    const [loading, setLoading] = useState(false)
    const name = useFormInput('')
    const email = useFormInput('')
    const tinh = useFormInput('')
    const huyen = useFormInput('')
    const xa = useFormInput('')
    const sonha = useFormInput('')
    const phone = useFormInput('')
    const password = useFormInput('')
    const repass = useFormInput('')
    const cmt = useFormInput('')
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
        // numberphone
        var part =  new RegExp(/(09|01[2|6|8|9])+([0-9]{8})\b/)
        if (!part.test(phone.value)) {
            setError("Phone number not validation")
            return
        }

        // check id 
        var part = new RegExp(/^([0-9]){9,12}$/)
        if(!part.test(cmt.value)) {
            setError("Cmt not validation")
            return
        }

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

        let place= sonha.value+", "+ xa.value +", "+ huyen.value + ", "+tinh.value

        axios.post(`${baseUrl}/user/owner/signup`, { cmt: cmt.value, email: email.value, password: password.value, phone: phone.value, place:  place , name: name.value })
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
                <div className="login100-pic js-tilt" data-tilt>
                    <img src={`${uriClient}/images/img-01.png`} alt="IMG" />
                </div>
                <div className="wrap-login100 col-sm-6">
                    <span className="login100-form-title">
                        Owner register
                    </span>
                    
                    
                    <div className="text-center p-t-12">
                        <span className="text-center">
                            {error && <><small style={{ color: 'red' }}>{error}</small></>}
                        </span>
                    </div>

                    <form >
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="name" {...name} required
                                    placeholder="Full Name" />
                            
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="email" {...email} required
                                placeholder="Email Address" />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" id="phone" {...phone} required
                                    placeholder="Phone number" />
                            </div>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-user" {...cmt} required
                                    id="cmt" placeholder="ID" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" {...tinh} required
                                    id="tinh" placeholder="City"/>
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" {...huyen} required
                                    id="huyen" placeholder="District" />
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <input type="text" className="form-control form-control-user" {...xa} required
                                    id="xa" placeholder="Wards" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user" id="sonha" {...sonha} required
                                placeholder="Street, Number ... " />
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" className="form-control form-control-user" {...password} required
                                    id="pass" placeholder="Password" />
                            </div>
                            <div className="col-sm-6">
                                <input type="password" className="form-control form-control-user" {...repass} required
                                    id="repass" placeholder="Repeat Password" />
                            </div>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" onClick={()=> handleRegister()} value={loading ? 'Loading...' : 'Register'}  disabled={loading} value= 'Register'  />
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