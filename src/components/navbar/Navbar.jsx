import React from 'react'
import Logo from './Logo'
import NavItens from './NavItens'

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <div className="navigation">
                <NavItens route="/" label="Início" />
                <NavItens route="/search" label="Buscar" />
                <NavItens route="/library" label="Sua Biblioteca" />
            </div>
        </div>
    )
}

export default Navbar