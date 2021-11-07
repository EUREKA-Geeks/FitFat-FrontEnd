import axios from 'axios';
import React, { Component } from 'react'
import { Card,ListGroup } from 'react-bootstrap';

export class UserProfile extends Component {
   constructor(props) {
        super(props);
        this.state = {
          userInfo:[],

        }
   }
   componentDidMount = async()=>{
     let userInfoFromApi = await axios.get(`http://localhost:8080/trainee/profile`)

     console.log(userInfoFromApi.data);
      await this.setState({
        userInfo:userInfoFromApi.data
      })
   }

  render() {

    return (
      <div className='userprofile'>
              { this.state.userInfo 

? this.state.userInfo.map(elem =>  
<Card style={{ width: '18rem' }}>
<Card.Header>username={elem.username}</Card.Header>
<ListGroup variant="flush">
  <ListGroup.Item>firstName={elem.firstName}</ListGroup.Item>
  <ListGroup.Item>lastName={elem.lastName}</ListGroup.Item>
  <ListGroup.Item>email={elem.email}</ListGroup.Item>
  <ListGroup.Item>dob={elem.dob}</ListGroup.Item>
  <ListGroup.Item>phoneNumber={elem.phoneNumber}</ListGroup.Item>
  <ListGroup.Item>sessions={elem.sessions}</ListGroup.Item>



</ListGroup>
</Card>   )

: null 
}


      </div>
    )
  }
}

export default UserProfile;
