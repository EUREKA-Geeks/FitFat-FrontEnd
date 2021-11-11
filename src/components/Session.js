import React from "react";

export default function Session() {
  return (
    <div id="session" className="mt-2">
      <span id="left">
        <p style={{ width: "40%" }}>Our Latest Sessions</p>
      </span>
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
                      Hello Ladies, Get in a perfect body shape with integrated
                      gym - Swimming Area - Weights Area{" "}
                    </p>
                  </div>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 1 mins ago</small>
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
                        This pose, from the back-bending family of yoga poses,
                        is great for stretching the muscles of the chest. Try
                        it! Corpse Pose
                      </p>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
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
                        Some are born strong, and others are made strong. ...
                        Bodybuilding isn't 90 minutes in the gym.
                      </p>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 4 mins ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    </div>
  );
}
