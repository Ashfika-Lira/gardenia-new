import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Review from './Pages/Review/Review';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/home' element={<Home></Home>}></Route>
           <Route path='/header' element={<Header></Header>}></Route>
           <Route path='/footer' element={<Footer></Footer>}></Route>
           <Route path='/review' element={<Review></Review>}></Route>
         </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
