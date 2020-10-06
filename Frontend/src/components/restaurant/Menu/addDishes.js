import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
//import profilepic from '../../images/download.png'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios';
import backendServer from "../../../backendServer";

class updateDishes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish_name: "",
      ingredients: "",
      price: "",
      description: "",
      category: ""
    };
    this.onChange = this.onChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleRadio = (e) => {
  this.setState({
    category: e.target.name
  });
}

onSubmit = (e) => {
  e.preventDefault();
  const data = {
    rest_id: localStorage.getItem("rest_id"),
    dish_name: this.state.dish_name,
    ingredients: this.state.ingredients,
    price: this.state.price,
    description: this.state.description,
    category: this.state.category
  }
  return axios.post(`${backendServer}/yelp/addDish`,data)
  .then((response) => {
    if (response.status === 'DISH_ADDED') {
      alert("Dish added")
    }
  })
  .catch(function(error) {
     alert("Error")
  })
}
    render() {
      return (
        <React.Fragment>
          <Navigationbar />
          <div class='container'>
            <div class='row'>
              <div class='col-md-6' style={{ marginBottom: '5%' }}>
                <h3 style={{ margin: "15px, 0px", color: 'red', float: 'left' }}>Add dishes</h3>
                <br />
                <hr class='mb-3'></hr>
                <Form onSubmit={this.onSubmit}>
                <Form.Group controlId='firstName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Name</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange} name="dish_name" type='text' />
                </Form.Group>
                <Form.Group controlId='lastName'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Main Ingredients</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange}  name="ingredients" type='text' />
                </Form.Group>
                <Form.Group controlId='contact'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Dish Price</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange}  name="price" type='text' />
                </Form.Group>
                <Form.Group controlId='email'>
                  <Form.Label style={{margin: "0px", padding: "0px"}}>
                    <strong>Description</strong>
                  </Form.Label>
                  <Form.Text style={{margin: "0px", padding: "0px"}} className='text-muted'>
                    This field is required.
                  </Form.Text>
                  <Form.Control onChange={this.onChange} name="description" type='text' />
                </Form.Group>
                <Form.Group controlId='gender'>
                    <Form.Label style={{margin: "0px", padding: "0px"}}>
                        <strong>Category</strong>
                    </Form.Label><br />
                    <Form.Check 
                    name="appetizer" onChange={this.handleRadio} label="Appetizer" />
                    <Form.Check 
                    name="salads" onChange={this.handleRadio} label="Salads" />
                    <Form.Check 
                    name="mainCourse" onChange={this.handleRadio} label="Main Course" />
                    <Form.Check 
                    name="desserts" onChange={this.handleRadio} label="Desserts" />
                    <Form.Check 
                    name="beverages" onChange={this.handleRadio} label="Beverages" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        <strong>Add Dish photo</strong>
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

  export default updateDishes;