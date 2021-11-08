import React, { Component } from 'react'
import axios from 'axios';
import { Card,ListGroup } from 'react-bootstrap';

export class Trainers extends Component {
    constructor(props) {
         super(props);
         this.state = {
           trainerInfo:[],
 
         }
    }
    componentDidMount = async()=>{
      let trainerFromApi = await axios.get(`http://localhost:8080/trainee/trainer`)
 
      console.log(trainerFromApi.data);
       await this.setState({
        trainerInfo:trainerFromApi.data
       })
    }
    render() {

      return (


        <div className='trainer'>
                { this.state.trainerInfo 
  
  ? this.state.trainerInfo.map(elem => 

  <Card style={{ width: '18rem' }}>
  <Card.Header>username={elem.username}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>firstName={elem.firstName}</ListGroup.Item>
    <ListGroup.Item>lastName={elem.lastName}</ListGroup.Item>
    <ListGroup.Item>email={elem.email}</ListGroup.Item>
    <ListGroup.Item>dob={elem.dob}</ListGroup.Item>
    <ListGroup.Item>phoneNumber={elem.phoneNumber}</ListGroup.Item>
    <ListGroup.Item>gym={elem.gym}</ListGroup.Item>
    <ListGroup.Item>bio={elem.bio}</ListGroup.Item>
    <ListGroup.Item>trainee={elem.trainee}</ListGroup.Item>
    <ListGroup.Item>price={elem.price}</ListGroup.Item>
    <ListGroup.Item>gym={elem.gym}</ListGroup.Item>
  
  
  
  </ListGroup>
  </Card>   )
  
  : null 
  }
  
  
        </div>
      )
    }
  }

export default Trainers
