import axios from "axios";
import React, { Component } from "react";
import "../styles/Sidebar.css";
import { Button, Card } from "react-bootstrap/";
import { FaHome } from "react-icons/fa";
import { CgProfile, CgGym } from "react-icons/cg";
import { GiBiceps } from "react-icons/gi";
import { BsCardList } from "react-icons/bs";
import { Link } from "react-router-dom";

export class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gymInfo: [],
      unknownImg:
        "https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png",
    };
  }

  componentDidMount = () => {
    axios
      .get("https://fitfat-eurika.herokuapp.com/gym/allGym")
      .then((response) => {
        this.setState({ gymInfo: response.data });
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <section className="home">
                  <Link
                    to="/"
                    className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                  >
                    <span className="fs-5 d-none d-sm-inline accent-1">
                      <span>
                        <FaHome />{" "}
                      </span>{" "}
                      Home
                    </span>
                  </Link>
                </section>
                <section className="container100">
                  <ul
                    className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                    id="menu"
                  >
                    <li className="nav-item">
                      <Link
                        to="/user/profile"
                        className="nav-link align-middle px-0"
                      >
                        <i className="fs-4 bi-house"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          <span>
                            <CgProfile />{" "}
                          </span>
                          Profile
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/gym"
                        data-bs-toggle="collapse"
                        className="nav-link px-0 align-middle"
                      >
                        <i className="fs-4 bi-speedometer2"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          <span>
                            <CgGym />
                          </span>
                          Gym List
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/session"
                        className="nav-link px-0 align-middle"
                      >
                        <i className="fs-4 bi-table"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
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
                        className="nav-link px-0 align-middle "
                      >
                        <i className="fs-4 bi-bootstrap"></i>{" "}
                        <span className="ms-1 d-none d-sm-inline">
                          <GiBiceps />
                          Trainer
                        </span>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
            <div className="col py-3 sectionRight">
              {this.state.gymInfo.map((gym) => (
                <Card style={{ width: "40%" }}>
                  <Card.Img
                    variant="top"
                    src={
                      gym.photo.length > 0 ? gym.photo : this.state.unknownImg
                    }
                    width="200px"
                    height="300px"
                  />
                  <Card.Body>
                    {console.log(gym)}
                    <Card.Title>{gym.name}</Card.Title>
                    <Card.Text>{gym.bio}</Card.Text>
                    <Card.Text>{gym.phoneNumber}</Card.Text>
                    <Card.Text>{gym.location[0] || "Unknown"}</Card.Text>
                  </Card.Body>
                  <Button
                    style={{
                      background: "#F36100",
                      size: "lg",
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

export default Gym;
