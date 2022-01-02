import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import loginIcon from "../../images/preview.svg";
import useAuth from "../../hooks/useAuth";
import "./LoginRegister.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { signInWithGoogle, loginUser, user } = useAuth();
  console.log(user);

  const location = useLocation();
  const navigation = useNavigate();

  //////////////////////  Login With User /////////////////////
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  ///////////////////////////////////////////

  ////////////////  Login with user ///////////////////
  const handleLoginSubmit = (e) => {
    const email = loginData?.email;
    const password = loginData?.password;

    loginUser(email, password, location, navigation);
    e.preventDefault();
  };
  ////////////////////////////////////////////////

  /////////////  Login with Google //////////////////
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigation);
  };
  ////////////////////////////////////////////////////////

  return (
    <div className="container register-container ">
      <div className="w-100 align-center">
        <div className="login-section mt-5 mb-5 me-5">
          <form onSubmit={handleLoginSubmit} method="post">
            <div className="imgcontainer">
              <h1 className="title-1">Please <span className="login-title"> Login</span></h1>
              <img className="w-25 avatar" src={loginIcon} alt="Avatar" />
            </div>
            <div className="container">
              <label htmlFor="uname">
                <b className="text-align-left">Username</b>
              </label>
              <input
                name="email"
                placeholder="Your Email"
                onChange={handleOnChange}
                type="text"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Your Password"
                onChange={handleOnChange}
                required
              />

              <button className="fs-6 fw-bold w-100" type="submit">
                Login
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
              <button type="submit" className="cancelbtn">
                Cancel
              </button>
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </form>
          
             <Button
            className="google-btn ms-5 w-45 fw-bold"
            onClick={handleGoogleSignIn}
          >
            <i class="fab fa-google"></i>
            Sign in with google
          </Button>
          <Button
            className="github-btn ms-5 fw-bold w-45 "
            onClick={handleGoogleSignIn}
          >
            <i class="fab fa-github-square"></i>
            Sign in with Github
          </Button>
         

          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button
              className="register-toggle-btn text-secondary fw-bold mt-3 w-100"
              variant="text"
            >
              New User? Please Register
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
