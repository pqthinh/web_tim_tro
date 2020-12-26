import React , {useState, useEffect}  from 'react'
import { Route, Switch , BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from './Utils/PrivateRoute'
import PublicRoute from './Utils/PublicRoute'

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register/register";
import ForgotPassword from "./pages/forgot-password";
import RegisterRenterScreen from "./pages/register/register-renter";
import RegisterOwnerScreen from "./pages/register/register-owner";
import NotFoundScreen from "./pages/notfound";
import DetailPost from "./pages/detailPost";
import SearchScreen from './pages/searchPost'
import PostNews from "./pages/postNews";
import ProfileOwner from "./pages/ProflieOwner";

import {getToken,  removeUserSession, setUserSession } from './Utils/Common'
import axios from './fetch/axios';
import OwnerRoute from './Utils/OwnerRoute';
import MemberRoute from './Utils/MemberRoute';

function App() {
  // const [authLoading, setAuthLoading] = useState(true);
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }

  //   axios.get(`http://localhost:4000/api/verifyToken?token=${token}`).then(response => {
  //     console.log(response.data.user)
  //     setUserSession(response.data.token, response.data.user)
  //     setAuthLoading(false);
  //     console.log("Load token")
  //     axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
  //   }).catch(error => {
  //     console.log("remove token")
  //     removeUserSession();
  //     setAuthLoading(false);
  //     delete axios.defaults.headers.common.Authorization
  //   });
    
  // }, []);

  // if (authLoading && getToken()) {
  //   return (
  //     <div className="App"> Checking Authentication...</div>
  //   )
  // }
  return (
    <>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchScreen } />
          <OwnerRoute path='/up' component={PostNews } />
          <PublicRoute path="/post/:id" component={DetailPost} />
          {/* <PrivateRoute path="/profile" component={ProfileOwner} /> */}
          <MemberRoute path="/profile" component={ProfileOwner} />
          
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/forgotpass" component={ForgotPassword} />
          <PublicRoute path="/renter/signup" component={RegisterRenterScreen} />
          <PublicRoute path="/owner/signup" component={RegisterOwnerScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
