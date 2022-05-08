import React from "react";
import "../CSS/Slider.css";


function SliderComp({
    newstitle,newsdescreption
}){
  
    return(
        <div className="item">
       
        <div className="carousel-caption">
          <h3 className="newstitlecustom">{newstitle}</h3>
          <p className="newsdescreption">{newsdescreption}</p>
    
     
        </div>
      </div>
    );
}

export default SliderComp
