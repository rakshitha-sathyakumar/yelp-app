import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
// import { connect } from 'react-redux';
// import { customerSignup } from '../../actions/signupActions'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { UserProfileNavBar, UserProfileJumbo, NavList, Form, Button, MDBInput, Carousel} from 'react-bootstrap';
import rest1 from './../images/rest1.jpg'
import rest2 from './../images/rest2.jpg'
import food1 from './../images/food1.jpg'
import food2 from './../images/food2.jpg'
import axios from 'axios';


class RestaurantPage extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
          <Navigationbar />
             <div className='container-fluid' >
                <Carousel>
                    <Carousel.Item style={{'height':"400px", margin:"0"}} >
                        <img style={{'height':"500px"}} className="w-100" src={rest1} />
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"400px"}}>
                        <img style={{'height':"500px"}} className="w-100" src={rest2}/>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"400px"}}>
                        <img style={{'height':"500px"}} className="d-block w-100" src={food1}/>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"400px"}}>
                        <img style={{'height':"500px"}} className="d-block w-100" src={food2}/>
                    </Carousel.Item>
                </Carousel>
            </div>  
            <div class="row">
            <div class="col-xs-4" style={{marginLeft: "50px", textAlign: "top"}}>
                <br />
                <h1 style={{fontWeight: "bolder", margin:"0"}}> House of Bagels</h1>
                <p> 505 E San Carlos St, San Jose, CA 95112</p>
                <i class='fas fa-star' style={{color: "red"}}></i>
                <i class='fas fa-star' style={{color: "red"}}></i>
                <i class='fas fa-star' style={{color: "red"}}></i>
                <i class='fas fa-star' style={{color: "red"}}></i>
                <i class='fas fa-star-half' style={{color: "red"}}></i>
                <div style={{overflow: "hidden"}}>
                    <p style={{float: "left", color: "green"}}>Open</p>
                    <p style={{float: "left", marginLeft: "10px"}}>6:00 AM - 4:00 PM</p>
                </div>
                <div class="inline-block">
                <Button href = '/userProfile' style = {{backgroundColor: "red", fontSize: "20px", border: '1px solid red', color: "white"}} variant="link"> <i class='fas fa-star'></i> Write a review</Button> {' '}
                <Button href = '/userProfile' style = {{backgroundColor: "transparent", fontSize: "20px", border: '1px solid black', color: 'black'}} variant="link"><i class='fas fa-camera'></i> Add a photo</Button> {' '}
                <Button href = '/userProfile' style = {{backgroundColor: "transparent", fontSize: "20px", border: '1px solid black', color: 'black'}} variant="link"><i class="far fa-share-square"></i> Share</Button>
                </div>
                <hr />
                <h3> Covid-19 Updates </h3> {'  '}
                <h6> Updated services</h6>
                <br />
                <div>
                    <p style={{float: "left"}}> <i class="fas fa-check" style={{color: "green"}}></i> Take out</p>
                    <p style={{float: "left", marginLeft: "10px"}}> <i class="fas fa-check" style={{color: "green"}}></i> Delivery</p>
                </div>
                <br/>
                <hr />
                <h4> Review Hightlights</h4>
                <br />
                <p>"My all time favorite might have might have to be a jalapeño bagel or a pesto bagel with veggie cream cheese!"</p>
                <p>"This location is conveniently located next to SJSU and will definitely eat stopping by here in between classes."</p>
                {/* <p> Italian restaurant that is commited to good food and services. Checkout our webpage for more information about the dishes.</p> */}
            </div>
            <div class="col-xs-8" class="float-right" style={{marginLeft:"300px", marginTop: "20px"}}>
                <p>
                <i class='fas fa-phone'></i> (408) 294-6615</p>
                <hr />
                <p>
                <i class='fas fa-envelope'></i>  houseofbagels@gmaill.com</p>
                <hr/>
                <a href='/updateRestaurant'>
                    <span>
                        <i class='fas fa-id-card'></i></span> Update your profile 
                </a>
                <hr />
                <a href='/updateDish'>
                <span>
                <i class="far fa-plus-square"></i></span> Add/Edit dishes</a>
            </div>
            </div>
        </React.Fragment>
      );
    }
  }

  export default RestaurantPage;