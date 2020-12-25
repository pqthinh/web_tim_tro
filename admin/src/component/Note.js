import React from 'react';
import './Note.css';

const Note = (props) => {
    let header = props.title || "Chú ý: "
    return (
        <div className="card-note">
            <div>{header}</div>
            {props.children}
        </div>
    )
}
export default Note