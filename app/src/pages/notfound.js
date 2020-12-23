import React from 'react'
import { Link , useHistory } from 'react-router-dom'
import ButtonGoBack from '../component/history/buttonGoBack'

export default function NotFoundScreen() {
    let history = useHistory()

    return(
        <div className="container-fluid container-login100" onClick={() => history.goBack()}>
            {/* -- 404 Error Text  */}
            <img src="https://image.freepik.com/free-vector/creative-404-error-background_23-2147789708.jpg" className="App-logo" alt="Page not found" />
            <div className="text-center">
                <div className="mx-auto" data-text="404">404</div>
                <p className="lead text-gray-800 mb-5">Page Not Found</p>
                <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <ButtonGoBack> &larr; Back to Dashboard </ButtonGoBack>
            </div>

        </div>
    )
}