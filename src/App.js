import './App.css';
import { NavBar } from "./Views/NavBar";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  function MainPage() {
    
    return(
      <div>
        <NavBar/>
      </div>
    );
   
  }
   return(
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
   );
 
}

  
export default App;
