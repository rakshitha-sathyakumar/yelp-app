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
        this.state ={
            eventList: []
        };
    }

componentDidMount () {
    axios.get(`http://localhost:3001/yelp/viewEvents/${localStorage.getItem("rest_id")}`)
    .then(res => {
        //console.log(res.data)
        this.setState({ eventList: res.data });
        //console.log(this.state.appetizerList);
    });
}

    render() {
        console.log(this.state.eventList);
        let renderEvents = this.state.eventList.map(event => {
            return (
                <div>
                    <Card style={{margin: "10px", border:"1px solid black"}}>
                        <Card.Img variant="top" src={illusionsImage} />
                        <Card.Body>
                        <Card.Title>{event.event_name}</Card.Title>
                        <Card.Text> <i class="fas fa-hourglass-half"></i> {event.date} {event.time}</Card.Text>
                        <Card.Text> <i class="fas fa-map-marker-alt"></i> {event.event_location} </Card.Text>
                        <Card.Text>{event.event_description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href ="/dishList/#appetizer">Registered people</a>
                        </Card.Footer>
                    </Card>
                    <br/>
                </div>
            )
        })
        return (
            <React.Fragment>
            <Navigationbar />
            <div class="container">
            <h5 style={{marginTop:"25px", float:"left", fontWeight:"bold"}}> Add to the event list</h5>
            <Button href="/addEvent" style={{marginTop:"15px", float:"right", backgroundColor:"red"}}> Create an event </Button><br/><br/>
            <hr />
            <h2 style={{textAlign:"center"}}>List of events</h2>
                <div class='col-md-6'>
                    <CardGroup>
                            {renderEvents}
                    </CardGroup>
                </div>
            </div>
            </React.Fragment>
        )}
}

export default viewEvents;