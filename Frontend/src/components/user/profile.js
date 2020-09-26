import React, { Component } from 'react';
import Navigationbar from '../navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import profilepic from './../images/download.png'
import { connect } from 'react-redux';
import { getUser, updateUser } from '../../actions/userProfileAction';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Jumbotron, CardImg} from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'
import axios from 'axios';

class userProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        this.props.getUser();
        // console.log(this.props)
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUpdate = (e) => {
        //prevent page from refresh
        e.preventDefault();

        let data = Object.assign({}, this.state);
        this.props.updateUser(data);
    };


    render() {
        console.log("hi")
        console.log(this.props);
        return (
        <div style={{margin:"5px"}}>
            <Navigationbar />
            <div class='jumbotron'>
                    <div class='row'>
                        <div class='col-xs-3 card profilePic' style={{position:"absolute"}}>
                            <label for='profileImage'>
                                    <a class='btn btn-secondary btn-sm btn-rounded'>
                                        <i class='fas fa-camera'></i></a>
                            </label>
                            <input type='file' name='profileImage' id='profileImage' style={{ display: 'none' }} value='' onChange={this.changeProfileImage}></input>
                            <card>
                                <CardImg variant='top' src={profilepic} className='profileImg'/>
                            </card>
                        </div>
                        <div class='col-xs-4 profileName' style={{position: "relative", marginLeft: "250px"}}>
                            <h1>{this.props.user.first_name} {this.props.user.last_name}</h1>
                            <h6> "{this.props.user.headline}" </h6>
                            <p style={{fontSize:"13px"}}>{this.props.user.email}</p>
                            
                        </div>
                        
                        <div class='col-xs-4' style={{marginLeft: '300px'}}>
                            <ul class='list-unstyled'>
                                <li>
                                    <a href='#'>
                                        <span>
                                            <i class='fas fa-camera'></i>{' '}
                                        </span>
                                        Add Profile Photo
                                    </a>
                                </li>
                                <li>
                                    <a href='/update'>
                                        <span>
                                        <i class='fas fa-id-card'></i>{' '}
                                        </span>
                                        Update your profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div class='row' style={{ marginLeft:"10px"}}>
                <div class='col-xs-3' style={{ marginTop: "100px"}}>
                    {/* <p style={{ marginLeft: "10px",fontWeight: "bold"}}> Rakshitha Sathyakumar's Profile</p> */}
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
                <div class='col-xs-3' style={{marginLeft: "150px"}}>
                    <h3 style={{color:'red'}}> Basic Information</h3>
                    <hr />
                    <h5 style={{margin:"0px"}}> Contact Information</h5>
                    <p> {this.props.user.contactNo}</p>
                    <h5 style={{margin:"0px"}}> Gender </h5>
                    <p>{this.props.user.gender} </p>
                    <h5 style={{margin:"0px"}}> Address</h5>
                    <p> {this.props.user.address}</p>
                    <h5 style={{margin:"0px"}}> Birthday </h5>
                    <p> {this.props.user.dateofbirth}</p>
                </div>
                <div class='col-xs-12' style={{textAlign: "left", height: "100%", borderLeft: "1px solid #e6e6e6", marginLeft: "400px"}}>
                    <div style={{marginLeft: "10px"}}>
                        <h3 style={{color:'red'}}> About</h3>
                        <hr />
                        <h6 style={{margin:"0px"}}> Nickname </h6>
                        <p> {this.props.user.nickname}</p>
                        <h6 style={{margin:"0px"}}> Yelping since </h6>
                        <p> {this.props.user.yelpingsince}</p>
                        <h6 style={{margin:"0px"}}> When I am not yelping... </h6>
                        <p> {this.props.user.notyelping} </p>
                        <h6 style={{margin:"0px"}}> Things I love </h6>
                        <p> {this.props.user.thingsilove}</p>
                        <h6 style={{margin:"0px"}}> My Blog or Website</h6>
                        <p>{this.props.user.website}</p>
                    </div>
                </div>
                </div>
            </div>
    )}
}

userProfile.propTypes = {
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return ({
    user: state.userProfile.user
})};

export default connect(mapStateToProps, { getUser })(userProfile);

// export default userProfile;