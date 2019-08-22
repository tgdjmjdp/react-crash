import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR } from './action-types';
import { setAlert } from './action-alert';
import { } from '../utils/setAuthToken';

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

    } catch (error) {

        const errors = error.reponse;

        if(errors){
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

}

