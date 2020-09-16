import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login}/>
            </div>
        )
    }
}
export default Main;