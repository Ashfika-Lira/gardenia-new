import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
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
};

export default Header;