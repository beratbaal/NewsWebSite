import React from "react";
import "../CSS/NewsCard.css";
import CardComp from "../Components/CardComp";
import { NavBar } from "./NavBar";

export class CardView extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
        
                {
                   
                    this.props.news.map(object=>{
                        return <CardComp title={object.title}  description={object.description} imageToUrl={object.urlToImage} url={object.url} />
                    })
                }
            </>
        )
    }
}