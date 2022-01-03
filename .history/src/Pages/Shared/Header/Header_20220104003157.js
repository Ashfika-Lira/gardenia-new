import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";
import logo1 from "../../../images/gardenia-logo.png";
import "./Header.css";
import {  faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="menu-container ">
                <div className="d-flex mt-1">
                  <Nav.Link as={HashLink} to="/mycart">
                    <img className="w-25" src={logo1} alt="" />
                  </Nav.Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="menu-container ">
                <div className="d-flex mt-1">
                  <input
                    className="form-control me-1"
                    type="text"
                    placeholder="Search here"
                    aria-label="Search"
                  />
                  <button className="bg-warning  w-25">Search Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="menu-container ">
                <div className="d-flex mt-1">
                  <Nav.Link as={HashLink} to="/mycart">
                    <FontAwesomeIcon
                      className=""
                      style={{ color: "#eb0f5d" }}
                      icon={faShoppingCart}
                    />
                  </Nav.Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
