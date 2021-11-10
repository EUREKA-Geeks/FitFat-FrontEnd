import React, { Component } from 'react';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { withAuth0 } from '@auth0/auth0-react';
import Nav from '../components/Nav2';

export class GymProfile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
           
            <div>
                 <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=M+PLUS+1&display=swap" rel="stylesheet" />
          
                <Nav />
                {isAuthenticated &&
                <Container>
                    {/* Trainee */}
                    
                    <h1 style={{fontFamily: 'M PLUS 1, sans-serif', marginTop: '3%', marginBottom: '3%', display: "grid",  placeItems: "center"}}>Gym's Trainees</h1>

                   
                    <Row>
                        <Col xs={4}><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user.picture} style ={{imageResolution: "from-image 300dpi"}}/>
                            <Card.Body>
                            <Card.Text>
                                {user.name}
                            </Card.Text>
                            <Card.Text>
                                {user.email}
                            </Card.Text>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text> */}
                                <Button variant="outline-danger">Delete Trainee</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>
    
                    {/* Trainer */}
                    {/* <Row>
                        <Col><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180"  />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row> */}
                    
                </Container>
    }
            </div>
        )
    }
}

export default withAuth0(GymProfile);

