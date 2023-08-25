import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const CompNav = () => {
  let history = useHistory();
  //chick on logout button
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }

  let location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/home">MedTech</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {!localStorage.getItem('token') ? 
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</NavLink>
              <NavLink className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</NavLink>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item to="/action/3.1">Digital Medical Report (DMR)</NavDropdown.Item>
                <NavDropdown.Item to="/action/3.2">Appointment</NavDropdown.Item>
                <NavDropdown.Item to="/action/3.3">Reminder</NavDropdown.Item>
                <NavDropdown.Item to="/action/3.4">Billing</NavDropdown.Item>
              </NavDropdown>
              <NavLink className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</NavLink>
            </Nav>
            <Nav>
              <NavLink className={`nav-link ${location.pathname === "/login" ? "active" : ""} `} to="/login">Login</NavLink>
              <NavLink className={`nav-link ${location.pathname === "/signup" ? "active" : ""}`} to="/signup">SignUp</NavLink>
            </Nav>
          </Navbar.Collapse>
           :
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
          <NavLink className={`nav-link ${location.pathname === "/dmr" ? "active" : ""}`} to="/dmr">DMR</NavLink>
          <NavLink className={`nav-link ${location.pathname === "/appointment" ? "active" : ""}`} to="/appointment">Appointment</NavLink>
          <NavLink className={`nav-link ${location.pathname === "/reminder" ? "active" : ""}`} to="/reminder">Reminder</NavLink>
          <NavLink className={`nav-link ${location.pathname === "/billing" ? "active" : ""}`} to="/billing">Billing</NavLink>
          <Nav />
          </Nav>
          <Nav>
            <button onClick={handleLogout} className="btn btn-primary">Logout</button>
          </Nav>
        </Navbar.Collapse>
        }



      </Container>
    </Navbar >
  );
}

export default CompNav
