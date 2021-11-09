import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
export class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainersInfo: [],
    };
  }

  componentDidMount = async () => {
    let trainersFromApi = await axios.get(`http://localhost:8080/trainers`);

    console.log(trainersFromApi.data);
    this.setState({
      trainersInfo: trainersFromApi.data,
    });
  };

  render() {
    return (
      <div>
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>Trainer name</Card.Title>
            <Card.Text>Age</Card.Text>
            <Card.Text>bio</Card.Text>
            <Card.Text>Experiance</Card.Text>
            <Card.Text>Price</Card.Text>
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

export default Trainers;
