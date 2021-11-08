import React, { Component } from 'react';
import Bayan from "../assets/pp.png";
import Dima from "../assets/IMG-20190621-WA0019.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export class Team extends Component {
    render() {
        return (
            <div>

                <div className="header">
                    <h1 className="title" >
                        About us
                    </h1>
                    <br/>
                    <p className="description">
                      Over 14,000 independently owned gyms can be found in locations around the world. FitFat affiliates comprise a confederation of dedicated fitness practitioners united around the shared goal to improve health, happiness, and performance for anyone who walks through their doors.
                      Some may call it a tagline, but for us, it’s a way of life. It’s our Monday-thru-every-day mantra. An unfiltered philosophy that drives us to create a community and a gym for all.
                    </p>
                </div>
                {/* Card 1 */}
                <div className="container1">
                <div>
                    <div class="container mt-5 d-flex justify-content-center ">
                        <div class="maincard p-3">
                            <div class="thecard">
                                <div class="thefront text-center py-4"> <img src={"https://ca.slack-edge.com/TNGRRLUMA-U022H3L6BMG-ae9d3e799090-512"} class="rounded-circle" width="100" />
                                    <h3 class ="mt-2 mb-0">Ma'moun Hussein</h3>
                                    <br />
                                    <div class ="stats d-flex justify-content-between px-3 mt-3">
                                    <div class ="stats-1 d-flex flex-column"> <FaLinkedinIn size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaGithub size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaTwitter size={35}/> </div>
                                    </div>
                                </div>
                                <div class="theback text-center py-3 px-3">
                                    <h4>About Ma'moun Hussein</h4>
                                    <br />
                                    <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div>
                    <div class="container mt-5 d-flex justify-content-center ">
                        <div class="maincard p-3">
                            <div class="thecard">
                                <div class="thefront text-center py-4"> <img src={Bayan} class="rounded-circle" width="100" />
                                    <h3 class ="mt-2 mb-0">Bayan Hmaidy</h3>
                                    <div class ="stats d-flex justify-content-between px-3 mt-3">
                                    <div class ="stats-1 d-flex flex-column"> <FaLinkedinIn size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaGithub size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaTwitter size={35}/> </div>
                                    </div>
                                </div>
                                <div class="theback text-center py-3 px-3">
                                    <h4>About Byan Hmaidy</h4>
                                    <br />
                                    <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div>
                    <div class="container mt-5 d-flex justify-content-center ">
                        <div class="maincard p-3">
                            <div class="thecard">
                                <div class="thefront text-center py-4"> <img src={"https://ca.slack-edge.com/TNGRRLUMA-U0205LGV4TD-c4d4e0a79f26-512"} class="rounded-circle" width="100" />
                                    <h3 class ="mt-2 mb-0">Alaa Baroud</h3>
                                    <div class ="stats d-flex justify-content-between px-3 mt-3">
                                    <div class ="stats-1 d-flex flex-column"> <FaLinkedinIn size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaGithub size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaTwitter size={35}/> </div>
                                    </div>
                                </div>
                                <div class="theback text-center py-3 px-3">
                                    <h4>About Alaa Baroud</h4>
                                    <br />
                                    <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div>
                    <div class="container mt-5 d-flex justify-content-center ">
                        <div class="maincard p-3">
                            <div class="thecard">
                                <div class="thefront text-center py-4"> <img src={Dima} class="rounded-circle" width="100" height = "100"  object-fit= "cover"/>
                                    <h3 class ="mt-2 mb-0">Dima Zeqlam</h3>
                                    <div class ="stats d-flex justify-content-between px-3 mt-3">
                                    <div class ="stats-1 d-flex flex-column"> <FaLinkedinIn size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaGithub size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaTwitter size={35}/> </div>
                                    </div>
                                </div>
                                <div class="theback text-center py-3 px-3">
                                    <h4>About Dima Zeqlam</h4>
                                    <br />
                                    <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div>
                    <div class="container mt-5 d-flex justify-content-center ">
                        <div class="maincard p-3">
                            <div class="thecard">
                                <div class="thefront text-center py-4"> <img src={"https://ca.slack-edge.com/TNGRRLUMA-U023AB1U7AR-9a47613f20a5-512"} class="rounded-circle" width="100" />
                                    <h3 class ="mt-2 mb-0">Malik Swayyed</h3>
                                    <div class ="stats d-flex justify-content-between px-3 mt-3">
                                    <div class ="stats-1 d-flex flex-column"> <FaLinkedinIn size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaGithub size={35}/> </div>
                                    <div class ="stats-1 d-flex flex-column"> <FaTwitter size={35}/> </div>
                                    </div>
                                </div>
                                <div class="theback text-center py-3 px-3">
                                    <h4>About Malik Swayyed</h4>
                                    <br />
                                    <p class="about text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Team;
