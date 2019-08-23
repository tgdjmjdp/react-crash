import axios from 'axios';
import { setAert } from './action-alert';
import { GET_PROFILE, PROFILE_ERROR } from './action-types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/ku');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse,
                status: error.status
            }
        });
    }
}


