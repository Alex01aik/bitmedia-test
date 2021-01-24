import React from 'react'
import './Card.scss'

const Card = ({image, title, description}) => {
    return (
        <div
            className="card">
            <img
                src={image}
                className="cardImage"
                alt="cardImage"/>
            <p
                className="cardTitle">
                {title}
            </p>
            <p
                className="cardDescription">
                {description}
            </p>
        </div>
    )
}
  
export default Card