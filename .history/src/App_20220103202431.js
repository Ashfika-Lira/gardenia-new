import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import './App.css';
import Contact from './Pages/Contact/Contact';
import FQA from './Pages/FQA/FQA';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Cart from './Pages/UserRoute/Cart/Cart';
import PrivateRoute from "./Pages/Login/PrivateRoute";
import Dashboard from "./Dashboard/Dashboard";
import AdminRoute from "./Dashboard/AdminRoute";
import AdminDashboard from "./Dashboard/AdminDashboard";
import UserDashboard from './Dashboard/UserDashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/header" element={<Header></Header>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/mycart" element={<Cart></Cart>}></Route>
            <Route path="/Shop" element={<Shop></Shop>}></Route>
            <Route path="/fqa" element={<FQA></FQA>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/Register" element={<Register></Register>}></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
             
              <Route
                path={"/dashboard/adminDashboard"}
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              ></Route>

              <Route path="/dashboard/userDashboard" element={<PrivateRoute><UserDashboard/> </PrivateRoute>}></Route>
              <Route path="/dashboard/userDashboard" element={<PrivateRoute><UserDashboard/> </PrivateRoute>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
