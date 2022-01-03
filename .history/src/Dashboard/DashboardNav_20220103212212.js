import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { faPlus, faMinus, faLongArrowAltRight, faBel } from '@fortawesome/free-solid-svg-icons'

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
      <Nav.Link href="#deets"><FontAwesomeIcon style={{ fontSize: '2rem', color: '#eb0f5d' }} icon={faLongArrowAltRight} /></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default DashboardNav;