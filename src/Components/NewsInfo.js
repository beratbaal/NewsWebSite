import React, { useContext, useEffect, useState } from 'react'
import SelectedNewsContext from '../Context/NewsContext'
import "../CSS/NewsInfo.css";
import {NavBar} from '../Views/NavBar'
import {Footer} from '../Views/Footer'

function NewsInfo({
}) {
    const selectedNewsContext = useContext(SelectedNewsContext);

    return(
        <div>
            <NavBar/>
            <div className='newstitleinfo'><h4>{selectedNewsContext.title}</h4></div>
            <img src={selectedNewsContext.content}  className='newsimageinfo'/>
            <div className='newscontentinfo'><p>{selectedNewsContext.imageToUrl}</p></div>
            <div className='footernewsinfo'><Footer/></div>
        </div>
    )
    
}

export default NewsInfo