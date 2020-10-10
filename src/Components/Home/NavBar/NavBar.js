import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
        <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-5" href="#link">About</Nav.Link>
            <Nav.Link className="mr-5" href="#home">Dental Services</Nav.Link>
            <Nav.Link className="mr-5 text-white" href="#link">Reviews</Nav.Link>
            <Nav.Link className="mr-5 text-white" href="#home">Blogs</Nav.Link>
            <Nav.Link className="mr-5 text-white" href="#link">ContactUs</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavBar;