import React from "react";
import { Container, Row } from "react-bootstrap";
import "./RecentProjects.css";
import project1 from "../../../Images/1.jpg";
import project2 from "../../../Images/2.jpg";
import project3 from "../../../Images/3.jpg";
import project4 from "../../../Images/4.jpg";
import project5 from "../../../Images/5.jpg";
import project6 from "../../../Images/6.jpg";
import project7 from "../../../Images/7.jpg";
import project8 from "../../../Images/8.jpg";
const RecentProjects = () => {
  return (
    <div>
      <Container>
        <Row>
          <div class="col-lg-4">
            <Row class="mb-3">
              <img src={project8} alt="" />
            </Row>
            <Row class="mb-3">
              <img src={project2} alt="" />
            </Row>
          </div>
          <div class="col-lg-4">
            <Row class="mb-3">
              <div class="col-lg-6 mb-3">
                <img src={project3} alt="" />
              </div>
              <div class="col-lg-6">
                <img src={project4} alt="" />
              </div>
            </Row>
            <Row class="mb-3">
              <img src={project5} alt="" />
            </Row>
            <Row class="mb-3">
              <img src={project6} alt="" />
            </Row>
          </div>
          <div class="col-lg-4">
            <Row class="mb-3">
              <img src={project6} alt="" />
            </Row>
            <Row class="mb-3">
              <img src={project7} alt="" />
            </Row>
            <Row class="mb-3">
              <img src={project1} alt="" />
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default RecentProjects;
