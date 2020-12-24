import React from 'react';
import './Note.css';

const Note = (props) => {
    // console.log(props)
    return (
        <div className="card-note">
            <div>Chú ý:</div>
            {props.children}
        </div>
    )
}
export default Note