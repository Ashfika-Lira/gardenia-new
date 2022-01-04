import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user,isLoading } = useAuth();
  let location = useLocation();
if (isLoading) { return <S sx={{fontSize:"200px" , color:"red",  marginLeft:"500px", marginTop:"200px"}}  /> }
  if (user.email) {
    return children;
  }
  return <Navigate to="/home" state={{ from: location }} />;
};

export default PrivateRoute;
