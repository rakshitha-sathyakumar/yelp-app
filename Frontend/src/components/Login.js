import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { userLogin } from '../actions/loginAction'
import yelpLoginImage from './images/yelp_logo.jpg';
import { Row, Col } from 'react-bootstrap';

class Login extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //maintain the state required for this component
        this.state = {};
    }

    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // //submit Login handler to send a request to the node backend
    // onSubmit = (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email_id: this.state.email_id,
    //         password: this.state.password
    //     }

    //     this.props.userLogin(data);

    //     this.setState({
    //         loginFlag: 1
    //     });
    // }

    render() {
        // console.log(this.props);
        // let redirectVar = null;
        // let message = ""
        // if(this.props.user && this.props.user.user_id){
        //     localStorage.setItem("email_id", this.props.user.email_id);
        //     localStorage.setItem("is_owner", this.props.user.is_owner);
        //     localStorage.setItem("user_id", this.props.user.user_id);
        //     localStorage.setItem("name", this.props.user.name);
        //     redirectVar = <Redirect to="/home" />
        // }
        // else if(this.props.user === "NO_USER" && this.state.loginFlag){
        //     message = "No user with this email id";
        // }
        // else if(this.props.user === "INCORRECT_PASSWORD" && this.state.loginFlag){
        //     message = "Incorrect Password";
        // }
        // console.log(this.props);
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
                                </center>
                                    <form>
                                        <div class='form-group'>
                                            <input type='text' class='form-control' id='inputEmail' placeholder='Email ID' pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter valid email address" required/>
                                        </div>
                                        <div class='form-group'>
                                            <input type='password' class='form-control' id='inputEmail' placeholder='password' required/>
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

export default Login;
// export default connect(mapStateToProps, { userLogin })(Login);