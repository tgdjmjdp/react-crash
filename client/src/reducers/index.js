import { combineReducers } from 'redux';
import alert from './reducer-alert';
import auth from './reducer-auth'; 
import profile from './reducer-profile';
import post from './reducer-post';
export default combineReducers({
    auth,
    alert,
    profile,
    post
});