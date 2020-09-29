import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import CustomerSignup from './SignUp/customerSignup';
import RestaurantSignup from './SignUp/restaurantSignup';
import Navigationbar from './navigation';
import userProfile from './user/profile';
import BasicDetails from './user/profileUpdate';
import RestaurantPage from './restaurant/restaurantLanding';
import updateRest from './restaurant/updateRestaurant';
import updateDishes from './restaurant/addDishes';
import viewDish from './restaurant/viewDishes';
import dishList from './restaurant/viewDishList';
import viewEvents from './restaurant/events';
import addEvent from './restaurant/addEvents';
import HomePage from './home';


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/customerSignup" component={CustomerSignup}/>
                <Route exact path="/restaurantSignup" component={RestaurantSignup}/>
                <Route exact path="/navigation" component={Navigationbar}/>
                <Route exact path="/userProfile" component={userProfile}/>
                <Route exact path="/update" component={BasicDetails}/>
                <Route exact path="/restaurant" component={RestaurantPage}/>
                <Route exact path="/updateRestaurant" component={updateRest}/>
                <Route exact path="/addDish" component={updateDishes}/>
                <Route exact path="/viewDish" component={viewDish}/>
                <Route exact path="/dishList" component={dishList}/>
                <Route exact path="/events" component={viewEvents}/>
                <Route exact path="/addEvent" component={addEvent}/>
            </div>
        )
    }
}
export default Main;