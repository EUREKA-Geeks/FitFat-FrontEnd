import React, { Component } from 'react';
import './profiles.css';

class SessionProfile extends Component {
    render() {
        return (
            <div>

<h1> Session details </h1>

<div class="container mt-5">

                    <div class="container d-flex justify-content-center">
                        <div class="card p-3 py-4" id = "carddd">
                            <div class="text-center">
                                <img src="https://img.huffingtonpost.com/asset/5cd3630e2300003100b77a66.jpeg?ops=scalefit_720_noupscale" alt="BigCo Inc. logo" width="full"  />
                            </div> 
                             <h5 class="text-center"> session name</h5>
                            <h5 class="text-center"> capacity: 55 trainee </h5>
                            <div class="row mt-3 mb-3">
                                <div class="col-md-4">
                                  <p>location: amman ----- </p>
                                </div>
                                <div class="col-md-4">
                                    <h5>type: </h5>  
                                </div>
                                <div class="col-md-4">
                                    <h5>day :</h5> <span class="num">1/12/2021</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>




                
            </div>
        );
    }
}

export default SessionProfile;