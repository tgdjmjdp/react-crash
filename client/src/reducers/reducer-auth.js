import {
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_OK,
    LOGOUT
} from '../actions/action-types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    loading: true,
    user: null
}

export default function (state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                ...payload,
                isAuthenicated: true,
                loading: false,
                user: payload
            }

        case REGISTER_SUCCESS:
        case LOGIN_OK:
            /* case LOGIN_SUCCESS: */
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenicated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenicated: false,
                loading: false
            }
        default:
            return state;

    }
}