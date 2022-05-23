import './App.css';
import React, {useEffect, useState} from "react";
import { NavBar } from "./Views/NavBar";
import { Slider } from './Views/Slider';
import { CardView } from './Views/CardView';
import { Footer } from './Views/Footer';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {
    const[topNews, setTopNews] = useState([]);
    const[agendaNews, setAgendaNews]=useState([]);
    const [politicNews, setPoliticNews]=useState([]);
    const [techNews, setTechNews]=useState([]);

  useEffect(()=>{
    Apifetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=bdff393e72104f87a7accf76c2b070a6',setTopNews);
    Apifetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=bdff393e72104f87a7accf76c2b070a6',setAgendaNews);
    Apifetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bdff393e72104f87a7accf76c2b070a6',setPoliticNews);
    Apifetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bdff393e72104f87a7accf76c2b070a6',setTechNews);
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
       <CardView news={topNews}/>
       <Footer/>
      </div>
    );

  }
  return (
    <BrowserRouter>
  
      <Routes>
        <Route index path="/" element={<MainPage />}/>
        <Route index path="/Agenda" element={<CardView news={agendaNews}/>}/>
        <Route index path="/Politics" element={<CardView news={politicNews}/>}/>
        <Route index path="/Techno" element={<CardView news={techNews}/>}/>
      </Routes>
     
    </BrowserRouter>
  );

}


export default App;
