import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';


const CompNav = () => {
  let location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/home">MedTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">Home</Nav.Link>
            <Nav.Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} href="/about">About</Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/action/3.1">Digital Medical Report (DMR)</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.2">ppointment</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.3">Reminder</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.4">Billing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className={`nav-link ${location.pathname === "/login" ? "active" : ""} mx-3`}  href="/login">Login</Nav.Link>
            <Nav.Link className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} href="/signup">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CompNav
