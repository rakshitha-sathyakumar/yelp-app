import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import illusionsImage from '../images/restList.jpg';
import {Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';

class viewRest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restList: []
        };
        this.handleClickk = this.handleClick.bind(this);
    }

componentDidMount () {
    axios.get(`http://localhost:3001/yelp/restProfile`)
    .then(res => {
        //console.log(res.data)
        this.setState({ restList: res.data });
        //console.log(this.state.restList);
    });
}

handleClick = (e) => {
    //prevent page from refresh
    console.log(e)
    e.preventDefault();
    localStorage.setItem("rest_id", e.target.id);
    window.location = "/restaurant_profile";
};

    render() {
        //console.log(this.state.restList.name);
        let renderRest = this.state.restList.map(rest => {
            return (
                <div class='col-md-6'>
                    <Card style={{margin: "10px", border:"1px solid black"}}>
                        <Card.Img variant="top" src={illusionsImage} />
                        <Card.Body>
                        <Card.Title >  
                            <a id = {rest.rest_id} onClick={this.handleClick}>{rest.name} </a>
                        </Card.Title>
                        <Card.Text> <i class="fas fa-location-arrow"></i> {rest.address} {rest.zipcode}</Card.Text>
                        <Card.Text> {rest.Description} </Card.Text>
                        {/* <Card.Text>{event.event_description}</Card.Text> */}
                        </Card.Body>
                    </Card>
                    <br/>
                </div>
            )
        })
        return (
            <React.Fragment>
            <Navigationbar />
            <div class="container">
            {/* <h5 style={{marginTop:"25px", float:"left", fontWeight:"bold"}}> Add to the event list</h5>
            <Button href="/addEvent" style={{marginTop:"15px", float:"right", backgroundColor:"red"}}> Create an event </Button><br/><br/>
            <hr /> */}
            <h2 style={{textAlign:"center", marginTop:"10px"}}>List of Restaurant</h2>
            <hr />
            <CardGroup>
                {renderRest}
            </CardGroup>      
            </div>
            </React.Fragment>
        )}
}

export default viewRest;