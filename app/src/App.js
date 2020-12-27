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

import OwnerRoute from './Utils/OwnerRoute';
// import MemberRoute from './Utils/MemberRoute';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import MemberRoute from './Utils/MemberRoute';
import ProfileRenter from './pages/ProfileRenter';

function App() {
  
  return (
    <>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchScreen } />
          <OwnerRoute path='/up' component={PostNews } />
          <PublicRoute path="/post/:id" component={DetailPost} />
          {/* <PrivateRoute path="/profile" component={ProfileOwner} /> */}
          <PrivateRoute path="/profile" exact component={ProfileRenter} />

          {/* <MemberRoute path='/fav' component={ProfileRenter } /> */}
          <PublicRoute path="/profile/owner/:id" component={ProfileOwner} />
          
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/forgotpass" component={ForgotPassword} />
          <PublicRoute path="/renter/signup" component={RegisterRenterScreen} />
          <PublicRoute path="/owner/signup" component={RegisterOwnerScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
      <MessengerCustomerChat
        pageId="105594764796304"
        appId="1552657571597902"
      />,
    </>
  )
}

export default App;
