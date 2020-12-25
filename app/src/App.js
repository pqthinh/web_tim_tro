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

function App() {
  return (
    <>
      <Router >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchScreen } />
          <Route path='/up' component={PostNews } />
          <PublicRoute path="/post/:id" component={DetailPost} />
          <PrivateRoute path="/profile" component={ProfileOwner} />
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
