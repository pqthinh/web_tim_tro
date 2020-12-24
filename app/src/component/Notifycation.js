import React from 'react'
import ItemNotifycation from './ItemNotifycation'

export default function Notifycation({props}) {
    const header = "Thong bao"
    const data = [
        {
            img: 'bg-success',
            date: "2020-12-15",
            content: "A new monthly report is ready to download!"
        },
        {
            img: 'bg-warning',
            date: "2020-12-12",
            content: "123A new monthly report is ready to download!"
        },
        {
            img: 'bg-success',
            date: "2020-12-15",
            content: "A new monthly report is ready to download!"
        },
        {
            img: 'bg-warning',
            date: "2020-12-12",
            content: "123A new monthly report is ready to download!"
        }
    ]
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="!#" id="alertsDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-bell fa-fw"></i>
                {/* <!-- Counter - Alerts --> */}
                <span className="badge badge-danger badge-counter">{data.length}</span>
            </a>
            {/* <!-- Dropdown - Alerts --> */}
            <div className="dropdown-list dropdown-menu dropdown-menu-left shadow animated--grow-in"
                aria-labelledby="alertsDropdown" style={{width: "300px"}}>
                <h6 className="dropdown-header">
                    {header}
                </h6>
                {
                    data.map(x=> (
                        <ItemNotifycation props={x} key={x}/>
                    ))
                }
                <a className="dropdown-item text-center small text-gray-500" href="!#">Show All Alerts</a>
            </div>
        </li>
    )
}