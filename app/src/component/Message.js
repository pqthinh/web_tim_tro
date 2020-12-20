import React from "react";
import ItemMessage from "./ItemMessage";

export default function Message() {
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
                        <ItemMessage key={index} message={x} />
                    ))
                }
                
                <a className="dropdown-item text-center small text-gray-500" href="!#">Mở hộp chat</a>
            </div>
        </li>
    )
}