import React from 'react'
import Card from './Card'

import './ContentRow.css'

function ContentRow(props) {
    return (
        <div className="content-row">
            <div className="title-row">
                <div className="title">
                    <h2>{props.playlistsTitle}</h2>
                    <p>{props.subtitle}</p>
                </div>
                <div className="more">
                    <span>Ver Tudo</span>
                </div>
            </div>
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

export default ContentRow