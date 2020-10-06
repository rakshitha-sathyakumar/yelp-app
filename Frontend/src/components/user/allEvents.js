import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../backendServer";

export class getAllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            userRegList: [],
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewEvents`)
        .then(res => {
            //console.log(res.data)
            this.setState({ eventList: res.data });
            //console.log(this.state.appetizerList);
        });

        axios.get(`${backendServer}/yelp/viewEvents/user/${localStorage.getItem("user_id")}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ userRegList: res.data });
            //console.log(this.state.appetizerList);
        });
    }

    render () {
        //console.log(this.state.eventList);
        let renderEvents = this.state.eventList.map(event => {
            return (
                <div>
                    <Card>
                        <Card.Title style={{margin: "10px", fontSize: "25px"}}>{event.event_name} </Card.Title>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-calendar-day"></i> {event.date}</Card.Text>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-hourglass"></i> {event.time}</Card.Text>
                        <Button style={{backgroundColor: "red", border: "1px solid red"}}>
                        <Link to = {{pathname: `/event/${event.event_id}`}} style={{color: "white"}}> View details </Link></Button>
                    </Card>
                    <br/>
                    <br/>
                </div> 
            )
        })
        let renderRegEvents = this.state.userRegList.map(reg => {
            return (
                <div>
                    <h4> {reg.event_name} </h4><br/>
                    <h6> <i class="fas fa-hourglass"></i> {reg.time} </h6>
                    <h6>  <i class="fas fa-calendar-day"></i> {reg.date} </h6>
                    <h6> <i class="fas fa-map-pin"> </i> {reg.event_location} </h6>
                    <hr />
                </div>
            )
        })
        return (
            <React.Fragment>
                <Navigationbar/>
                <div class="container">
                    <h2 style={{color:"red"}}> Upcoming events </h2>
                    <hr />
                        {renderRegEvents}
                </div>
                <hr />
                <div class="container">
                    <center>
                        <h1 style={{margin: "10px", color:"red"}}> List of Events </h1>
                    </center>
                    {renderEvents}
                </div>
                    
            </React.Fragment>
            
        )
    }
         
}
export default getAllEvents;