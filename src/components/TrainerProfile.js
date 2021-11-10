import React, { Component } from 'react';
import './profiles.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
class TrainerProfile extends Component {
    render() {
        return (
           <>
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


           </>
        );
    }
}

export default TrainerProfile;