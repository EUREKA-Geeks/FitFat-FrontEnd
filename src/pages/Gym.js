import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card, Col, Nav } from "react-bootstrap/";
import Sidebar from "../components/Sidebar";

import Header from "../components/Header";
// import "../styles/Gym.css";

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
   <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/gym" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Gym</span> </a>
                     
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Sessions</span></a>
                    </li>
                    <li>
                        <a href="/trainers" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Trainer</span></a>
                    
                    </li>
                  
                    
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="/user/profile" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="/user/profile">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col py-3" style={{paddingLeft:"20%"  }}>
 
        <Card style={{ width: "70%"     }}>
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
    
     
    </div>


    );
  }
}

export default Gym;
