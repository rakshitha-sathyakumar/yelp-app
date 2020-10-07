import React, { Component } from 'react';
import yelpLoginImage from './images/yelp_logo.jpg';
import {Button, Jumbotron, DropdownButton, Dropdown} from 'react-bootstrap';

class Navigationbar extends Component {

    constructor(props) {

        super(props); 
            this.state = {}
}

handleClick = (e) => {
    if (localStorage.getItem("user_id") === null)
    {
        window.location = "/restaurant";
    } else {
        window.location = "/userProfile";
    }
}

handleLogout = () => {
    window.localStorage.clear();
    window.location ='/'
  };

render() {
    return (
    <div >
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/home">
                <img src = {yelpLoginImage} width="150" height="85" alt=""/>
            </a>
            <form class="form-inline mx-auto">
            <input style={{width:"550px", }}class="form-control lg-5" type="search" placeholder="Search" aria-label="Search"/>
            <button style = {{ marginLeft: "5px", width: "60px", height:"38px", borderRadius:"5px", background: "red", color: "white", border: "1px solid red", cursor: "pointer"}} type="submit"><i class="fa fa-search"></i></button>
            </form>
            <form class="form-inline ml-0">
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor: "red", border: "1px solid red"}}id="dropdown-basic"> <i class="fas fa-user"></i> </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={this.handleClick}>Profile overview</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </form>
        </nav>
    </div>
    )
}
}

export default Navigationbar;