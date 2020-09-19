import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CustomerSignup from './SignUp/customerSignup';
import RestaurantSignup from './SignUp/restaurantSignup';
import Navigationbar from './navigation';
//import Restaurant from './Restaurant/restaurant';


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/customerSignup" component={CustomerSignup}/>
                <Route exact path="/restaurantSignup" component={RestaurantSignup}/>
                <Route exact path="/navigation" component={Navigationbar}/>>
                {/* <Route exact path="/restaurant" component={Restaurant}/> */}
            </div>
        )
    }
}
export default Main;