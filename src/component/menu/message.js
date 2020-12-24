import React from "react";
import TimeAgo from 'react-timeago'
export default function MessageBoxComponent() {
    const data = [
        {
            avatar: "http://localhost:3000/favicon.png",
            content: `Hi there! I am wondering if you can help me with a
            problem I've been having.`,
            name: "",
            date: new Date() 
        },
        {
            avatar: "http://localhost:3000/favicon.png",
            content: `Hi there! I am wondering if you can help me with a
            problem I've been having.`,
            name: "",
            date: new Date() 
        },
        {
            avatar: "http://localhost:3000/favicon.png",
            content: `Hi there! I am wondering if you can help me with a
            problem I've been having.`,
            name: "",
            date: new Date() 
        },
        {
            avatar: "http://localhost:3000/favicon.png",
            content: `Hi there! I am wondering if you can help me with a
            problem I've been having.`,
            name: "",
            date: new Date() 
        }
    ]
    return(
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="!#" id="messagesDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-envelope fa-fw"></i>
                {/* <!-- Counter - Messages --> */}
                <span className="badge badge-danger badge-counter"> {data.length} </span>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in"
                aria-labelledby="messagesDropdown" style={{width: "250px"}}>
                <h6 className="dropdown-header">
                    Tin nhắn
                </h6>
                {
                    data.map((x, index) => (
                        <a className="dropdown-item d-flex align-items-center" href="/login" key={index}>
                            <div className="dropdown-list-image mr-3">
                                <img className="rounded-circle avatar" src={x.avatar}
                                    alt="" />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">{x.content.slice(0,20)+ "..."}</div>
                                <div className="small text-gray-500">{`${x.name} · `}<TimeAgo date={x.date}/></div>
                            </div>
                        </a>
                    ))
                }
                
                <a className="dropdown-item text-center small text-gray-500" href="!#">Mở hộp chat</a>
            </div>
        </li>
    )
}