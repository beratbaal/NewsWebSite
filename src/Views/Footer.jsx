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
            <Logo logoImage="https://cdn-icons.flaticon.com/png/512/2692/premium/2692815.png?token=exp=1653327582~hmac=507e76530e287f357496be961039003b" logoStyle="logofooter"></Logo>
           
                
           <Logo logoImage="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" logoStyle="logolinkedin" logoUrl="https://www.linkedin.com/in/berat-bal-32b652174/"></Logo>
           <Logo logoImage="https://cdn-icons-png.flaticon.com/128/733/733609.png" logoStyle="logogithub" logoUrl="https://github.com/beratbaal"></Logo>   
    
            
            
            
        </div>
        )
    }
}