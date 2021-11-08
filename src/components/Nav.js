import React, { useState } from "react";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function Header() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleName = (ww) => setName(ww);
  console.log(show);
  console.log(name);
  return (
    <Navbar collapseOnSelect expand="md" variant="dark">
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
            <Nav.Link className="me-5">
              <LoginModal />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
