import React from "react";

function CardComp({
    newstitle, newsdescription, newsimage
}) {
    return (
        <div className="card" >
            <img className="card-img-top" src={newsimage} />
            <div className="card-body">
                <h5 className="card-title">{newstitle}</h5>
                <p className="card-text">{newsdescription}</p>
                <a href="#" className="btn btn-primary">Habere Git</a>
            </div>
        </div>
    )
}

export default CardComp