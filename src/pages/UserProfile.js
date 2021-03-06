import axios from "axios";
import React, { Component } from "react";
import "../styles/profile.css";
import { Button, Card } from "react-bootstrap/";
import "../styles/Sidebar.css";
import Sidebar from "../components/Sidebar";
import { withAuth0 } from '@auth0/auth0-react';
import { FaHome } from 'react-icons/fa'
import { CgProfile, CgGym } from 'react-icons/cg'
import { GiBiceps } from 'react-icons/gi'
import { BsCardList } from 'react-icons/bs'
import { Link } from "react-router-dom";


export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
    };
  }
  componentDidMount = async () => {
    let userFromApi = await axios.get(`http://localhost:8080/user`);

    console.log(userFromApi.data);
    this.setState({
      userInfo: userFromApi.data,
    });
  };

  render() {
    //   console.log(this.props)
    const { user, isAuthenticated } = this.props.auth0;
    return (
     


        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
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

                  <li class="nav-item">
                    {/* <Link to="/user/profile" class="nav-link align-middle px-0">
                      <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"><span><CgProfile/> </span>Profile</span>
                    </Link> */}
                  </li>
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
            {!isAuthenticated && <Button onClick={() => this.props.auth0.loginWithRedirect()} variant="light">Login </Button>}
            {isAuthenticated &&
              <div>
                <div class="page-content page-container" id="page-content">
                  <div class="padding">
                    <div class="row container d-flex justify-content-center">
                      <div class="col-xl-6 col-md-12">
                        <div class="card user-card-full">
                          <div class="row m-l-0 m-r-0">
                            <div class="col-sm-4 bg-c-lite-green user-profile">
                              <div class="card-block text-center text-white">
                                <div class="m-b-25">
                                  {" "}
                                  <img
                                    src={user.picture} style={{ borderRadius: "50%" }}
                                    class="img-radius"
                                    alt={user.name}
                                  />{" "}
                                </div>
                                <h6 class="f-w-600">{user.name}</h6>
                                <p>Trainee</p>{" "}
                                <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                              </div>
                            </div>
                            <div class="col-sm-8">
                              <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                                  Information
                                </h6>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Email</p>
                                    <h6 class="text-muted f-w-400">{user.email}</h6>
                                  </div>
                                  <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Phone</p>
                                    <h6 class="text-muted f-w-400">98979989898</h6>
                                  </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                  Sessions
                                </h6>
                                <div class="row">
                                  <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Recent Session</p>
                                    <h6 class="text-muted f-w-400">Yoga</h6>
                                  </div>
                                  <div class="col-sm-6">
                                    <p class="m-b-10 f-w-600">Gym</p>
                                    <h6 class="text-muted f-w-400">Golden gym</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>}
          </div>
        </div>
      </div>


    );

  }
}

export default withAuth0(UserProfile);
