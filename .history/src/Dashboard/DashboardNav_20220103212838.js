import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import {
  faPlus,
  faMinus,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const DashboardNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Help : +050 2992 709</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pricing">English</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <FontAwesomeIcon
                  className="fs-5"
                  style={{color: "#eb0f5d" }}
                                  icon={faBell}
                                  
                              />
                              <Badge bg="secondary">7</Badge>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <FontAwesomeIcon
                  className="fs-5"
                  style={{ color: "#eb0f5d" }}
                  icon={faEnvelope}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DashboardNav;
