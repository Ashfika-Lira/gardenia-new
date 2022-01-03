import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import Navigation from "../Shared/Navigation/Navigation";

const Contact = () => {
  const location = <FontAwesomeIcon icon={faLocationArrow} />;
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;

  // mail JS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uahu1hg",
        "template_ccairva",
        e.target,
        "user_w73lkcoWhqHBVs5tSWCn1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Your Email is Successfully Sended");
  };
  return (
    <div className=" mb-5">
      {/* <Navigation></Navigation> */}
      <Container>
        
        <Row >
          
          


          <div className="section-heading my-4 ">
          <h2 className="mt-5 text-center">Contact Us</h2>
        </div>
          
          <div className="col-lg-6 contact-box">
            <h1>
              Send Your <span>Request</span>
            </h1>
            <Form className=" border-0" onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  name="name"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Your Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter Subject"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
              </Form.Group>

              <button type="submit">Submit</button>
            </Form>
          </div>

          

        </Row>
      </Container>
    </div>
  );
};

export default Contact;

