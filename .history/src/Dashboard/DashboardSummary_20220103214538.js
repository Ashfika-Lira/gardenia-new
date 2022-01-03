import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col  className="summary-col">
          <h> Total Revenue</h3>
        </Col>
        <Col className="summary-col">
          <h> Orders</h3>
        </Col>
        <Col className="summary-col">
          <h> Sales</h3>
        </Col>
        <Col className="summary-col">
          <h> Employees</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;
