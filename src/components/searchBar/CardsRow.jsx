import React from 'react'
import Card from '../content/Card'

function CardsRow() {
    return (
        <div className="content-row">
            <div className="cards-row">
                <Card title="Title" description="Content..." />
                <Card title="Title" description="Content..." />
                <Card title="Title" description="Content..." />
                <Card title="Title" description="Content..." />
                <Card title="Title" description="Content..." />
            </div>
        </div>
    )
}

export default CardsRow