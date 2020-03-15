import React from 'react'
import logo from '../../assets/imgs/logo.png'

import './Logo.css'

function Logo() {
    return (
        <div className="logo">
            <div className="img">
                <img src={logo} alt="Music"/>
            </div>
            <h1>Music</h1>
        </div>
    )
}

export default Logo