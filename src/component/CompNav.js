import React from 'react'
import {Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom';


const CompNav = () => {
  let location = useLocation();
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/home">MedTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</NavLink>
            <NavLink className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</NavLink>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item to="/action/3.1">Digital Medical Report (DMR)</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.2">Apointment</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.3">Reminder</NavDropdown.Item>
              <NavDropdown.Item to="/action/3.4">Billing</NavDropdown.Item>
            </NavDropdown>
            <NavLink className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</NavLink>
          </Nav>
          <Nav>
            <NavLink className={`nav-link ${location.pathname === "/login" ? "active" : ""} mx-3`}  to="/login">Login</NavLink>
            <NavLink className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">SignUp</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CompNav
