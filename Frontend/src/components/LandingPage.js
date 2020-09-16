import React, { Component } from 'react';
import '../App.css';
import backGroundImage from "./images/landingPageImage.jpg"
import CustomerCarousel from "./images/yelp_logo.jpg"
import { Form, FormControl, Button, Image } from 'react-bootstrap';


var backgroundImagePic = {
    backgroundImage: `url(${backGroundImage})`
}



class LandingPage extends Component {
    render() {
        return (
            <div style={backgroundImagePic}>
                <div>
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", fontSize: "20px", border: 'none', fontWeight: "bold", color: "black"}} variant="link">Write a review</Button> {' '}
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", fontWeight: "bold", color: "black", outline: 'none'}} variant='link'> Events</Button> {' '}
                    <Button style = {{margin:"25px 15px", backgroundColor: "transparent", border: 'none', fontSize: "20px", fontWeight: "bold", color: "black", outline: 'none'}} variant='link'> Talk </Button>
                    <Button className="float-right" style={{margin:"25px 15px 25px 850px", backgroundColor: "transparent", fontSize: "20px", fontWeight: "bold", color: "black", border: "1.5px solid black", borderRadius:"5px"}}> Login </Button>
                    <Button className="float-right" style={{ backgroundColor: "transparent", fontSize: "20px", fontWeight: "bold", color: "black", border: "1.5px solid black", borderRadius:"5px"}}> SignUp </Button>
                </div>
                    <center>
                        <Image style= {{margin: "200px 20px 25px 20px"}}src={CustomerCarousel}/>
                            <Form inline>
                                <FormControl style={{ margin: "0 5px 300px 0", width: "350px", height: "30px"}} type="text" placeholder="restaurants, delivery..." className="mr-sm-2"/>
                                <FormControl style={{width: "300px", height: "30px"}} type='text' placeholder='address..' className="mr-sm-3"/>
                            </Form>
                    </center>
            </div>
        )
    }
}

export default LandingPage;