import React from "react";
import "./FeatursImg.css";
import { Container, Row } from "react-bootstrap";

const Feature
sImg = () => {
  return (
    <div>
      <Container>
        <Row>
          <div className="col-lg-3 feature1">
            <button>Rugs & Textiles</button>
          </div>
          <div className="col-lg-6 feature2">
            <button>Tableware & Accessories</button>
          </div>
          <div className="col-lg-3 feature3">
            <button>Cookware & kitchen</button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default FeatursImg;
