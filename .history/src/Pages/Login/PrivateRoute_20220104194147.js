import React from "react";
import { Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
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
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
