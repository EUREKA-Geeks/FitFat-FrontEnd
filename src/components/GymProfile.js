import React, { Component } from 'react';
import './profiles.css';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
class GymProfile extends Component {
    render() {
        return (
          <>

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
   

          </>
        );
    }
}

export default GymProfile;