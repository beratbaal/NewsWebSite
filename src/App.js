import './App.css';
import React, {useEffect, useState} from "react";
import { NavBar } from "./Views/NavBar";
import { Slider } from './Views/Slider';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
    const[topNews, setTopNews] = useState([]);

  useEffect(() => {
     fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bdff393e72104f87a7accf76c2b070a6')
    .then(response => response.json())
    .then(response=>setTopNews(Object.values(response.articles)))
    
  },[])
  console.log(topNews)
   
  function MainPage() {

    return (
      <div>
        <NavBar />
        {
          topNews.map((news)=>{
            return(
              <div key={news.title}>
                <h2>{news.title}</h2>
              </div>
            )
          })
        }
      
       
      </div>
    );

  }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );

}


export default App;
