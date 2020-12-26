import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken, getUser } from './Common';
import ModalRedirectLogin from './ModalRedirectLogin';

// handle the private routes
function OwnerRoute({ component: Component, ...rest }) {
    const user = getUser()
    const token = getToken()
    let redirect = true
    if(!token || !user)  redirect=false
    //   console.log(user)
    if(user.role !== "owner") redirect=false
    if(!redirect) alert(<ModalRedirectLogin />)
    return (
        <Route
        {...rest}
        render={(props) => redirect ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

export default OwnerRoute;