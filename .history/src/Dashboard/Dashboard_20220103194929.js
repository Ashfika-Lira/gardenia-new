import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {
  const { admin } = useAuth();

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
                <Link className="dashboard-link" to="/dashboard/updateServices">
                 <Button> Logout</Button>
                </Link>
              </div>
            </>
          )}
          
        </Col>
        <Col md={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );

  return <div>{drawer}</div>;
};

export default Dashboard;
