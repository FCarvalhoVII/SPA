import React from 'react'
import img from '../../assets/imgs/default.png'

import './Card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={null} alt=""/>
            </div>
            <div className="description">
                <h5>{props.title}</h5>
                <p>{props.description}</p>
            </div>
            <button className="btn-play"></button>
        </div>
    )
}

export default Card