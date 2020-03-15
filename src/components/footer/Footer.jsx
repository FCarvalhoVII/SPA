import React from 'react'

import './Footer.css'

function Footer() {
    return (
        <div className="controls">
            <div className="player">
                <div className="buttons" id="play">
                    <i className="far fa-play-circle fa-2x icons" />
                </div>
                <div className="progressbar">
                    <span id="current-duration">00:00</span>
                    <input id="progress" type="range" min="0" max="0" step="1" />
                    <span id="total-duration">00:00</span>
                </div>
                <div className="volume">
                    <div className="buttons" id="vol">
                        <i className="fas fa-volume-up icons" />
                    </div>
                    <input id="volume-bar" type="range" min="0" max="100" step="1" />
                </div>
            </div>
        </div>
    )
}

export default Footer