import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from './fetch/axios';

import Login from './screen/login'
import Home from './screen/home'
import {getToken,  removeUserSession, setUserSession } from './Utils/Common'
import PrivateRoute  from './Utils/PrivateRoute'
import PublicRoute from './Utils/PublicRoute'
import NotFoundScreen from './screen/notFound';

import "./css/menu.css"
import TestTable from './component/table/tableOwner';
import TableNoti from './component/table/tableNoti';
import baseUrl from './fetch/baseurl';

function App() {
  const [authLoading, setAuthLoading] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`${baseUrl}/verifyToken?token=${token}`).then(response => {
      console.log(response.data.user)
      setUserSession(response.data.token, response.data.user)
      setAuthLoading(false);
      console.log("Load token")
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
    }).catch(error => {
      console.log("remove token")
      removeUserSession();
      setAuthLoading(false);
      delete axios.defaults.headers.common.Authorization
    });
    
  }, []);

  if (authLoading && getToken()) {
    return (
      <div className="App"> Checking Authentication...</div>
    )
  }

  return (
    <div className="App">
      <Router>
          <div>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/customer" component={TestTable} />
              <PrivateRoute path="/manageNoti" component={TableNoti} />
              <Route component={NotFoundScreen} />
            </Switch>
          </div>
      </Router>
    </div>
  )
}

export default App;
