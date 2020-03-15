import React from 'react'
import { Link } from 'react-router-dom'

import './NavItens.css'

function NavItens(props) {
    return (
        <Link to={props.route} className="links">
            <div className="nav-item">
                <h5>{props.label}</h5>
            </div>
        </Link>
    )
}

export default NavItens