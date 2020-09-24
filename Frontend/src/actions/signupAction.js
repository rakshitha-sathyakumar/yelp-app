import { USER_SIGNUP, RESTAURANT_SIGNUP } from "./types";
import axios from "axios";

export const customerSignup = (userData) => dispatch => {
    axios.defaults.withCredentials = true;
    axios.post(`http://localhost:3001/yelp/customerSignUp`, userData)
        .then(response => dispatch({
            type: USER_SIGNUP,
            payload: response.data
        }))
        .catch(error => {
            if (error.response && error.response.data) {
                return dispatch({
                    type: USER_SIGNUP,
                    payload: error.response.data
                });
            }
            return;
        });
}

export const restaurantSignup = (restaurantData) => dispatch => {
    axios.defaults.withCredentials = true;
    axios.post(`http://localhost:3001/yelp/restSignUp`, restaurantData)
        .then(response => dispatch({
            type: RESTAURANT_SIGNUP,
            payload: response.data
        }))
        .catch(error => {
            if (error.response && error.response.data) {
                return dispatch({
                    type: RESTAURANT_SIGNUP,
                    payload: error.response.data
                });
            }
            return;
        });
}