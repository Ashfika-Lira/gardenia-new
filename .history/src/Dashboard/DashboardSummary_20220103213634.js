import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DashboardSummary = () => {
    return (
        <Row>
            <Col className='summary-col'>
                <h3> Total Revenue</h3>
            </Col>
            <Col>
                <h3> Orders</h3>
            </Col>
            <Col>
                <h3> Sales</h3>
            </Col>
            <Col>
                <h3> Employees</h1>
            </Col>
       </Row>
    );
};

export default DashboardSummary;