import React from "react";
import "../CSS/Footer.css";
import { Logo } from "../Components/Logo";

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="customfooter">
            <Logo logoImage="https://cdn-icons.flaticon.com/png/128/2692/premium/2692815.png?token=exp=1652290092~hmac=7dc782ca6ee8cda0a1255fedded48636" logoStyle="logofooter"></Logo>
           
                
           <Logo logoImage="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" logoStyle="logolinkedin"></Logo>
           <Logo logoImage="https://cdn-icons-png.flaticon.com/128/733/733609.png" logoStyle="logogithub"></Logo>   
    
            
            
            
        </div>
        )
    }
}