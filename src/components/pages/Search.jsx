import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ContentSearch from '../searchBar/ContentSearch'

import './Search.css'

function Search() {
    return (
        <div className="spa">
            <div className="row">
                <Navbar />
                <ContentSearch />
            </div>
            <Footer />
        </div>
    )
}

export default Search