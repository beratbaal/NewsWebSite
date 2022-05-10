import './App.css';
import React, {useEffect, useState} from "react";
import { NavBar } from "./Views/NavBar";
import { Slider } from './Views/Slider';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
    const[topNews, setTopNews] = useState([]);

  useEffect(()=>{
    Apifetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bdff393e72104f87a7accf76c2b070a6',setTopNews);
  },[]);
  function Apifetch(url, setList){
    fetch(url)
    .then(response=>{
      return response.json();
    }).then(response=>{
      const news = Object.values(response.articles)
      setList(news);
      console.log(news);
    })
  }
   
  function MainPage() {

    return (
      <div>
        <NavBar />
       {topNews==[]?<p>loading</p>:<Slider news={topNews.slice(10)}/>} 
      
       
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
