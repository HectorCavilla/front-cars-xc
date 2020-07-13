import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

export const NotFound = () => {
    return (
        <React.Fragment>
            <div>
                <h1 className="title">¡404!</h1>
                <h2 className="subtitle">No existe la página</h2>
            </div>
            <ButtonBackToHome />
        </React.Fragment>
    )
}