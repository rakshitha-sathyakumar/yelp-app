import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';

export class getMaincourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maincourseList: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/yelp/viewMenu/maincourse/${localStorage.getItem("rest_id")}`)
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
                    </Card>
                    <br/>
                    <br/>
                </div>
            )
        })
        return (
            <div>
            <div class='navbar'>
            </div>
            <div class='container'> 
                {renderMaincourse }
            </div>
            </div>
        )
    }
         
}
export default getMaincourse;