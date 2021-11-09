import React, { Component } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import Gym from "../pages/Gym.js";
import Trainers from "../pages/Trainers.js";
import Session from "../pages/Session.js";
import UserProfile from "../pages/UserProfile.js";
import axios from "axios";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: true,
      showGym: false,
      showTrainers: false,
      showSession: false,
      sessionInfo: [],
      trainersInfo: [],
      gymInfo: [],
      userInfo: [],
    };
  }

  showProfile = () => {
    this.setState({
      showProfile: true,
      showGym: false,
      showTrainers: false,
      showSession: false,
    });
  };

  showGym = () => {
    this.setState({
      showGym: true,
      showTrainers: false,
      showSession: false,
      showProfile: false,
    });
  };
  showTrainers = () => {
    this.setState({
      showTrainers: true,
      showGym: false,
      showSession: false,
      showProfile: false,
    });
  };
  showSession = () => {
    this.setState({
      showSession: true,
      showTrainers: false,
      showGym: false,
      showProfile: false,
    });
  };
  componentDidMount = async () => {
    let userFromApi = await axios.get(`http://localhost:8080/user`);

    console.log(userFromApi.data);
    this.setState({
      userInfo: userFromApi.data,
    });
  };

  render() {
    return (
      <>
        <div className="parent">
          <section className="left">
            <div className="profile">
              <Nav.Link as={Link} to={UserProfile} onClick={this.showProfile}>
                {" "}
                <span className="me-5">My profile</span>
              </Nav.Link>
            </div>

            <div className="container">
              <Nav.Link as={Link} to={Gym} onClick={this.showGym}>
                {" "}
                <span className="me-5">Gym</span>
              </Nav.Link>

              <Nav.Link as={Link} to={Trainers} onClick={this.showTrainers}>
                {" "}
                <span className="me-5">Trainers</span>
              </Nav.Link>

              <Nav.Link as={Link} to={Session} onClick={this.showSession}>
                {" "}
                <span className="me-5">Session</span>
              </Nav.Link>
            </div>
          </section>
          <section className="right">
            {this.state.showProfile ? <UserProfile /> : null}

            {this.state.showGym ? <Gym /> : null}

            {this.state.showTrainers ? <Trainers /> : null}

            {this.state.showSession ? <Session /> : null}

            {/* {this.state.showProfile ? (this.state.userInfo.map((user,i)=> <UserProfile user={user} key={i} />)) : null}

                {this.state.showGym ? (this.state.gymInfo.map((gym,i)=> <Gym  gym={gym} key={i}/>)) : <UserProfile/>}

                {this.state.showTrainers ? (this.state.trainersInfo.map((trainer,i)=> <Trainers  trainer={trainer} key={i}/>)) : <UserProfile/>}

                {this.state.showSession ? (this.state.sessionInfo.map((session,i)=> <Session  session={session} key={i}/>)) : <UserProfile/>} */}
          </section>
        </div>
      </>
    );
  }
}

export default Sidebar;
