import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  
import {  Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
 
const Navigation = () => {
   
 
 
>>>>>>> 2147a03e3055a3fb4a41a73baa8801319445823b
  return (
    <Navbar
      className="px-4 navigation-bar-main"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        Gardenia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
<<<<<<< HEAD
      <Navbar.Collapse id="responsive-navbar-nav">
       
=======
      <Navbar.Collapse id="responsive-navbar-nav">      
>>>>>>> 2147a03e3055a3fb4a41a73baa8801319445823b
        <Nav>
          <Nav.Link as={HashLink} to="/shops">
            Shops
          </Nav.Link>
          <Nav.Link as={HashLink} to="/offers">
            Offers
          </Nav.Link>
          <Nav.Link as={HashLink} to="/FQA">
            FQA
          </Nav.Link>
          <Nav.Link as={HashLink} to="/Contact">
            Contact
          </Nav.Link>
        </Nav>
<<<<<<< HEAD
        
      </Navbar.Collapse>
    </Navbar>
        
=======
       
      </Navbar.Collapse>
    </Navbar>
       

    );
};
 
export default Navigation;

