import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
import Sidebar from "../components/Sidebar";
export class Gym2 extends Component {
  constructor(props) {
  
  }

   render() {
    return (
      <div>
        <Card style={{ width: "50%" }}>
          <Card.Body>
            <Card.Title>Gym name</Card.Title>
            <Card.Text>Description</Card.Text>
            <Card.Text>Regester Price</Card.Text>
          </Card.Body>
          <Button
            variant="outline-warning"
            size="lg"
            onClick={this.registerFunction}
          >
            Register
          </Button>
        </Card>
      </div>
    );
  }
}

export default Gym2;
