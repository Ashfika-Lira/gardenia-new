import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col  className="summary-col">
          <h5> Total Revenue</h3>
        </Col>
        <Col className="summary-col">
          <h5> Orders</h3>
        </Col>
        <Col className="summary-col">
          <h5> Sales</h3>
        </Col>
        <Col className="summary-col">
          <h5> Employees</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;
