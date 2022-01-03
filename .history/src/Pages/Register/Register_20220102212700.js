import React from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import loginIcon from "../../images/loginicon.jpg";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();
  const { user, registerUser, isLoading, authError } = useAuth();

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(data.email, data.password, data.name, navigation);
  };

  return (
    <div className="container register-container">
      {!isLoading && (
        <div className="login-section mt-5 mb-5 ms-5">
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="imgcontainer">
              <h1 className="title-1"> New users register with</h1>
              <img className="w-25 avatar" src={loginIcon} alt="Avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname">
                <b>Your Name</b>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                name="name"
                // required
              />

              <label htmlFor="psw">
                <b>Your Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                {...register("email")}
                // required
              />
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                name="password"
                // required
              />
              <label htmlFor="psw">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password2"
                {...register("password2")}
                // required
              />

              <button className="fs-6 fw-bold w-100" type="submit">
                I agree, create my account
              </button>
              <label>
                <input
                  type="checkbox"
                  readOnly
                  checked="checked"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>

            <div className="container">
              <button type="button" className="cancelbtn">
                Reset
              </button>
              <span className="psw">
                Forgot <a href="#home">password?</a>
              </span>
            </div>
          </form>
          <NavLink
            className=" py-2"
            style={{ textDecoration: "none" }}
            to="/login"
          >
            <Button
              className="register-toggle-btn  text-secondary fw-bold w-100"
              variant="text"
            >
              Already Registered? Please Login
            </Button>
          </NavLink>
        </div>
      )}

      {isLoading && <Spinner />}
      {user?.email && (
        <Alert severity="success">User Created successfully!</Alert>
      )}
      {authError && <Alert severity="error">{authError}</Alert>}
    </div>
  );
};

export default Register;
