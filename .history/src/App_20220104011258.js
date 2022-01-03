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
import AddProducts from './Dashboard/AddProducts';
import DashboardSummary from './Dashboard/DashboardSummary';
import UpdateOrders from './Dashboard/UpdateOrders';
import MyOrders from './Dashboard/UserDashboard/MyOrders';
import SubmitReview from './Pages/Review/SubmitReview';
import AllProducts from './Dashboard/AllProducts';
import UpdateProducts from './Dashboard/UpdateProducts';
import AllOrders from './Dashboard/AdminDashboard/AllOrders';

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
              <Route path="/dashboard/" element={<PrivateRoute><DashboardSummary/> </PrivateRoute>}></Route>
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
              <Route path="/dashboard/addProducts" element={<PrivateRoute><AddProducts/> </PrivateRoute>}></Route>
              <Route path="/dashboard/updateOrders" element={<PrivateRoute><UpdateOrders/> </PrivateRoute>}></Route>
              <Route path="/dashboard/myOrders" element={<PrivateRoute><MyOrders/> </PrivateRoute>}></Route>
              <Route path="/dashboard/submitReviews" element={<PrivateRoute><SubmitReview/> </PrivateRoute>}></Route>
              <Route path="/dashboard/allProducts" element={<PrivateRoute><AllProducts/> </PrivateRoute>}></Route>
              <Route path="/dashboard/updateProducts" element={<PrivateRoute><UpdateProducts/> </PrivateRoute>}></Route>
              <Route path="/dashboard/allOrders" element={<PrivateRoute><AllOrders/> </PrivateRoute>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
