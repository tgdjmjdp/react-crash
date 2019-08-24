import axios from 'axios';
import { setAlert } from './action-alert';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, ACCOUNT_DELETED, CLEAR_PROFILE } from './action-types';

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
                msg: error.reponse,
                status: error.status
            }
        });

    }
}

export const deleteExperience = id => async dispatch => {
    try {

        console.log('====================================');
        console.log(id);
        console.log('====================================');

        const res = await axios.delete('/api/profile/experience/' + id);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(
            setAlert('ລົບປະຫວັດການທຳງານສຳເລັດ', 'success')
        );

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse,
                status: error.reponse.text
            }
        });
    }
}

export const deleteEducation = id => async dispatch => {
    try {

        const res = await axios.delete('/api/profile/education/' + id);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(
            setAlert('ລົບປະຫວັດການສຶກສາສຳເລັດ', 'success')
        );

    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {
                msg: error.reponse,
                status: error.reponse.text
            }
        });
    }
}

export const deleteAccount = () => async dispatch => {

    if (window.confirm(
        'ກະລຸນາຢືນຢັນການລົບຂໍ້ມູນຜູ້ໃຊ້ງານ, ເມື່ອຢືນຢັນແລ້ວຈະບໍ່ສາມາດແກ້ໄຂໄດ້ພາຍຫຼັງ'
    )) {
        try {
            await axios.delete('/api/profile');

            dispatch({
                type: CLEAR_PROFILE
            });

            dispatch({
                type: ACCOUNT_DELETED
            });

            dispatch(
                setAlert('ລົບບັນຊືຜູ້ໃຊ້ງານສຳເລັດ', 'success')
            );

        } catch (error) {
            dispatch({
                type: PROFILE_ERROR,
                payload: {
                    msg: error.reponse,
                    status: error.reponse.text
                }
            });
        }
    }

}
