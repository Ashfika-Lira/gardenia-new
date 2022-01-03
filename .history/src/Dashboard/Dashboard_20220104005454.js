import React from "react";
import { Button, Col, Navbar, Row, Toast } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../hooks/useAuth";
// import useAuth from "../hooks/useAuth";
import DashboardNav from "./DashboardNav";


const Dashboard = () => {
  const { admin, logOut, user } = useAuth();
  console.log(user);

  const drawer = (
    <div className="container-full-height">
      <Row>
        <Col className="dashboard-link-container ps-4" md={2}>
          <div className="text-center">
            <img
              className="userPhoto  me-2 "
              src={user.photoURL}
              alt="userImg"
            />
          </div>
          <div className="text-center mt-5 dashboard-brand">
            <Navbar.Brand as={HashLink} to="/Home">
              <span className="brand-name">Gardenia </span>
            </Navbar.Brand>
          </div>

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
                  to="/dashboard/myOrders"
                >
                  My Orders
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link
                  className="dashboard-link"
                  to="/dashboard/submit"
                >
                  Review
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link to="/home">
                  <Button
                    onClick={logOut}
                    className="py-0 m-0 dashboard-logout-btn dashboard-link"
                  >
                    {" "}
                    Logout
                  </Button>
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
                  to="/dashboard/updateOrders"
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
                <Link className="dashboard-link" to="/dashboard/updateOrders">
                  Update Products
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/dashboard/addProducts">
                  Add Products
                </Link>
              </div>
              <div className="dashboard-link-div">
                <Link className="dashboard-link" to="/home">
                  <Button
                    onClick={logOut}
                    className="py-0 m-0 dashboard-logout-btn dashboard-link"
                  >
                    {" "}
                    Logout
                  </Button>
                </Link>
              </div>
            </>
          )}
        </Col>
        <Col md={8}>
          <DashboardNav></DashboardNav>
          <div className="mt-2">
            {/* <DashboardSummary></DashboardSummary> */}
          </div>

          <Outlet></Outlet>
        </Col>
        <Col md={2}>
          <Toast>
            <Toast.Header>
              <img src={user.photoURL} className="capsule me-2 " alt="" />
              <strong className="me-auto">Hello,</strong>
              <small className="text-muted"></small>
            </Toast.Header>
            <Toast.Body>{user.displayName}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </div>
  );

  return <div>{drawer}</div>;
};

export default Dashboard;
