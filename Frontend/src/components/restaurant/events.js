import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import illusionsImage from '../images/illusions.jpg';
import cprImage from '../images/cprDublin.jpg';
import saladImage from '../images/salad.jpg';
import maincourseImage from '../images/mainCourse.jpg';
import dessertImage from '../images/desserts.jpg';
import beveragesImage from '../images/beverages.jpg';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';

class viewEvents extends Component {
    constructor(props) {
        super(props);
        this.state ={};
    }

    render() {
        return (
            <React.Fragment>
            <Navigationbar />
            <div class="container">
            <h5 style={{marginTop:"25px", float:"left", fontWeight:"bold"}}> Add to the event list</h5>
            <Button href="/addEvent" style={{marginTop:"15px", float:"right", backgroundColor:"red"}}> Create an event </Button><br/><br/>
            <hr />
            <h2 style={{textAlign:"center"}}>List of events</h2>
            <div class='container'>
                <CardGroup>
                    <Card style={{margin: "10px", border:"1px solid black"}}>
                        <Card.Img variant="top" src={illusionsImage} />
                        <Card.Body>
                        <Card.Title>Illusions - An Outdoor Exhibition</Card.Title>
                        <Card.Text> <i class="fas fa-hourglass-half"></i> Wednesday, Sep 2, 10:00 am </Card.Text>
                        <Card.Text> <i class="fas fa-map-marker-alt"></i> CuriOdyssey </Card.Text>
                        <Card.Text>
                        Explore the wonder of visual perception with CuriOdyssey's outdoor exhibition, Illusions. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href ="/dishList/#appetizer">Registered people</a>
                        </Card.Footer>
                    </Card>
                    <Card style={{margin: "10px", border:"1px solid black"}}>
                        <Card.Img variant="top" src={cprImage} />
                        <Card.Body>
                        <Card.Title>CPR Certification in Dublin</Card.Title>
                        <Card.Text> <i class="fas fa-hourglass-half"></i> Sunday, Oct 4, 1:00 pm</Card.Text>
                        <Card.Text> <i class="fas fa-map-marker-alt"></i> Dublin CPR Classes </Card.Text>
                        <Card.Text>
                        The American Heart Association CPR class is 3 hours long. You will learn how to perform CPR on an adult, child and infant, choke-saving and how to use the AED. 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href ="/dishList/#appetizer">Registered people</a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
            </div>
            </React.Fragment>
        )}
}

export default viewEvents;