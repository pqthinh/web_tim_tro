
import {getUser , removeUserSession} from '../Utils/Common'

const fake = {
    name: "Pham Quang Thinh",
    avatar: "http://localhost:3000/favicon.png"
}

const UserItem = ({props})=> {
    const user = getUser() || fake
    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/login');
    }
    return (
        <div>
            {/* <li className="nav-item dropdown no-arrow"> */}
                <div className="nav-link dropdown-toggle" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style ={{display: 'flex'}}>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{user.name}</span>
                    <img src={user.avatar} className="img-profile rounded-circle avatar" alt="profile"/>
                </div>
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
            {/* </li> */}
        </div>
    )
}

export default UserItem