import React, { useState } from 'react'
import Header from './Header'
import ContentRow from './ContentRow'

import './Content.css'

function Content() {

    const playlistPack = [{
        title: 'Linha de Playlists',
        subtitle: 'Subtítulo padrão para linhas de playlists'
    }, {
        title: 'Foco',
        subtitle: 'Música para ajudar na concentração'
    }]

    const [playlists] = useState(playlistPack)

    return (
        <div className="content">
            <Header />
            <ContentRow playlistsTitle={playlists[1].title} subtitle={playlists[1].subtitle} />
            <ContentRow playlistsTitle={playlists[0].title} subtitle={playlists[0].subtitle} />
            <ContentRow playlistsTitle={playlists[0].title} subtitle={playlists[0].subtitle} />
            <ContentRow playlistsTitle={playlists[0].title} subtitle={playlists[0].subtitle} />
            <ContentRow playlistsTitle={playlists[0].title} subtitle={playlists[0].subtitle} />
        </div>
    )
}

export default Content