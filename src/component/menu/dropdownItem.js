import React from 'react'

export default function ItemComponent({props}) {
    const img =  props.img || 'bg-warning'

    return (
        <a className="dropdown-item d-flex align-items-center" href="!#">
            <div className="mr-3">
                <div className={`icon-circle ${img}`}>
                    <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
            </div>
            <div>
                <div className="small text-gray-500">{props.date|| "2020-12-12"}</div>
                {(props.content|| "Spending Alert: We've noticed unusually high spending for your account.").slice(0,20)+ "..."}
            </div>
        </a>
    )
}