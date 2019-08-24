import axios from 'axios';

import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_OK,
    LOGOUT,
    CLEAR_PROFILE
} from './action-types';

import { setAlert } from './action-alert';
import setAuthToken, { } from '../utils/setAuthToken';

export const register = ({
    name, email, password
}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'Application/json'
        }
    }

    const body = JSON.stringify({ name, email, password });

    try {
        const res = await axios.post('/api/user/create', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.reponse;

        if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
            console.log('====================================');
            console.log(errors);
            console.log('====================================');
        }
        dispatch({
            type: REGISTER_FAIL
        });
    }
}

export const loadUser = () => async dispatch => {

    if (localStorage.token) {
        setAuthToken(localStorage.token);
        console.log("has token");

    } else {
        console.log('====================================');
        console.log("no token");
        console.log('====================================');
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });

    } catch (err) {
        console.log("cant get auth");

        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const login = ({ email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'Application/json'
        }
    }

    console.log('====================================');
    console.log(email);
    console.log('====================================');

    const body = JSON.stringify({ email, password });

    try {

        const res = await axios.post('/api/auth/', body, config);

        dispatch({
            type: LOGIN_OK,
            payload: res.data
        });

        dispatch(loadUser());

    } catch (error) {

        const errors = error.reponse;

        if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
        }
        dispatch({
            type: LOGIN_FAIL
        });
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
    const clear = dispatch({ type: CLEAR_PROFILE });
    if (clear){
        console.log('====================================');
        console.log("CLEAR PROFILE");
        console.log('====================================');
    }
}