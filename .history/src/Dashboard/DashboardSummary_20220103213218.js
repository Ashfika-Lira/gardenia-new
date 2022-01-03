import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DashboardSummary = () => {
    return (
        <Row>
            <Col>
                <h3> Total Revenue</h3>
            </Col>
            <Col>
                <h3> Orders</h3>
            </Col>
            <Col></Col>
            <Col></Col>
       </Row>
    );
};

export default DashboardSummary;