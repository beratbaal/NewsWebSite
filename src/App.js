import './App.css';
import React, {useEffect, useState} from "react";
import { NavBar } from "./Views/NavBar";
import { Slider } from './Views/Slider';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function App() {
    const [topNewsList,setTopNewsList]=useState(["",]);
    useEffect(()=>{
      ApiFetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bdff393e72104f87a7accf76c2b070a6',setTopNewsList);

    },[]);

    function ApiFetch(url,setList){
      fetch(url
        ).then(response=>{
          return response.json();
        }).then(data=>{
          const news = data["results"];
          setList(news)
          console.log(news)
        })
    }
 
  function MainPage() {

    return (
      <div>
        <NavBar />
        <Slider news={topNewsList.slice(10)}/>
      
       
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
