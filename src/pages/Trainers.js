import axios from "axios";
import React, { Component } from "react";
// import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
// import "../styles/Gym.css";
import Sidebar from "../components/Sidebar";
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
         <div class="container-fluid">
         <div class="row flex-nowrap">
         <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Home</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="/user/profile" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/gym" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Gym</span> </a>
                     
                    </li>
                    <li>
                        <a href="/session" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Sessions</span></a>
                    </li>
                    <li>
                        <a href="/trainers" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Trainer</span></a>
                    
                    </li>
                  
                    
                </ul>
                <hr/>
              
            </div>
         </div>
         <div class="col py-3" style={{paddingLeft:"20%"  }}>
            <Card style={{ width: "70%" }}>
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
      </div>
      </div>
      </div>
     
  
    
    );
  }
}

export default Trainers;
