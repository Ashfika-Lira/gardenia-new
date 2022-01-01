
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import FQA from './Pages/FQA/FQA';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className="App">  
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/header' element={<Header></Header>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
          <Route path='/fqa' element={<FQA></FQA>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
