import React, { Component } from 'react';
import Navigationbar from '../../navigation';
// import userProfile from './profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import backgroundImage from '../images/menuCard.jpg';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Form, Button, Card, CardGroup} from 'react-bootstrap';
import axios from 'axios';

class Appetizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appetizerList: []
        };
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/yelp/viewMenu/appetizer/${localStorage.getItem("rest_id")}`)
        .then(res => {
            this.setState({ appetizerList: res.data });  
            console.log(this.state.appetizerList); 
        })
    }

      render () {
          let renderMenu = []

          if (this.state && this.state.appetizerList && this.state.appetizerList.length>0) {
              for (var i=0; i<this.state.appetizerList.length; i++) {
                  renderMenu.push(
                      <Card>
                          <Card.title>
                              {this.state.appetizerList[i].dish_name}
                          </Card.title>
                      </Card>
                  );
                }
            }
            return(
                <div>
                    {renderMenu}
                </div>
            )

        }
         
    }
export default Appetizer;