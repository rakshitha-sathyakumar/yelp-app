import { combineReducers } from 'redux';
import userProfileReducer from './userProfileReducer';
// import ownerProfileReducer from './ownerProfileReducer'
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

export default combineReducers({
    login: loginReducer,
    signup: signupReducer,
    userProfile: userProfileReducer
    // ownerProfile: ownerProfileReducer
});