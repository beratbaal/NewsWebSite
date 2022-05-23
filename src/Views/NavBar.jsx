import React from "react";
import "../CSS/NavBar.css";
import { Logo } from "../Components/Logo";
import { Link } from "react-router-dom";

export class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mainnavbardiv">
                <nav className="navbar navbar-expand-sm navbar-pink  navbarcustom">
                    <div className="container-fluid">
                       <Logo logoImage="https://cdn-icons-png.flaticon.com/128/3208/3208799.png" logoStyle="logodefault"></Logo>
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"><img src={"https://assets.dsmartgo.com.tr/content/img/menu.png"} /></span>
                        </button>
                       
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                             <Link to={"/Agenda"}><li ><a href="#">Gündem</a></li></Link>
                             <Link to={"/Politics"}><li ><a href="#">Siyaset</a></li></Link>
                             <Link to={"/Techno"}><li ><a href="#">Teknoloji</a></li></Link>
                            </ul>
                        </div>
    
                    </div>
                </nav>
            </div>
        );
    }
}
