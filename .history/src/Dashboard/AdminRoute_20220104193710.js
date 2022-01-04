import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  let location = useLocation();
if (isLoading) {
    return (
      <Spinner
        sx={{
          fontSize: "200px",
          color: "red",
          marginLeft: "500px",
          marginTop: "200px",
        }}
      />
    );
  }
  if (user?.email && admin) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;
