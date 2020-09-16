import React, { Component } from 'react';
import '../App.css';
import backGroundImage from "./images/landingPageImage.jpg"
import CustomerCarousel from "./images/yelp_logo.jpg"
import { Form, FormControl, Button, Image } from 'react-bootstrap';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`,
    width: "1450px",
    height: "820px"

}



class LandingPage extends Component {
    render() {
        return (
            <div style={backgroundImagePic}>
                <div>
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", fontSize: "20px", border: 'none', fontWeight: "bold", color: "black"}} variant="link">Write a review</Button> {' '}
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", fontWeight: "bold", color: "black", outline: 'none'}} variant='link'> Events</Button> {' '}
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", fontWeight: "bold", color: "black", outline: 'none'}} variant='link'> Talk </Button>
                    <Button className="float-right" style={{ margin: "10px 20px", backgroundColor: "transparent", fontSize: "20px", fontWeight: "bold", color: "black", border: "1.5px solid black", borderRadius:"5px"}}> Login </Button>
                    <Button className="float-right" style={{ margin: "10px 0px", backgroundColor: "transparent", fontSize: "20px", fontWeight: "bold", color: "black", border: "1.5px solid black", borderRadius:"5px"}}> SignUp </Button>
                </div>
                <div class='container'>
                    <center>
                        <Image src={CustomerCarousel}/>
                            <Form inline>
                                <FormControl style={{marginLeft: "250px", width: "350px", height: "30px"}} type="text" placeholder="restaurants, delivery..."/>
                                <FormControl style={{marginLeft: "5px", width: "300px", height: "30px"}} type='text' placeholder='address..'/>
                            </Form>
                    </center>
                </div>
            </div>
        )
    }
}

export default LandingPage;