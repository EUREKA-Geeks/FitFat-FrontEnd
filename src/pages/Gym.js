import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card, Nav } from "react-bootstrap/";
import Sidebar from "../components/Sidebar";
import Gym2 from "./Gym2";
import Header from "../components/Header";
import "../styles/Gym.css";
// import Nav from "../components/Nav";
export class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gymInfo: [],
    };
  }

  componentDidMount = async () => {
    let gymFromApi = await axios.get(`http://localhost:8080/gym`);

    console.log(gymFromApi.data);
    this.setState({
      gymInfo: gymFromApi.data,
    });
  };

  render() {
    return (
      <div>
        <div className="parent">
          <div className="left">
        <Sidebar/>
        </div>
          <div className="right">
        <Card style={{ width: "100%" }}>
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
        </div>
      </div>
    );
  }
}

export default Gym;
