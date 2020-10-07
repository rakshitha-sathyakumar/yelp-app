import React, { Component } from 'react';
import '../App.css';
import backGroundImage from "./images/landingPageImage.jpg"
import CustomerCarousel from "./images/yelp_logo.jpg"
import { Form, FormControl, Button, Image, Dropdown, ButtonGroup } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`,
    width: "1450px",
    height: "820px"

}

class HomePage extends Component {


handleLogout = () => {
    window.localStorage.clear();
    window.location ='/'
  };

  
    render() {
        return (
            <div style={backgroundImagePic}>
                <div>
                    <ButtonGroup>
                        <Button href='/allEvents' style = {{margin:"25px 0px", marginLeft: "15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}} variant='link'> <i class="fas fa-calendar"></i> Events</Button> {' '}
                        <Button href = '/list' style = {{margin:"25px 0px", backgroundColor: "transparent", border: 'none', fontSize: "20px", color: "black", outline: 'none'}} variant='link'> <i class="fas fa-utensils"></i> Restaurant </Button>
                        <Dropdown style={{marginLeft:"1075px", marginTop: "20px"}}>
                            <Dropdown.Toggle style={{backgroundColor: "red", border: "1px solid red"}}id="dropdown-basic"> <i class="fas fa-user"></i> </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/userProfile">Profile overview</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </ButtonGroup>
                </div>
                <div class='container'>
                    <center>
                        <Image src={CustomerCarousel}/>
                            <Form inline>
                                <input style={{marginLeft: "200px", width: "700px", height: "40px", border: "1px solid black", borderRadius: "5px"}} type="text" placeholder="restaurants, delivery..."/>
                                <button style ={{marginLeft: "5px", width: "60px", height:"40px", background: "red", color: "white", border: "1px solid red", cursor: "pointer", borderRadius: "5px"}} type="submit"><i class="fa fa-search"></i></button>
                            </Form>
                    </center>
                </div>
            </div>
        )
    }
}

export default HomePage;