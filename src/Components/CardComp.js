import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import SelectedNewsContext from "../Context/NewsContext";

function CardComp({
    title,description,imageToUrl,content,url
}) {
        const selectedNews = useContext(SelectedNewsContext);
        function clickNews(){
            selectedNews.selectNews(title,description,imageToUrl,content);
        }
    return (
        <div className="card">
            <img className="card-img-top" src={imageToUrl}/>
            <div className="card-body">
            
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              <a href={url} className="btn btn-primary">Habere Git</a>
            </div>
        </div>
    )
}

export default CardComp