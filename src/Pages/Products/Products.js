import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Products.css'

const Products = (props) => {
    const { name, price, img, detail,} = props.product;
    return (
        <>
        <Col className="g-4" lg={4}>
            <Card className="gb-4">
                <Card.Img className="img img-fluid img-size" src={img} />
                <Card.Body className="card-height">
                        <div className='d-flex justify-content-between'>
                            <Card.Title>{name}</Card.Title>
                            <h5 className='fw-bold'>Price: {price}</h5>
                        </div>
                    <Card.Text>
                    {detail.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default Products;