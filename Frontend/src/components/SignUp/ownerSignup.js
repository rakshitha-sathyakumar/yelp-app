import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { customerSignup } from '../../actions/signupActions'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import YelpImage from './../images/yelp_logo.jpg'

class OwnerSignup extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    // onChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }


    // onSubmit = (e) => {
    //     //prevent page from refresh
    //     e.preventDefault();
    //     const data = {
    //         name: this.state.name,
    //         email_id: this.state.email_id,
    //         password: this.state.password,
    //         address: this.state.address,
    //         phone_number: this.state.phone_number
    //     }

    //     this.props.customerSignup(data);

    //     this.setState({
    //         signupFlag: 1
    //     });
    // }

    render() {
        //redirect based on successful signup
        let redirectVar = null;
        let message = "";
        if (localStorage.getItem("user_id")) {
            redirectVar = <Redirect to="/Home" />
        }
        else if (this.props.user === "USER_ADDED" && this.state.signupFlag) {
            alert("You have registered successfully");
            redirectVar = <Redirect to="/Login" />
        }
        else if(this.props.user === "USER_EXISTS" && this.state.signupFlag){
            message = "Email id is already registered"
        }
        return (
            <div>
                {redirectVar}
                        <div>
                        <center>
                            <img src={YelpImage} style={{ height: 'fit-content' }} alt='yelp' />
                        </center>
                        </div>
                        <div class="container">
                            <div class="login-form">
                                <div class="main-div">
                                    <div class="panel">
                                    <center>
                                        <h2 style={{color: "red"}}>Sign Up as restauranteur for Yelp account</h2>
                                    </center>
                                        <hr/>
                                    </div>
                                    <form onSubmit={this.onSubmit}>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="name" onChange={this.onChange} placeholder="Name" pattern="^[A-Za-z0-9 ]+$" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email_id" onChange={this.onChange} placeholder="Email Id" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$'%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$" title="Please enter valid email address" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" onChange={this.onChange} placeholder="Password" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="password" onChange={this.onChange} placeholder="Address" required />
                                        </div>
                                        <div class="d-inline-flex form-group">
                                            <input style={{width: "300px"}}type="text" class="form-control" name="password" onChange={this.onChange} placeholder="zipcode" required />
                                        </div>
                                        <div style={{ color: "#ff0000" }}>{message}</div>
                                        <button style ={{width: "200px"}}type="submit" class="btn btn-danger">Sign Up</button><br /><br />
                                        <div>Already have an account? <Link to='/login'>Login</Link></div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

// CustomerSignup.propTypes = {
//     customerSignup: PropTypes.func.isRequired,
//     user: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     user: state.signup.user
// });

export default OwnerSignup;
//export default connect(mapStateToProps, { customerSignup })(CustomerSignup);