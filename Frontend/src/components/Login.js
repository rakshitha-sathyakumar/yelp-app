import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLogin } from '../actions/loginAction'
import yelpLoginImage from './images/yelp_logo.jpg';

class Login extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {};
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //submit Login handler to send a request to the node backend
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.userLogin(data);
        this.setState({
            loginFlag: 1
        });
        // return axios.post('http://localhost:3001/yelp/login',data)
        // .then((response) => {
        //     console.log(response);
        //     if (response.data.email && response.data.password) {
        //         console.log("Login successful")
        //     } 
        //     if (response.data === "NO_USER") {
        //         console.log("Enter a valid email")
        //     } 
        //     if(response.data === "INCORRECT_PASSWORD")
        //     {
        //         console.log("Enter the right password")
        //     }
        //    })
        // .catch(function(error) {
        //     window.location = "/create"
        // })
    }
    render() {
        console.log(this.props);
        let redirectVar = null;
        let message = ""
        // if(this.props.user && this.props.user.user_id){
        //     localStorage.setItem("email_id", this.props.user.email_id);
        //     localStorage.setItem("is_owner", this.props.user.is_owner);
        //     localStorage.setItem("user_id", this.props.user.user_id);
        //     localStorage.setItem("name", this.props.user.name);
        //     redirectVar = <Redirect to="/home" />
        // }
        if(this.props.user === "NO_USER" && this.state.loginFlag){
            message = "No user with this email id";
        }
        else if(this.props.user === "INCORRECT_PASSWORD" && this.state.loginFlag){
            message = "Incorrect Password";
        }
        console.log(this.props);
        return (
            <div class='container' style={{marginTop: "30px"}}>
                <div class='form-container'>
                <center>
                <img src={yelpLoginImage} style={{ height: 'fit-content' }} alt='Yelp' />
                </center>
                    <div class='container-fluid' style={{marginTop: "30px"}}>
                        <div class='row'>
                            <div class='col-md-4 col-sm-4 col-xs-12'></div>
                            <div class='col-md-4 col-sm-4 col-xs-12'>
                                <center>
                                    <h3 style={{color: "red", marginBottom: "20px"}}> Sign in to Yelp</h3>
                                    <div>New to Yelp? <Link to='/customerSignup'>Sign Up</Link></div>
                                    <div style={{padding: "5px"}}></div>
                                </center>
                                    <form onSubmit={this.onSubmit}>
                                        <div class='form-group'>
                                            <input type='text' onChange={this.onChange} name='email' class='form-control' id='inputEmail' placeholder='Email ID' pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter valid email address" required/>
                                        </div>
                                        <div class='form-group'>
                                            <input type='password' onChange={this.onChange} name='password' class='form-control' id='inputEmail' placeholder='password' required/>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input type='checkbox'/> Remember me
                                            </label>
                                        </div>
                                        <button type='submit' class='btn btn-danger btn-block' style={{marginTop:"10px"}}> Sign In </button>
                                    </form>
                                </div>
                                <div class='col-md-4 col-sm-4 col-xs-12'></div>
                        </div>
                    </div> 
            </div>  
        </div>
        )
    }
}

Login.propTypes = {
    userLogin: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => { 
    return ({
    user: state.login.user
})};

export default connect(mapStateToProps, { userLogin })(Login);