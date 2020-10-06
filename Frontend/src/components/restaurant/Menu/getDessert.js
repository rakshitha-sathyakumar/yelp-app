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

export class getDessert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dessertList: []
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewMenu/dessert/${localStorage.getItem("rest_id")}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ dessertList: res.data });
            //console.log(this.state.appetizerList);
        });
    }

    render () {
        console.log(this.state.dessertList);
        let renderDessert = this.state.dessertList.map(menu => {
            return (
                <div>
                    <Card>
                        <Card.Title>{menu.dish_name} </Card.Title>
                        <Card.Text>{menu.ingredients}</Card.Text>
                        <Card.Text>{menu.description}</Card.Text>
                        <Card.Text> ${menu.price}</Card.Text>
                        <Button> <Link to = {{pathname: `/editDish/${localStorage.getItem("rest_id")}/${menu.dish_id}`}} style={{color: "white"}}> Edit dish </Link> </Button>
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
                {renderDessert}
            </div>
            </div>
        )
    }
         
}
export default getDessert;