import React from "react";
import "../CSS/Logo.css";
import { Link } from "react-router-dom";

const STYLES = ['logodefault', 'logofooter','logolinkedin','logogithub'];
const IMAGES = ['https://cdn-icons-png.flaticon.com/128/3208/3208799.png','https://cdn-icons.flaticon.com/png/128/2692/premium/2692815.png?token=exp=1652290092~hmac=7dc782ca6ee8cda0a1255fedded48636','https://cdn-icons-png.flaticon.com/128/1384/1384014.png','https://cdn-icons-png.flaticon.com/128/733/733609.png'];
const Url    = ['/','https://www.linkedin.com/in/berat-bal-32b652174/','https://github.com/beratbaal'];

export const Logo =({
    logoStyle,
    logoImage,
    logoUrl
})=>{
    const checkLogoStyle = STYLES.includes(logoStyle) ? logoStyle : STYLES[0];
    const checkLogoImage = IMAGES.includes(logoImage) ? logoImage : IMAGES[0];
    const checkLogoUrl   = Url.includes(logoUrl) ? logoUrl : Url[0];
    return(
       <Link to={checkLogoUrl}><img src={checkLogoImage} className={`logo ${checkLogoStyle}`} /></Link> 
    );
}