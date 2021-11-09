import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" className="NavBar" style={{ backgroundColor : 'black'}} >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-5">
            <Nav.Link as={Link} to="/gym" className="me-5">
              Gym
            </Nav.Link>
            <Nav.Link as={Link} to="/trainers" className="me-5">
              Trainers
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="me-5">
              About us
            </Nav.Link>

            <Form className="me-5" action="#">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control size="sm" type="text" placeholder="John Doe." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
