import axios from 'axios';
import { setAlert } from './action-alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './action-types';

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

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(
            setAlert(edit ? 'ສຳເລັດ' : 'ສ້າງໂປຣໄຟລ໌ໃໝ່ສຳເລັດ', 'success')
        );

        if (!edit) {
            history.push('/dashboard');
        }
    } catch (error) {
        const errors = error.reponse;

        if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse.text,
                status: error.status
            }
        });

    }
}

export const addExperience = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.put('api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(
            setAlert('ເພີ່ມປະວົບການການທຳງານສຳເລັດ', 'success')
        );

        history.push('/dashboard');

    } catch (error) {
        const errors = error.reponse;

        if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse.text,
                status: error.status
            }
        });

    }
}

export const addEducation = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.put('api/profile/education', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(
            setAlert('ເພີ່ມການສຶກສາສຳເລັດ', 'success')
        );

        history.push('/dashboard');

    } catch (error) {
        const errors = error.reponse;

        if (errors) {
            errors.forEach(
                errors => dispatch(setAlert(errors.msg, 'danger'))
            );
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse.text,
                status: error.status
            }
        });

    }
}

