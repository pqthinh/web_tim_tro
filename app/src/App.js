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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <PublicRoute path="/chitiet.html" component={DetailPost} />


          <PublicRoute path='/login' component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/forgotpass" component={ForgotPassword} />
          <PublicRoute path="/renter" component={RegisterRenterScreen} />
          <PublicRoute path="/owner" component={RegisterOwnerScreen} />
          <Route component={NotFoundScreen} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
