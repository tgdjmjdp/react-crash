import { combineReducers } from 'redux';
import alert from './reducer-alert';
import auth from './reducer-auth'; 

export default combineReducers({
    auth,
    alert
});