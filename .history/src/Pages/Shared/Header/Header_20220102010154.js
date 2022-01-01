
import React from 'react';
// import "./Header.css";
// import { NavLink } from 'react-router-dom';
import logo from '../../../images/download.png';

const Header = () => {
	return (
	<div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo-img">
			   <img className="w-75" src={logo} alt="" />
			</div>
	    <div>
      </div>
    </div>
			<div className="col-md-6">
            <div className="menu-container ">
			<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
		   </div>
		</div>
			<div className="col-md-3">
            <div className="menu-container ">
			<h5>Shopping Cart</h5>
		   </div>
		</div>

	  </div>
    </div>
  </div>
	);

import React from "react";

const Header = () => {


    return (
        <div>
            <h1> Header section push</h1>
            
        </div>
    );

>>>>>>> 95031f58b2fcc74f12fd7b0f37eca2fa26bea054
};

export default Header;
