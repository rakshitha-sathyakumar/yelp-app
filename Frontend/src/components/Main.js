import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';


class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
            </div>
        )
    }
}
export default Main;