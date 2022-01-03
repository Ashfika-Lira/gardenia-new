import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addToCart } from '../../features/CartItem/cartSlice';
import './Products.css'

const Products = (props) => {
    const { name, price, img, detail, } = props.product;

  const dispatch = useDispatch();
  const history = useNavigate();


  const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      history("/mycart");
  };
    return (
        <>
        <Col className="g-4" lg={4}>
            <Card className="gb-4">
                <Card.Img className="img img-fluid product-img-size" src={img} />
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
                    <Button onClick={()=> handleAddToCart(props.product)} variant="secondary" size="sm">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default Products;