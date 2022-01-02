import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  let location = useLocation();

  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;
