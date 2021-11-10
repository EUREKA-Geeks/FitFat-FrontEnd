import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
import {FaHome} from 'react-icons/fa'
import {CgProfile, CgGym} from 'react-icons/cg'
import {GiBiceps} from 'react-icons/gi'
import {BsCardList} from 'react-icons/bs'
import { Link } from "react-router-dom"; 



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
        <div class="container-fluid" >
          <div class="row flex-nowrap" >
            <div class="col-auto col-md-3 col-xl-2 px-sm-0 px-0 " id="lala">
              
              <div class="d-flex flex-column align-items-center align-items-sm-start   text-white min-vh-100 ">

                
                <div style={{backgroundColor:"#20252594" ,width:"100%", textAlign:"right"}}  class="flex-nowrap col-auto col-md-3 col-xl-2 px-sm-2 px-5 align-items-center px-sm-5" >
                <Link to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none px-sm-4
                 pt-3">
                  <span class="label-1">FitFat</span> 
                </Link>

                </div>
                

              
                <section className="container100">


                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                    <Link to="/" class="nav-link align-middle px-0">
                      <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"><span><FaHome/> </span>Home</span>
                    </Link>
                  </li>

                  {/* <li class="nav-item">
                    <Link to="/user/profile" class="nav-link align-middle px-0">
                      <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"><span><CgProfile/> </span>Profile</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/gym" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                      <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline"><span><CgGym/></span>Gym List</span> </Link>

                  </li>
                  <li>
                    <Link to="/session" class="nav-link px-0 align-middle">
                      <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline"> <span><BsCardList/> </span>Sessions</span></Link>
                  </li>
                  <li>
                    <Link to="/trainers" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                      <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline"><GiBiceps/>Trainer</span></Link>

                  </li>


                </ul>


                </section>
              


              </div>
            </div>
            <div class="col py-3" style={{ paddingLeft: "20%" }}>

              <Card style={{ width: "70%" }}>
                <Card.Body>
                  <Card.Title>Gym name</Card.Title>
                  <Card.Text>Description</Card.Text>
                  <Card.Text>Regester Price</Card.Text>
                </Card.Body>
                <Button 
                    style={{background:"#F36100" ,size:"lg",borderStyle:"none"}}
                  size="lg"
                  onClick={this.registerFunction}
                >
                  Register
                </Button>
              </Card>
            </div>
            <div class="col py-3" style={{ paddingLeft: "20%" }}>

              <Card style={{ width: "70%" }}>
                <Card.Body>
                  <Card.Title>Gym name</Card.Title>
                  <Card.Text>Description</Card.Text>
                  <Card.Text>Regester Price</Card.Text>
                </Card.Body>
                <Button 
                    style={{background:"#F36100" ,size:"lg",borderStyle:"none"}}
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
