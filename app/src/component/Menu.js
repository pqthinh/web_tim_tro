import React from 'react'
import {Link } from 'react-router-dom'

import UserItem from './ItemProfile'
import Message from './Message'
import Notifycation from './Notifycation'
import Favourite from './Favourite'

import './Menu.css'

const Menu = () => {
    return (
        <div className="menu_homepage">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" href="/"><img src = {"http://localhost:3000/logo.png"} className="logo" alt="logo app rental house"/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <i class="fas fa-bars"></i>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Trang chủ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/up">Đăng tin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/up">Tìm phòng</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/news"> Tin tức</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manager"> Liên hệ</a>
                </li>
              </ul>
              
              <Notifycation />
              <Message />
              <Favourite />
              <div className="topbar-divider d-none d-sm-block"></div>
              <UserItem />
              <div className="topbar-divider d-none d-sm-block"></div>

            </div>
          </nav>
        </div>
    )
}

export default Menu