import React from "react";
import "../CSS/Slider.css";


function SliderComp({
    newstitle,newsdescreption,newsposter
}){
  
    return(
        <div className="item">
        <img src={newsposter}/>
        <div className="carousel-caption">
          <h3 className="newstitlecustom">{newstitle}</h3>
          <p className="newsdescription">{newsdescreption}</p>
        </div>
      </div>
    );
}

export default SliderComp
