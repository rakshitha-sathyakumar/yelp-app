import React, { Component } from 'react';
import yelpLoginImage from './images/yelp_logo.jpg';
import {Button} from 'react-bootstrap';

class Navigationbar extends Component {

    constructor(props) {

        super(props); 
            this.state = {}
}

render() {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src = {yelpLoginImage} width="150" height="85" alt=""/>
            </a>
            <form class="form-inline mx-auto">
            <input style={{width:"350px"}}class="form-control lg-5" type="search" placeholder="Search" aria-label="Search"/>
            <input class="form-control lg-2" type="search" placeholder="Search" aria-label="Search"/>
            <button style = {{width: "60px", height:"38px", borderRadius:"5px", background: "red", color: "white", border: "1px solid red", cursor: "pointer"}} type="submit"><i class="fa fa-search"></i></button>
            </form>
            <form class="form-inline ml-0">
            <Button href = '/' style = {{backgroundColor: "transparent", border: 'none', color: "black"}} variant="link">Write a review</Button>
            <button style ={{ fontSize: "20px", border: "none", backgroundColor: "transparent", cursor: "pointer"}} type="submit"><i class='far fa-user-circle'></i></button>
            </form>
        </nav>
    )
}
}

export default Navigationbar;