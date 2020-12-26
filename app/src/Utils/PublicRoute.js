import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  // console.log(rest, Component)
  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  )
}

export default PublicRoute;