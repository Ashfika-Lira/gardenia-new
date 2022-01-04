import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  let location = useLocation();
  https://gardenia-2c53e.web.app/
  if (user.email) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};

export default PrivateRoute;
