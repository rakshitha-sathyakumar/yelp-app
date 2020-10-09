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

export class getSalad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saladList: []
        };
    }

    componentDidMount() {
        axios.get(`${backendServer}/yelp/viewMenu/salad/${localStorage.getItem("rest_id")}`)
        .then(res => {
            console.log(res.data)
            this.setState({ saladList: res.data });
            //console.log(this.state.appetizerList);
        });
    }

    render () {
        console.log(this.state.saladList);
        let renderSalad = this.state.saladList.map(menu => {
            var fileName = menu.fileText
            var imgSrc = `${backendServer}/yelp/upload/restaurant/${fileName}`
            return (
                <div>
                    <Card style={{borderLeft: "none", borderBottom: "none"}}>
                        <Card.Img src = {imgSrc} style={{width: "500px", height: "420px"}}></Card.Img>
                        <Card.Title style={{margin: "10px", fontSize: "25px"}}>{menu.dish_name} </Card.Title>
                        <Card.Text style={{margin: "10px"}}>{menu.ingredients}</Card.Text>
                        <Card.Text style={{margin: "10px"}}>{menu.description}</Card.Text>
                        <Card.Text style={{margin: "10px"}}> ${menu.price}</Card.Text>
                        <div>
                        <Button style={{backgroundColor:"red", border: "1px solid red", marginLeft: "10px"}}> <Link to = {{pathname: `/editDish/${localStorage.getItem("rest_id")}/${menu.dish_id}`}} style={{color: "white"}}> Edit dish </Link>
                        </Button>
                        </div>
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
                <h1 style={{margin: "10px"}}> List of Salads </h1>
                </center>
                    {renderSalad}
            </div>
        </React.Fragment>
        )
    }
         
}
export default getSalad;