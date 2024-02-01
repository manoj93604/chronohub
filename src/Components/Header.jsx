import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const CtaskDashboard = location.pathname === "/chronotask/your-work";
  if (isSignUp || isSignIn || CtaskDashboard) {
    return null;
  }

  const navigateSignup = () => {
    navigate("/signup");
  };

  const navigateSignIn = () => {
    navigate("/signin");
  };

  const navigateToChronoTask = () => {
    navigate("/chronotask/your-work");
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#FFFFFF" }}
      data-bs-theme="light"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/128/6474/6474487.png?ga=GA1.1.252936203.1681415593&track=ais"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          ChronoHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item  onClick={navigateToChronoTask}>
                ChronoTasks
              </NavDropdown.Item>
              <NavDropdown.Item >
                ChronoTrack
              </NavDropdown.Item>
              <NavDropdown.Item >
                ChronoConnect
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >View All</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Support" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Learning Center Docs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Support Center
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Social</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button variant="outline-dark" className='m-1'>
              Contact Sales
            </Button>
            <Button variant="outline-dark" className='m-1' onClick={navigateSignIn}>
              Sign In
            </Button>
            <Button style={{ backgroundColor: "#f35c46", border: 0 }} className='m-1' onClick={navigateSignup}>
              Sign Up for Free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;