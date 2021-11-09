import axios from "axios";
import React, { Component } from "react";
import FormValidator from "./FormValidator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormStyle.css";
import { Form } from "react-bootstrap";

class TrainerSignUp extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormValidator([
      {
        field: "firstName",
        method: "isEmpty",
        validWhen: false,
        message: "Enter firstName.",
      },
      {
        field: "lastName",
        method: "isEmpty",
        validWhen: false,
        message: "Enter lastName.",
      },

      {
        field: "username",
        method: "isEmpty",
        validWhen: false,
        message: "Enter username.",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your email address.",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Enter valid email address.",
      },
      {
        field: "phoneNumber",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number.",
      },
      {
        field: "phoneNumber",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number.",
      },
      {
        field: "DOB",
        method: "isEmpty",
        validWhen: false,
        message: "Enter DOB.",
      },
      {
        field: "bio",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Bio.",
      },
      {
        field: "education",
        method: "isEmpty",
        validWhen: false,
        message: "Enter education.",
      },
      {
        field: "specialTraining",
        method: "isEmpty",
        validWhen: false,
        message: "Enter special Training.",
      },
      {
        field: "experience",
        method: "isEmpty",
        validWhen: false,
        message: "Enter experience.",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Enter password.",
      },
      {
        field: "password_confirmation",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Password confirmation.",
      },
      {
        field: "password_confirmation",
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: "Password and password confirmation do not match.",
      },
    ]);

    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      firstName: "",
      lastName: "",
      DOB: "",
      email: "",
      phoneNumber: "",
      bio:"",
      education:"",
     specialTraining:"",
     experience:"",
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
  passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //handler
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    let newObj = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      DOB: this.state.DOB,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
     bio:this.state.bio,
     education:this.state.education,
     specialTraining:this.state.specialTraining,
     experience:this.state.experience
    };
    if (validation.isValid) {
      axios({
        method: "post",
        url: "http://localhost:8080/trainer/signupTraniner",
        data: newObj,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    console.log("TrainerData::",newObj);
    }
  };

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
        <div className = "body">
      <div className="dir">
          <div className="col-md-4 col-md-offset-4 background">
            <Form className="registrationForm" > 
              <h2>Register Form</h2>
             
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="string"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.firstName.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="string"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.lastName.message}
                </span>{" "}
              </div>

              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">{validation.email.message}</span>{" "}
              </div>
              <div className={validation.phoneNumber.isInvalid && "has-error"}>
                <label htmlFor="phoneNumber">
                  Phone(enter only 10 digit number)
                </label>
                <input
                  type="phoneNumber"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.phoneNumber.message}
                </span>{" "}
              </div>
              <div className={validation.password.isInvalid && "has-error"}>
                <div className={validation.DOB.isInvalid && "has-error"}>
                  <label htmlFor="DOB">Date of Birth</label>
                  <input
                    type="Date"
                    className="form-control"
                    name="DOB"
                    placeholder="Date Of Birth"
                    onChange={this.handleInputChange}
                  />{" "}
                  <span className="help-block msg">{validation.DOB.message}</span>{" "}
                </div>
            
                <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="bio">Bio</label>
                <input
                  type="string"
                  className="form-control"
                  name="bio"
                  placeholder="bio"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.bio.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="education">Education</label>
                <input
                  type="string"
                  className="form-control"
                  name="education"
                  placeholder="education"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.education.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="specialTraining">special Training</label>
                <input
                  type="string"
                  className="form-control"
                  name="specialTraining"
                  placeholder="specialTraining"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.specialTraining.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="experience">Experience</label>
                <input
                  type="string"
                  className="form-control"
                  name="experience"
                  placeholder="experience"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.experience.message}
                </span>{" "}
              </div>
              <div className={validation.email.isInvalid && "has-error"}>
                <label htmlFor="username">user Name</label>
                <input
                  type="string"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.username.message}
                </span>{" "}
              </div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.password.message}
                </span>{" "}
              </div>
              <div
                className={
                  validation.password_confirmation.isInvalid && "has-error"
                }
              >
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block msg">
                  {validation.password_confirmation.message}
                </span>{" "}
              </div>
              <button
                onClick={this.handleFormSubmit}
                className="button-55"
              >
                {" "}
                SignUp{" "}
              </button>
            </Form>
          </div>
        </div>
    
      </div>
    );
  }
}
export default TrainerSignUp;
