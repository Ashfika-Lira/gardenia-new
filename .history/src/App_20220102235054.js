import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import FQA from './Pages/FQA/FQA';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  
  return (
    <div className="App">  
      <AuthProvider>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/header' element={<Header></Header>}></Route>
          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/Shop' element={<Shop></Shop>}></Route>
          <Route path='/fqa' element={<FQA></FQA>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>
            

            
        </Routes>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
