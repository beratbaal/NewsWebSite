import React from "react";
import "../CSS/NewsCard.css";
import CardComp from "../Components/CardComp";

export class CardView extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <>
                {
                   
                    this.props.news.map(object=>{
                        return <CardComp newstitle={object.title}  newsdescription={object.description} newsimage={object.urlToImage}/>
                    })
                }
            </>
        )
    }
}