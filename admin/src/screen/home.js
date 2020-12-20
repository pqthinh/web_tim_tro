import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import PrivateRoute from '../Utils/PrivateRoute'
import { removeUserSession , getUser} from '../Utils/Common'
import Chat from './pages/chat'
import '../css/menu.css'
import ImageUpload from "../component/postNews/imageuploadtest";
import MessageBoxComponent from "../component/menu/message";
import BoxItemComponent from "../component/menu/ItemBox";
import TableOwner from "../component/table/tableOwner";
import TableMember from "../component/table/tableMember";

export default function NestingExample(props) {
  const user = getUser()
  // handle click event of logout button
  const handleLogout = () => {
      removeUserSession();
      props.history.push('/login');
  }
  return (
    <Router>
      <div >
        <div>
        {user?
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/"><img src = {"http://localhost:3000/logo.png"} className="logo" alt="logo app rental house"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/home">Trang chủ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/up">Đăng tin</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/manager" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Quản trị
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/customer">Quản lý Chủ nhà</Link>
                    <Link className="dropdown-item" to="/member">Quản lý thành viên</Link>
                    <a className="dropdown-item" href="/post">Quản lý tin đăng</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/duyet">Phê duyệt</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <BoxItemComponent />
              <MessageBoxComponent />
  
              <div className="topbar-divider d-none d-sm-block"></div>

              <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="!#" id="userDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.name}</span>
                      <img src={user.avatar} className="img-profile rounded-circle avatar" alt="profile"/>
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown">
                  
                  <a className="dropdown-item" href="!#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                  </a>
                  <a className="dropdown-item" href="!#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <span className="dropdown-item" href="!#" data-toggle="modal" data-target="#logoutModal" onClick={()=> handleLogout()}>
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                  </span>
                </div>
              </li>
              
            </div>
          </nav>
        </div>: null }
      </div>
      <div className ="container">
        <Switch>
          <PrivateRoute exact path="/">
              <Topic /> 
          </PrivateRoute>
          <PrivateRoute path="/notifycations">
              <Home />
          </PrivateRoute>
          <PrivateRoute path="/customer" component={TableOwner} />
          <PrivateRoute path="/member" component={TableMember} />
          <PrivateRoute path="/posts">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/chats">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/statistical">
              <Topics />
          </PrivateRoute>
          <PrivateRoute path="/information">
              <Home />
          </PrivateRoute>
        </Switch>
      </div>
  </div>
  </Router>
  );
}

function Home() {
  return (
    <div>
      <ImageUpload />
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path={path}>
          <h3>Please select a topic.</h3>
        </PrivateRoute>
        <PrivateRoute path={`${path}/:topicId`}>
          <Topic />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
