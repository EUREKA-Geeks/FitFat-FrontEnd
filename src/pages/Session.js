import axios from 'axios';
import React, { Component } from 'react'
import "/home/malek/project-401/FitFat-FrontEnd/src/styles/Sidebar.css"
import {Button,Card} from 'react-bootstrap/';


export class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {

    sessionInfo:[],
      

    }
  }

  componentDidMount = async()=>{
    let sessionFromApi = await axios.get(`http://localhost:8080/session`)

    console.log(sessionFromApi.data);
     this.setState({
        sessionInfo: sessionFromApi.data
      })
  }
  render() {
 

    
    return(
        <div>

        <Card style={{ width: '25rem' }} >
          <Card.Body>
            <Card.Title>Session name</Card.Title>
            <Card.Text>
              Description
            </Card.Text>
            <Card.Text>
            Price
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

export default Session
