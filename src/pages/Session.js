import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
import { FaHome } from "react-icons/fa";
import { CgProfile, CgGym } from "react-icons/cg";
import { GiBiceps } from "react-icons/gi";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionInfo: [],
    };
  }

  handleCorrect = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Registered",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  handleIncorrect = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "The Session is Full",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  componentDidMount = () => {
    axios
      .get(`https://fitfat-eurika.herokuapp.com/gym/allSession`)
      .then((res) => {
        console.log(res);
        this.setState({
          sessionInfo: res.data,
        });
      });
  };
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-0 px-0 " id="lala">
              <div class="d-flex flex-column align-items-center align-items-sm-start   text-white min-vh-100 ">
                <div
                  style={{
                    backgroundColor: "#20252594",
                    width: "100%",
                    textAlign: "right",
                  }}
                  class="flex-nowrap col-auto col-md-3 col-xl-2 px-sm-2 px-5 align-items-center px-sm-5"
                >
                  <Link
                    to="/"
                    class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none px-sm-4
                 pt-3"
                  >
                    <span class="label-1">FitFat</span>
                  </Link>
                </div>

                <div className="container100">
                  <ul
                    class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                  >
                    <li class="nav-item">
                      <Link to="/" class="nav-link align-middle px-0">
                        <i class="fs-4 bi-house"></i>{" "}
                        <span class="ms-1 d-none d-sm-inline">
                          <span>
                            <FaHome />{" "}
                          </span>
                          Home
                        </span>
                      </Link>
                    </li>

                    {/* <li class="nav-item">
                    <Link to="/user/profile" class="nav-link align-middle px-0">
                      <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline"><span><CgProfile/> </span>Profile</span>
                    </Link>
                  </li> */}
                    <li>
                      <Link
                        to="/gym"
                        data-bs-toggle="collapse"
                        class="nav-link px-0 align-middle"
                      >
                        <i class="fs-4 bi-speedometer2"></i>{" "}
                        <span class="ms-1 d-none d-sm-inline">
                          <span>
                            <CgGym />
                          </span>
                          Gym List
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/session" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-table"></i>{" "}
                        <span class="ms-1 d-none d-sm-inline">
                          {" "}
                          <span>
                            <BsCardList />{" "}
                          </span>
                          Sessions
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/trainers"
                        data-bs-toggle="collapse"
                        class="nav-link px-0 align-middle "
                      >
                        <i class="fs-4 bi-bootstrap"></i>{" "}
                        <span class="ms-1 d-none d-sm-inline">
                          <GiBiceps />
                          Trainer
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col py-3 sectionRight">
              <span id="right">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-10 mt-4">
                      <div class="card">
                        <div class="card-horizontal">
                          <div class="img-square-wrapper">
                            <img
                              class=""
                              src="https://chiswickbuzz.net/wp-content/uploads/2020/02/girls-gym-300x180.jpg"
                              alt="Card image cap"
                            />
                          </div>
                          <div class="card-body">
                            <h4 class="card-title">Only Girls Session</h4>
                            <p>Capacity : 20 trainee </p>
                            <p class="card-text">
                              {" "}
                              Hello Ladies, Get in a perfect body shape with
                              integrated gym - Swimming Area - Weights Area{" "}
                            </p>

                            <button
                              className="btn btn-primary"
                              onClick={this.handleIncorrect}
                            >
                              Register
                            </button>
                          </div>
                        </div>
                        <div class="card-footer">
                          <small class="text-muted">
                            Last updated 1 mins ago
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-10 mt-5">
                        <div class="card">
                          <div class="card-horizontal">
                            <div class="img-square-wrapper">
                              <img
                                class=""
                                src="https://i.pinimg.com/474x/b8/82/d7/b882d7670e841be304255d40517e652e.jpg"
                                alt="Card image cap"
                              />
                            </div>
                            <div class="card-body">
                              <h4 class="card-title">Yoga class</h4>
                              <p>Capacity : 10 trainee </p>

                              <p class="card-text">
                                This pose, from the back-bending family of yoga
                                poses, is great for stretching the muscles of
                                the chest. Try it! Corpse Pose
                              </p>

                              <button
                                className="btn btn-primary"
                                onClick={this.handleCorrect}
                              >
                                Register
                              </button>
                            </div>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">
                              Last updated 15 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>

                <span>
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-10 mt-5">
                        <div class="card">
                          <div class="card-horizontal">
                            <div class="img-square-wrapper">
                              <img
                                class=""
                                src="https://securecdn.pymnts.com/wp-content/uploads/2021/07/CrossFit-Nike-gym-fitness-300x180.jpg"
                                alt="Card image cap"
                              />
                            </div>
                            <div class="card-body">
                              <h4 class="card-title">weightlifting</h4>
                              <p>Capacity : 15 trainee </p>

                              <p class="card-text">
                                Some are born strong, and others are made
                                strong. ... Bodybuilding isn't 90 minutes in the
                                gym.
                              </p>
                              <button
                                className="btn btn-primary"
                                onClick={this.handleCorrect}
                              >
                                Register
                              </button>
                            </div>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">
                              Last updated 4 mins ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </span>
              {this.state.sessionInfo.map((sess) => (
                <Card style={{ width: "40%" }}>
                  <Card.Body>
                    {console.log(sess)}
                    <Card.Title>Session name</Card.Title>
                    <Card.Text>Description</Card.Text>
                    <Card.Text>Price</Card.Text>
                  </Card.Body>
                  <Button
                    style={{
                      background: "#F36100",

                      borderStyle: "none",
                    }}
                    size="lg"
                    onClick={this.registerFunction}
                  >
                    Register
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;
