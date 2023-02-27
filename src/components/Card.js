import React from "react";


const Card = (props) => {
    
    
    return(
    <div className="card__container">
        <div className="card__title">
            <p>{props.name}</p>
        </div>
        <div className="card__content">
            <p>{props.content}</p>
        </div>
    </div>

    )
}
export default Card;
