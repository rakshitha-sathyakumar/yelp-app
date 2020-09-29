import React, { Component } from 'react';
import Navigationbar from '../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import { getRest, updateRest } from '../../actions/restProfileActions';
import { connect } from 'react-redux';
import profilepic from './../images/download.png'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';

class updateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  
componentWillMount() {
  this.props.getRest();
  console.log(this.props)
}

onChange= (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleUpdate = (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    address: e.target.address.value,
    email: e.target.email.value,
    contact_info: e.target.contact_info.value,
    timings: e.target.timings.value
  }
  this.props.updateRest(data);
};
    render() {
      return (
        <React.Fragment>
          <Navigationbar />
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Restaurant Profile</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form onSubmit ={this.handleUpdate}>
                <Form.Group controlId='firstName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong >Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="name" onChange={this.onChange} defaultValue={this.props.user.name} type='text' />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Address</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="address" onChange={this.onChange} defaultValue={this.props.user.address} type='text' />
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Contact number</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="contact_info" onChange={this.onChange} defaultValue={this.props.user.contact_info} type='text' />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Email ID</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="email" onChange={this.onChange} defaultValue={this.props.user.email} type='text' />
                </Form.Group>
                <Form.Group controlId='nickName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Timings</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="timings" onChange={this.onChange} defaultValue={this.props.user.timings}type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <strong>Add a photo</strong>
                    </Form.Label>
                    <Form.File id="exampleFormControlFile1"/>
                </Form.Group>
                <Button variant='danger' type='submit'>
                  Save Changes
                </Button>
                <a href='/restaurant' style={{ marginLeft: '15px' }}>
                  Cancel
                </a>
                </Form>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  updateRestaurant.propTypes = {
    getRest: PropTypes.func.isRequired,
    updateRest: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }
  
  const mapStateToProps = state => { 
      return ({
      user: state.restProfile.user
  })};
  
  export default connect(mapStateToProps, { getRest, updateRest })(updateRestaurant);