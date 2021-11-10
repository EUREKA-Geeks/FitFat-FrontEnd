import React from "react";
import { Card } from "react-bootstrap";
import { GiGymBag } from "react-icons/gi";
import { GiHealthIncrease } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
export default function Features() {
  return (
    <div id="features" className="mb-5">
      <h1>Our Features</h1>
      <span>
        <Card>
          <GiGymBag size={100} style={{color:"#F36100"}} />
          <Card.Body>
            <Card.Title >Gyms</Card.Title>
            <Card.Text>
              Let us help you find the best gyms, Trainers near you while you
              can subscribe to certain gym Trainer or even book you session
              according to your need.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <GiHealthIncrease size={100} style={{color:"#F36100"}}  />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
              While looking for gyms or trainer your health is a major concern,
              and that's why we will ask you about your health and we will help
              you find the best gyms and trainers for you.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <MdOutlineAttachMoney size={100} style={{color:"#F36100"}}  />
          <Card.Body>
            <Card.Title>Money</Card.Title>
            <Card.Text>
              Why Going to the gym or talking to a gym trainer to ask for price
              when you can just book a session and pay the gym trainer directly?
            </Card.Text>
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}
