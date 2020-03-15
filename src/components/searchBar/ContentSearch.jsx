import React from 'react'
import Header from '../content/Header'
import InputSearch from './InputSearch'
import CardsRow from './CardsRow'

import '../content/Content.css'

function ContentSearch() {
    return (
        <div className="content content-search">
            <Header />
            <InputSearch />
            <CardsRow />
            <CardsRow />
            <CardsRow />
        </div>
    )
}

export default ContentSearch