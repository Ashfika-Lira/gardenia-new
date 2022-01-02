import React from "react";
import { Container, Row } from "react-bootstrap";
import "./RecentProjects.css";
import project1 from "../../../images/1.jpg";
import project2 from "../../../images/2.jpg";
import project3 from "../../../images/3.jpg";
import project4 from "../../../images/4.jpg";
import project5 from "../../../images/5.jpg";
import project6 from "../../../images/6.jpg";
import project7 from "../../../images/7.jpg";
import project8 from "../../../images/8.jpg";
const RecentProjects = () => {
  return (
    <div>
      <Container>
        <div className="section-heading mt-4">
          <h2>
            Recent <span> Projects</span>
          </h2>
          <p>Get through all trending products and get your best deal.</p>
        </div>
        <Row>
          <div className="col-lg-3">
            <Row className="mb-4 img">
              <img src={project8} alt="" />
            </Row>

            <Row className="mb-3 img">
              <img src={project1} alt="" />
            </Row>
          </div>
          <div className="col-lg-3 mb-3">
            <Row className="mb-4 img">
              <img src={project2} alt="" />
            </Row>
            <Row className="mb-3 img">
              <img src={project3} alt="" />
            </Row>
          </div>
          <div className="col-lg-3">
            <Row className="mb-4 img">
              <img src={project4} alt="" />
            </Row>
            <Row className="mb-3 img">
              <img src={project5} alt="" />
            </Row>
          </div>
          <div className="col-lg-3">
            <Row className="mb-4 img">
              <img src={project6} alt="" />
            </Row>
            <Row className="mb-3 img">
              <img src={project7} alt="" />
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default RecentProjects;
