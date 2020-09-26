import { GET_USER, UPDATE_USER } from '../actions/types';

 const initialState = {
     user: {}
 };

 export default function(state = initialState, action){
    console.log(action)
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
 };