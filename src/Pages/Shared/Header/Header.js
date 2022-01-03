import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/gardenia.png";
import cart from "../../../images/gardenia-logo.png";
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="gardenia-logo">
                <img className="img img-fluid header-logo" src={logo} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="menu-container ">
                <div className="d-flex justify-content-end mt-1">
                  <input
                    className="form-control rounded-pill position-relative"
                    type="text"
                    placeholder="Search here"
                    aria-label="Search"
                  />
                  <button className="srch-btn rounded-pill position-absolute">
                    Search Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mt-1">
                <Nav.Link className="d-flex mt-1 justify-content-end" as={HashLink} to="/mycart">
                  <img className="w-25" src={cart} alt="" />
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
