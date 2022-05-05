import React from "react";
import {Link} from "react-router-dom";
import "../CSS/Button.css"

const STYLES =['defaultbutton','btnUyeOl','btnUyeGirisi'];

export const Button=({
    children,
    onClick,
    buttonStyle,
    path
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return(
        <Link to={path==null? "/":path}>
            <button className={`button ${checkButtonStyle}`} onClick={onClick}>
                {children}
            </button>
        </Link>
    )
}
