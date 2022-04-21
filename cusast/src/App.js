import React from "react";
import Header from "./Header";
import Product from "./Product";
import About from "./About";
import Assosaries from "./Assosaries";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Mobiles from "./Mobiles";

import SignIn from "./SignIn";
import Categories from "./Assosaries";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' index element={<Product/>}/>
        
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/mobiles' element={<Mobiles/>}/>
          <Route path='/assosaries' element={<Assosaries/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </div>
      <div>
        <About/>
      </div>
      </BrowserRouter>
  );
}

export default App;
