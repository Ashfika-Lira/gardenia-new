import React from 'react';
import logo1 from "../../../images/istockphoto-1138644570-612x612.jpg";

const Header = () => {
  return (
    <>
      <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="menu-container ">
                <div className="d-flex mt-1">
                  <input
                    className="form-control rounded-pill"
                    type="text"
                    placeholder="Search here"
                    aria-label="Search"
                  />
                  <button className="bg-warning rounded-pill w-25">
                    Search Now
                  </button>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
