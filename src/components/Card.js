import React from "react";
import './Card.css'

const Card = (props) => {
    
    
    return(
    <div className="card__container">
        <div className="card__title">
            <p>{props.name}</p>
        </div>
        <div className="card__content">
            <p>{props.content}</p>
        </div>
        <div className="card__author">
            <strong>{props.author}</strong>
        </div>
    </div>

    )
}
export default Card;
