import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
// import loginIcon from '../../../images/loginicon.jpg'
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();
  // const {  isLoading } = useAuth();
  const { user, registerUser,  authError } = useAuth();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your password did not match");
      return;
    }
    // registerUser(data.email, data.password, data.name, navigation);
  };

  

  return (
    <div className="container register-container">
      {/* <h1> Register Page</h1> */}
      <h2 className="mt-5 text-center title-1"> Please Register</h2>

      {!isLoading && (
        
      )}

      {/* {isLoading && <Spinner />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>} */}
    </div>
  );
};

export default Register;
