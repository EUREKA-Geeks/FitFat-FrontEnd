import axios from "axios";
import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export default function LoginModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (e) => {
    e.preventDefault();
    //     console.log({
    //       username: document.getElementById("formBasicEmail").value,
    //       password: document.getElementById("password").value,
    //     });
    axios({
      method: "post",
      url: "http://localhost:8080/signin",
      data: {
        username: document.getElementById("formBasicEmail").value,
        password: document.getElementById("password").value,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div onClick={handleShow}>Log in</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Form className="me-5">
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              id="username"
            >
              <Form.Label>User Name</Form.Label>
              <Form.Control size="sm" type="text" placeholder="John Doe." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
              />
            </Form.Group>
          </Modal.Body>
          <div>
            Don't Have an account? <a href="#">Sign Up</a>
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={(e) => handleLogin(e)}
              type="submit"
            >
              Log in
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
