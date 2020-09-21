import React, { Component } from 'react';
import Navigationbar from '../navigation';
import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
// import { connect } from 'react-redux';
// import { customerSignup } from '../../actions/signupActions'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { UserProfileNavBar, UserProfileJumbo, NavList, Form, Button, MDBInput} from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';

class BasicDetails extends Component {
    state = {};
    render() {
      return (
        <React.Fragment>
          <Navigationbar />
        <div class="row">
          <div class='col-xs-3' style={{ marginLeft: "20px"}}>
                    <p style={{ marginLeft: "10px", marginTop: "10px", fontWeight: "bold"}}> Rakshitha's Profile</p>
                    <hr />
                    <ul class="list-unstyled">
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Profile Overview
                            </a>
                        </li>
                        <hr/>
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Messages
                            </a>
                        </li>
                        <hr/>
                        <li style={{margin: "10px"}}>
                            <a href="#">
                                Settings
                            </a>
                        </li>
                    </ul>
            </div>
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Profile</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form.Group controlId='firstName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong >First Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Last Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='gender'>
                    <Form.Label style={{margin: "0px", padding: "0px"}}>
                        <strong>Gender</strong>
                    </Form.Label><br />
                    <label> <input type="radio" value="option1" /> Female </label> <br />
                    <label> <input type="radio" value="option1" /> Male </label>
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Contact number</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='dob'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Date Of Birth</strong>
                  </Form.Label>
                  <Form.Control
                    type='date'
                    name='dob'
                    placeholder='Date of Birth'
                  />
                </Form.Group>
                <Form.Group controlId='nickName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Nick Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    The Boss, Calamity Jane, The Prolific Reviewer
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='yelpingSince'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Things I love...</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  Comma separated phrases (e.g. sushi, Radiohead, puppies)
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='notYelping'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>When I am not yelping...</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  I’m missing out, I’m working at the art gallery, I’m probably at the movies
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='headline'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Your Headline</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    Taco Tuesday Aficionado, The Globetrotting Reviewer
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='blob'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong> My blob or Website</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  www.example.com/myawesomeblog
                  </Form.Text>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='city'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>City</strong>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='state'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>State</strong>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='country'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Country</strong>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Form.Group controlId='zipcode'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Zipcode</strong>
                  </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
                <Button href='/userProfile' variant='danger' type='submit'>
                  Save Changes
                </Button>
                <a href='/userProfile' style={{ marginLeft: '15px' }}>
                  Cancel
                </a>
              </div>
            </div>
          </div>
          </div>
        </React.Fragment>
      );
    }
  }

  export default BasicDetails;