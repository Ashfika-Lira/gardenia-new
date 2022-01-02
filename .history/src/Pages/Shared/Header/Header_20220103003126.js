

import React from 'react';
// import "./Header.css";
// import { NavLink } from 'react-router-dom';
import logo from '../../../images/download.png';
// import React from 'react';
// import "./Header.css";
import { NavLink } from 'react-router-dom';
import logo from '../../../images/download (2).png';
import logo1 from '../../../images/istockphoto-1138644570-612x612.jpg';


const Header = () => {
	return (
		<>
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

	    <div>
      </div>
    </div>
			<div className="col-md-6">
            <div className="menu-container ">
			<div className="d-flex mt-4">
            <input className="form-control rounded-pill" type="text" placeholder="Search here" aria-label="Search" />
            <button className='bg-warning rounded-pill w-25'>Search Now</button>
            </div>
		   </div>
		</div>
			<div className="col-md-3">
            <div className="menu-container ">
            <div className="d-flex mt-1">
            <img className="w-25" src={logo1} alt="" />
			<h5 className="mt-3">Shopping Cart</h5>
            </div>
		   </div>

			</div>
			
			</>
	);



}


};

export default Header;
