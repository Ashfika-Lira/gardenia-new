import React from "react";
import { Button, Col, Row, Toast } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const { admin, logOut, user } = useAuth();
  clg

  const drawer = (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <h3 className="title-1 mt-3 fw-bold"> Dashboard</h3>
          <hr className="" />

          {/* If not admin show this */}
          {!admin && (
            <>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/dashboard/userDashboard">
                  User Dashboard
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link
                  className="dashboard-link"
                  to="/dashboard/applicationStatus"
                >
                  My Orders
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link
                  className="dashboard-link"
                  to="/dashboard/applicationStatus"
                >
                  Review
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link to="/home">
                  <Button onClick={logOut} className="py-0 m-0 dashboard-logout-btn dashboard-link"> Logout</Button>
               </Link>
              </div>
            </>
          )}
          
          {/* If admin role show this  */}
          {admin && (
            <>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/dashboard/adminDashboard">
                  Admin Dashboard
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link
                  className="dashboard-link"
                  to="/dashboard/allApplicationStatus"
                >
                  All Orders
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link
                  className="dashboard-link"
                  to="/dashboard/allApplicationStatus"
                >
                  Update Orders
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/dashboard/allServices">
                  All Products
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/dashboard/updateServices">
                  Update Products
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/home">
                 <Button onClick={logOut} className="py-0 m-0 dashboard-logout-btn dashboard-link"> Logout</Button>
                </Link>
                
              </div>
            </>
          )}
          
        </Col>
        <Col md={8}>
          <Toast>
    <Toast.Header>
      <img src={""} className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small className="text-muted">just now</small>
    </Toast.Header>
    <Toast.Body>See? Just like this.</Toast.Body>
  </Toast>
          <Outlet></Outlet>
        </Col>
        <Col md={2}>
          <h5 className="mt-5"> Hello, { user.displayName}</h5>
        </Col>
      </Row>
    </div>
  );

  return <div>
    
    {drawer}
  
  </div>;
};

export default Dashboard;
