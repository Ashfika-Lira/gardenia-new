import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import slide1 from "../../../Images/banner1.jpg";
import slide2 from "../../../images/banner2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const arrow = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="banner">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="d-flex align-items-center">
            <div className="banner-content">
              <p>Kitchen Accessories</p>
              <h3>Morso Kit Mortel</h3>
              <button className="banner-btn">
                Shop Now <span>{arrow}</span>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Third slide" />
          <Carousel.Caption className="d-flex align-items-center">
            <div className="banner-content">
              <p>Kitchen Accessories</p>
              <h3>Morso Kit Mortel</h3>
              <button className="banner-btn">
                Shop Now <span>{arrow}</span>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
