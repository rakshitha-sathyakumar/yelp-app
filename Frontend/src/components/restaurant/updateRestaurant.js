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
    street: e.target.street.value,
    city: e.target.city.value,
    zipcode: e.target.zipcode.value,
    email: e.target.email.value,
    contact_info: e.target.contact_info.value,
    timings: e.target.timings.value,
    cuisine: e.target.cuisine.value,
    delivery_method: e.target.delivery.value
  }
  console.log(data);
  this.props.updateRest(data);
};
    render() {
      return (
        <React.Fragment>
          <Navigationbar />
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <br />
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Restaurant Profile</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form onSubmit ={this.handleUpdate}>
                <Form.Group controlId='name'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong >Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="name" onChange={this.onChange} defaultValue={this.props.user.name} type='text' />
                </Form.Group>
                <Form.Group controlId='street'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Street</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="street" onChange={this.onChange} defaultValue={this.props.user.street} type='text' />
                </Form.Group>
                <Form.Group controlId='city'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>City</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="city" onChange={this.onChange} defaultValue={this.props.user.city} type='text' />
                </Form.Group>
                <Form.Group controlId='zipcode'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Zipcode</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control name="zipcode" onChange={this.onChange} defaultValue={this.props.user.zipcode} type='text' />
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
                <Form.Group controlId='cuisine'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Cuisine</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="cuisine" onChange={this.onChange} defaultValue={this.props.user.cuisine}type='text' />
                </Form.Group>
                <Form.Group controlId='delivery'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Delivery method</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                  This field is required.
                  </Form.Text>
                  <Form.Control name="delivery" onChange={this.onChange} defaultValue={this.props.user.delivery_method}type='text' />
                </Form.Group>
                <Form.Group></Form.Group>
                <Form.Group>
                    <Form.Label>
                        <strong>Add a photo</strong>
                    </Form.Label>
                    <Form.File id="exampleFormControlFile1"/>
                </Form.Group>
                <Button style={{backgroundColor: "red", border: "1px solid red"}} type='submit'>
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