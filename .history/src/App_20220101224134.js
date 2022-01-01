import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
