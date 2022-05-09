import React from 'react';
import './App.css';
import HomePage from './components/Home';
import './App.css'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/home" component={<HomePage/>}/>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
