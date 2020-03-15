import React from 'react'

import './Header.css'

function Header() {
    return (
        <header>
            <div className="menu-header">
                <div className="subscribe">
                    <span>Inscrever-se</span>
                </div>
                <div className="login">
                    <button>Entrar</button>
                </div>
            </div>
        </header>
    )
}

export default Header