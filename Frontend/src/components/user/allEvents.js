import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import yelpLoginImage from '../images/yelp_logo.jpg';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup, Dropdown} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../backendServer";

export class getAllEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            userRegList: [],
            searchEventList: [],
            searchList: 'False'
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewEvents`)
        .then(res => {
            this.setState({ eventList: res.data });
        });

        axios.get(`${backendServer}/yelp/viewEvents/user/${localStorage.getItem("user_id")}`)
        .then(res => {
            this.setState({ userRegList: res.data });
        });
    }

    handleOrder = (e) => {
        if (localStorage.getItem("user") === 'False')
        {
            window.location = '/restOrders';
        } else {
            window.location = '/user/orders'
        }
    }

    searchChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            keyword: e.target.value
        })
    }
    

    handleSearch = (e) => {
        console.log(this.state.keyword)
        e.preventDefault();
        axios.get(`${backendServer}/restaurantSearch/${this.state.keyword}`)
        .then(response => {
            this.setState({searchEventList: response.data})
        })
        this.setState({searchList: "True"})
    }

    render () {
        console.log(this.state.searchEventList);
        let renderEvents = this.state.eventList.map(event => {
            return (
                <div>
                    <Card style={{borderBottom: "none", borderLeft: "none"}}>
                        <Card.Title style={{margin: "10px", fontSize: "25px"}}>{event.event_name} </Card.Title>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-calendar-day"></i> {event.date}</Card.Text>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-hourglass"></i> {event.time}</Card.Text>
                        <div>
                        <Button style={{backgroundColor: "red", border: "1px solid red", margin: "10px"}}>
                        <Link to = {{pathname: `/event/${event.event_id}`}} style={{color: "white"}}> View details </Link></Button>
                        </div>
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

        let renderSearchList = this.state.searchEventList.map(search => {
            return (
                <div>
                    <Card style={{borderBottom: "none", borderLeft: "none"}}>
                        <Card.Title style={{margin: "10px", fontSize: "25px"}}>{search.event_name} </Card.Title>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-calendar-day"></i> {search.date}</Card.Text>
                        <Card.Text style={{margin: "10px"}}> <i class="fas fa-hourglass"></i> {search.time}</Card.Text>
                        <div>
                        <Button style={{backgroundColor: "red", border: "1px solid red", margin: "10px"}}>
                        <Link to = {{pathname: `/event/${search.event_id}`}} style={{color: "white"}}> View details </Link></Button>
                        </div>
                    </Card>
                    <br/>
                    <br/>
                </div> 
            )
        })
        let render;
        if (this.state.searchList === 'True') {
            render = 
            <div class="container">
                <center>
                    <h1 style={{margin: "10px", color:"red"}}> List of Events </h1>
                </center>
                {renderSearchList}
            </div>
        } else {
            if(localStorage.getItem("user") === 'False') {
          render = 
          <div class="container">
            <center>
                <h1 style={{margin: "10px", color:"red"}}> List of Events </h1>
            </center>
            {renderEvents}
        </div>
        } else {
            render = 
            <div>
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
            </div>
            }
        }
        return (
            <React.Fragment>
                <Navigationbar />
                {render}   
            </React.Fragment>    
        )
    }
         
}
export default getAllEvents;