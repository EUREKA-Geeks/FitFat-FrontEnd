import axios from 'axios';
import React, { Component } from 'react'
import "/home/malek/project-401/FitFat-FrontEnd/src/styles/Sidebar.css"
import {Button,Card} from 'react-bootstrap/';
export class Gym extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      gymInfo:[],
     
    }
  }


  componentDidMount = async()=>{
    let gymFromApi = await axios.get(`http://localhost:8080/gym`)

    console.log(gymFromApi.data);
     this.setState({
        gymInfo: gymFromApi.data
      })
  }
   

   render() {


    
    return(
        <div>

        <Card style={{ width: '100%' }} >
          <Card.Body>
            <Card.Title>Gym name</Card.Title>
            <Card.Text>
              Description
            </Card.Text>
            <Card.Text>
            Regester Price
            </Card.Text>
            
          </Card.Body>
        <Button variant="outline-warning" size="lg" onClick={this.registerFunction}>
              Register
            </Button> 
           
           
        </Card>

        </div>
      )
  }
}

export default Gym
