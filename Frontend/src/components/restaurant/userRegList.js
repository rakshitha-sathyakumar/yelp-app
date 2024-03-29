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

export class getRegUserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regUserList: []
        };
    }

    componentDidMount() {
        console.log()
        axios.get(`${backendServer}/yelp/regUser/${this.props.match.params.event_id}`)
        .then(res => {
            //console.log(res.data)
            this.setState({ regUserList: res.data });
            //console.log(this.state.appetizerList);
        });
    }

    render () {
        let renderRegUser = this.state.regUserList.map(user => {
            return (
                <div>
                    <h4 > {user.first_name} {user.last_name}</h4>
                    <button type="button" class="btn btn-danger">
                    <Link to = {{pathname: `/userProfile/${user.user_id}`}} style={{color: "white"}}> View profile </Link> </button>
                    <hr />
                </div>
            )
        })
        return (
            <React.Fragment>
            <Navigationbar/>
                <div class='container'>
                    <center>
                        <h1 style={{margin:"10px"}}>List of registered people </h1>
                    </center>
                    <hr />
                <div class='container'> 
                    {renderRegUser}
                </div>
                </div>
            </React.Fragment>
        )
    }
         
}
export default getRegUserList;