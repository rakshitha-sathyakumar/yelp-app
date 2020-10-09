import { GET_RESTAURANT, UPDATE_RESTAURANT } from '../actions/types';

 const initialState = {
     user: {}
 };

 export default function(state = initialState, action) {
     console.log(action);
    switch(action.type){
        case GET_RESTAURANT:
            return {
                ...state,
                user: action.payload
            };
        case UPDATE_RESTAURANT:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
 };