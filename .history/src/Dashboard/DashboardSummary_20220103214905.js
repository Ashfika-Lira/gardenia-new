import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col  className="summary-col">
          <h5> Total Revenue</h5>
        </Col>
        <Col className="summary-col">
          <h5> Orders</h5>
        </Col>
        <Col className="summary-col">
          <h5> Sales</h5>
        </Col>
        <Col className="summary-col">
                  <Row>
                      <Col
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;
