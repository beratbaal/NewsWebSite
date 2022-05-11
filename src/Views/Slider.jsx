import React from "react";
import "../CSS/Slider.css";
import SliderComp from "../Components/SliderComp";



export class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const titleobject = this.props.news[0];
    console.log(titleobject==null?false:titleobject.title);
    return (
      <div id="myCarousel" className="carousel slide myCarousel  " data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
          <li data-target="#myCarousel" data-slide-to="3"></li>
          <li data-target="#myCarousel" data-slide-to="4"></li>
          <li data-target="#myCarousel" data-slide-to="5"></li>
          <li data-target="#myCarousel" data-slide-to="6"></li>
          <li data-target="#myCarousel" data-slide-to="7"></li>
          <li data-target="#myCarousel" data-slide-to="8"></li>
          <li data-target="#myCarousel" data-slide-to="9"></li>

        </ol>


        <div className="carousel-inner">

          <div className="item active">
            <img src={titleobject==null?false:titleobject.urlToImage} className="imagecustom"/>
            <div className="carousel-caption">
              <h3>{titleobject==null?false:titleobject.title}</h3>
              <p>{titleobject==null?false:titleobject.description}</p>
            </div>

          </div>
        {
          this.props.news==null?<p>loading</p>:
                    this.props.news.slice(1,10).map(object=>{
            return <SliderComp newstitle={object.title} newsdescreption={object.description} newsposter={object.urlToImage}   />
          })
        }


        </div>


        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


    );
  }
}