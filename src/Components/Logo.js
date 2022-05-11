import React from "react";
import "../CSS/Logo.css";
import { Link } from "react-router-dom";

const STYLES = ['logodefault', 'logofooter','logolinkedin','logogithub'];
const IMAGES = ['https://cdn-icons-png.flaticon.com/128/3208/3208799.png','https://cdn-icons.flaticon.com/png/128/2692/premium/2692815.png?token=exp=1652290092~hmac=7dc782ca6ee8cda0a1255fedded48636','https://cdn-icons-png.flaticon.com/128/1384/1384014.png','https://cdn-icons-png.flaticon.com/128/733/733609.png'];

export const Logo =({
    logoStyle,
    logoImage
})=>{
    const checkLogoStyle = STYLES.includes(logoStyle) ? logoStyle : STYLES[0];
    const checkLogoImage = IMAGES.includes(logoImage) ? logoImage : IMAGES[0];

    return(
       <Link to={"/"}><img src={checkLogoImage} className={`logo ${checkLogoStyle}`} /></Link> 
    );
}