import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import './profiles.css';

class Profiles extends Component {
    render() {
        return (
            <div class = "mainDiv">
                           <h2> Trainer profile:  </h2>


                <div class="container mt-5 " >
                    <div class="row d-flex justify-content-center" >
                        <div class="col-md-7">
                            <div class="card p-3 py-4" id = "carddd">
                                <div class="text-center">
                                    <img src="https://image.freepik.com/free-photo/portrait-happy-gym-trainer-holding-clipboard_107420-30393.jpg" alt="BigCo Inc. logo" width="150" class="rounded-circle" />
                                </div>
                                <div class="text-center mt-3">
                                    <h5 class="mt-2 mb-0">Name</h5> <span>Education </span>
                                    <div class="px-4 mt-1">
                                        <p class="fonts"> Bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                                        </p>
                                    </div>

                                    <Tabs
                                        defaultActiveKey="home"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Experience">
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>


                                        </Tab>
                                        <Tab eventKey="profile" title="Availability">
                                        <p> ---Availability-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Tab>

                                        <Tab eventKey="gym" title="gym" >
                                 
                                                <li> gym 1</li>
                                                <li> gym 2</li>
                                                <li> gym 3</li>

                                       
                                        </Tab>

                                        <Tab eventKey="sessions" title="sessions" >
                                     
                                                <li> sessions 1</li>
                                                <li> sessions 2</li>
                                                <li> sessions 3</li>

                                      
                                        </Tab>

                                        <Tab eventKey="price" title="price" >
                                            <p>price : 55</p>
                                        </Tab>
                                    </Tabs>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                </div>
                <h2> user (Trainee) profile:  </h2>
                <div class="container mt-5">

                    <div class="container d-flex justify-content-center">
                        <div class="card p-3 py-4" id = "carddd">
                            <div class="text-center">
                                <img src="https://media.istockphoto.com/photos/portrait-of-a-female-personal-trainer-in-the-gym-picture-id1040495528?k=20&m=1040495528&s=612x612&w=0&h=cu4iGBipe6RvjeEJDOuBTJJuyTNbTeE2kqvFgQhHC7I=" alt="BigCo Inc. logo" width="150" class="rounded-circle" />
                            </div> 
                             <h5 class="text-center">Name : Alaa </h5>
                            <h5 class="text-center">Gender : Female </h5>
                            <div class="row mt-3 mb-3">
                                <div class="col-md-4">
                                    <h5>Medical Status</h5> <span class="num"> normal </span>
                                </div>
                                <div class="col-md-4">
                                    <h5>Subscription Valid from : </h5> <span class="num"> Date: 1/11/2021</span>
                                </div>
                                <div class="col-md-4">
                                    <h5>Subscription Valid to :</h5> <span class="num">1/12/2021</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <h2> Gym profile </h2>

                <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse" id = "carddd">
                    <div class="col-lg-6" >
                        <div class="about-text go-to">
                            <h3 class="dark-color">Gym Name : Golden Gym</h3>
                            <h6 class="theme-color lead">Locatios: Amman -- </h6>
                            <p>Bio : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div class="row about-list">
                                <div class="col-md-6">
                                   
                                    <div class="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                    <div class="media">
                                        <label>opening hour</label>
                                        <p>8:00</p>
                                    </div><div class="media">
                                        <label>closing hour</label>
                                        <p>12:00</p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div class="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                   
                                    <div class="media">
                                        <label>facebook </label>
                                        <p>facebook link</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                        <Tab  eventKey="features1" title="features1">
                        FEATURE 1 HERE

                        </Tab>
                        <Tab  eventKey="features2" title="features2">
                            FEATURE 2 HERE
                            
                            </Tab>
                             <Tab  eventKey="features3" title="features3">
                             FEATURE 3 HERE

                            </Tab>


                    </Tabs>
                        </div>
                    </div>
                    <div class="col" id= "imggg">
                        <div class="about-avatar">
                            <img src="https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=409&q=80" alt="BigCo Inc." />

                        </div>
                        
                    </div>

                   
                </div>
               
            </div>
        </section>



            </div>





        );
    }
}

export default Profiles;