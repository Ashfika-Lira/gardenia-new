import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const DashboardSummary = () => {
  return (
    <Container>
      <Row>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5>Revenue</h5>
              <h2 className="text-primary"> $9895</h2>
            </Col>
          </Row>
          <Row>
            <b> In all department</b>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Orders</h5>
              <h2 className="text-primary"> 3580</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Sales</h5>
              <h2 className="text-warning"> 4576</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
        <Col className="summary-col">
          <Row>
            <Col></Col>
            <Col>
              <h5> Employees</h5>
              <h2 className="text-primary"> 1755</h2>
            </Col>
          </Row>
          <Row>
            <p> In all department</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardSummary;
