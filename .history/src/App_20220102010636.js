
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import FQA from './Pages/FQA/FQA';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
<<<<<<< HEAD
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
=======
=======
import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
>>>>>>> 95031f58b2fcc74f12fd7b0f37eca2fa26bea054

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/header" element={<Header></Header>}></Route>
          {/* <Route path='/Contact' element={<Contact></Contact>}></Route> */}
          {/* <Route path='/Shop' element={<Shop></Shop>}></Route> */}
          {/* <Route path='/fqa' element={<FQA></FQA>}></Route> */}
>>>>>>> 2147a03e3055a3fb4a41a73baa8801319445823b
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
