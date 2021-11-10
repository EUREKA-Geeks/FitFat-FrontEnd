import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal, Button, Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/HeaderStyle.css";
import axios from "axios";

export default function Header(props) {
  const { loginWithRedirect, logout, user } = useAuth0();
  console.log(user);
  useEffect(() => {
    if (user) {
      axios
        .post("http://localhost:8080/signup", {
          username: user.name,
          email: user.email,
        })
        .then((res) => {
          console.log(res);
        });
    }
  }, [user]);
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="NavBar"
      id={props.id}
    // sticky="top"
    // fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-5">
            <Nav.Link as={Link} to="/gym" className="me-5">
              <span className="p1"><span className="p2">Gym</span></span>
            </Nav.Link>
            <Nav.Link as={Link} to="/trainers" className="me-5">
              <span className="p1"><span className="p2"> Trainers</span></span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" className="me-5">
              <span className="p1"><span className="p2">  About us</span></span>
            </Nav.Link>
            {useAuth0().isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/profile" className="me-5">
                <span className="p1"><span className="p2">  {user.name}</span></span>
                </Nav.Link>
                <Nav.Link
                  as={Button}
                  variant="outline-light"
                  onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Sign Out
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                as={Button}
                variant="outline-light"
                onClick={() => loginWithRedirect({})}
                className="me-5 "
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
