import React, { Component } from 'react';
import '../App.css';
import backGroundImage from "./images/landingPageImage.jpg"
import CustomerCarousel from "./images/yelp_logo.jpg"
import { Form, FormControl, Button, Image } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`,
    width: "1450px",
    height: "820px"

}



class HomePage extends Component {
    render() {
        return (
            <div style={backgroundImagePic}>
                <div>
                    <Button href = '/userProfile' style = {{margin:"25px 15px", backgroundColor: "transparent", fontSize: "20px", border: 'none', color: "black"}} variant="link">Write a review</Button> {' '}
                    <Button href='/allEvents' style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}} variant='link'> Events</Button> {' '}
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}} variant='link'> Talk </Button>
                    <Button href = '/list' style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}} variant='link'> <i class="fas fa-utensils"></i> Restaurant </Button>
                    {/* <Button  style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}}> <i class='far fa-user-circle'></i> Profile </Button> */}
                    {/* // <button style ={{ fontSize: "20px", border: "none", backgroundColor: "transparent", cursor: "pointer"}} type="submit"><i class='far fa-user-circle'></i></button> */}
                    
                    <a href ='/' class="btn bg-transparent float-right" style={{marginTop: "25px", marginRight: "45px"}} role="button"> Logout </a>
                    <a href ='/userProfile' class="btn bg-transparent float-right" style={{marginTop: "25px", marginRight: "0px", color:"black", fontSize: "20px"}} role="button"><i class='far fa-user-circle'></i></a>
                </div>
                <div class='container'>
                    <center>
                        <Image src={CustomerCarousel}/>
                            <Form inline>
                                <input style={{marginLeft: "200px", width: "400px", height: "40px", border: "none"}} type="text" placeholder="restaurants, delivery..."/>
                                <input style={{width: "400px", height: "40px", border: "none", borderLeft: "1px solid black"}} type='text' placeholder='address..'/>
                                <button style ={{width: "60px", height:"40px", background: "red", color: "white", border: "1px solid red", cursor: "pointer"}} type="submit"><i class="fa fa-search"></i></button>
                            </Form>
                    </center>
                </div>
            </div>
        )
    }
}

export default HomePage;