import './App.css';
import { NavBar } from "./Views/NavBar";
import { Slider } from './Views/Slider';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

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
