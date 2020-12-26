import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken, getUser } from './Common';

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  const user = getUser()
  const token = getToken()
  let redirect = true
  if(!token || !user)  redirect=false
  console.log(user)
  return (
    <Route
      {...rest}
      render={(props) => redirect ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;