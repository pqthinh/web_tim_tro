import React from 'react'
import { useHistory } from 'react-router-dom'
import "../App.css"

export default function NotFoundScreen({props}) {
    let history = useHistory()
    return (
        <>
            <div className="App-header" onClick={() => history.goBack()}>
                <img src="https://image.freepik.com/free-vector/creative-404-error-background_23-2147789708.jpg" className="App-logo" alt="Page not found"/>
                <h2>
                    404 Not Found
                </h2>
            </div>
        </>
    )
}