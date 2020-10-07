import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../../backendServer";

export class getMaincourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maincourseList: []
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewMenu/maincourse/${localStorage.getItem("rest_id")}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ maincourseList: res.data });
            //console.log(this.state.appetizerList);
        });
    }

    render () {
        console.log(this.state.maincourseList);
        let renderMaincourse = this.state.maincourseList.map(menu => {
            return (
                <div>
                    <Card>
                        <Card.Title>{menu.dish_name} </Card.Title>
                        <Card.Text>{menu.ingredients}</Card.Text>
                        <Card.Text>{menu.description}</Card.Text>
                        <Card.Text> ${menu.price}</Card.Text>
                        <Button> <Link to = {{pathname: `/editDish/${localStorage.getItem("rest_id")}/${menu.dish_id}`}} style={{color: "white"}}> Edit dish </Link></Button>
                    </Card>
                    <br/>
                    <br/>
                </div>
            )
        })
        return (
            <React.Fragment>
            <Navigationbar/>
            <div class="container">
                <center>
                <h1 style={{margin: "10px"}}> List of Main course </h1>
                </center>
                    {renderMaincourse}
            </div>
        </React.Fragment>
        )
    }
         
}
export default getMaincourse;