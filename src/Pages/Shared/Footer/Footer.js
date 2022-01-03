import React from 'react';
import './Footer.css';
import logo from '../../../images/gardenia.png';

const Footer = () => {
	return (
			<div className="footerbg">
            <div className="container p-4">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                    <div className="col">
                        <img width="250px" src={logo} alt="" />
                    </div>
                    <div className="col text-light mt-3">
                        <h4  className="m-0">About Gardenia</h4><br />
                        <small  className="m-0">Read our blog</small><br />
                        <small className="m-0">Sign up to our site</small><br />
                        <small className="m-0">Add your opinion</small><br />
						<small className="m-0">Get help</small><br />
                        <small className="m-0">Read FAQ's</small><br />
                        <small className="m-0">View happy clients</small><br />
                        <small className="m-0"> Frequently travelled places</small><br />
                    </div>
                    <div className="col text-light mt-3">
					<h4>Partnership</h4>
            <div className="footer-link">
               <h6> Partnership club </h6>
            </div>
            <div className="footer-link">
                <h6>Get Involved</h6>
            </div>
            <div className="footer-link">
                <h6>Pricing</h6>
            </div>
            <div className="footer-link">
                <h6>Terms {'&'} Conditions</h6>
            </div> 
						
                    </div>
                </div>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h5 className="text-light">copyright &copy; reserved <span className="text-name">Gardenia</span></h5>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    </div>
                </div>
            </div>
        </div>

	);
};

export default Footer;