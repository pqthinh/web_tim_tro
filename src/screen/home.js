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
// import ImageUpload from "../component/postNews/imageuploadtest";
import MessageBoxComponent from "../component/menu/message";
import BoxItemComponent from "../component/menu/ItemBox";
import TableOwner from "../component/table/tableOwner";
import TableMember from "../component/table/tableMember";
import TableReview from "../component/table/tableComment";
import TablePost from "../component/table/tablePost";
import TableReport from "../component/table/tableReport";
import { PostForm } from "../component/post/postForm";

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
                  <Link className="nav-link" to="/postNew">Đăng tin</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/manager" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Quản trị
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/customer">Quản lý Chủ nhà</Link>
                    <Link className="dropdown-item" to="/member">Quản lý thành viên</Link>
                    <Link className="dropdown-item" to="/review">Quản lý nhận xét về tin</Link>
                    <Link className="dropdown-item" to="/managePost">Quản lý về tin đăng</Link>
                    <Link className="dropdown-item" to="/manageReport">Quản lý về báo cáo</Link>
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
              <TableOwner /> 
          </PrivateRoute>
          <PrivateRoute path="/notifycations">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/customer" component={TableOwner} />
          <PrivateRoute path="/member" component={TableMember} />
          <PrivateRoute path="/review" component={TableReview} />
          <PrivateRoute path="/managePost" component={TablePost} />
          <PrivateRoute path="/manageReport" component={TableReport} />
          <PrivateRoute path="/postNew" component={PostForm}/>
          <PrivateRoute path="/posts">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/chats">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/statistical">
              <Chat />
          </PrivateRoute>
          <PrivateRoute path="/information">
              <Chat />
          </PrivateRoute>
        </Switch>
      </div>
  </div>
  </Router>
  );
}