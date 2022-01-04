import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div>
      <Container>
        <div className="subContainer mt-5">
          <Row>
            <div className="col-lg-6 mt-5 ps-4">
              <p>SUBSCRIBE TO OUR NEWSLETTERS</p>
              <h3>
                Keep up to Date with Our New Collection and Exclusive Offers
              </h3>
            </div>
            <div className="col-lg-6 mt-5 mx-auto">
              <form className="">
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <button className="py-2 px-3" variant="primary" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
