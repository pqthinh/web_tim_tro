import React, { useState} from 'react'
import axios from 'axios'
import {setUserSession} from '../Utils/Common'
import baseUrl from '../fetch/baseurl'
// var passwordHash = require('password-hash');

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)
  
    const handleChange = e => {
         setValue(e.target.value)
    }
    return {
        value,
        onChange: handleChange
    }
}

export default function Login(props) {
    const [loading, setLoading] = useState(false)
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)

    // handle button click of login form
    const handleLogin = () => {
        setError(null)
        setLoading(true)
        // passwordHash.generate(password.value )
        axios.post(`${baseUrl}/user/admin/login`, { username: username.value, password: password.value })
        .then(response => {
            setLoading(false)
            setUserSession(response.data.token, response.data.user)
            props.history.push('/')
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
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src="images/img-01.png" alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Admin Login
                        </span>
                        
                        <div className="wrap-input100 validate-input" data-validate = "Valid username is required">
                            <input className="input100" type="text" {...username} placeholder="username" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-user" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" {...password} placeholder="Password" />
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <input type="button"  className="login100-form-btn" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                        </div>

                        <div className="text-center p-t-12">
                            <span className="text-center">
                                {error && <><small style={{ color: 'red' }}>{error}</small></>}
                            </span>
                        </div>

                        <div className="text-center p-t-136">
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};