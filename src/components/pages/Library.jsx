import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Header from '../content/Header'
import Playlists from '../library/Playlists'
import CardsRow from '../searchBar/CardsRow'

import './Library.css'

function Library() {
    return (
        <div className="spa">
            <div className="row">
                <Navbar />
                <div className="content">
                    <Header />
                    <Playlists />
                    <CardsRow />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Library