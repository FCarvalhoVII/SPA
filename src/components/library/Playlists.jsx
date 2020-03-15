import React from 'react'
import Card from '../content/Card'
import LikeSongs from './LikeSongs'

function Playlists() {
    return (
        <div className="content-row library">
            <h2>Playlists</h2>
            <LikeSongs />
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

export default Playlists