import axios from 'axios';
import { setAlert } from './action-alert';

import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './action-types'

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/post');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.status
            }
        })
    }
}

export const getPost = id => async dispatch => {
    try {
        const res = await axios.get('/api/post/' + id);

        dispatch({
            type: GET_POST,
            payload: res.data
        });

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.status
            }
        })
    }
}

export const addLikes = id => async dispatch => {
    try {
        const res = await axios.put('/api/post/like/' + id);

        if (res.status === 200 && res.data !== 400) {
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
            dispatch({
                type: UPDATE_LIKES,
                payload: {
                    id,
                    likes: res.data
                }
            });
        }

    } catch (error) {

        console.log('====================================');
        console.log("LIKED POST ERROR");
        console.log('====================================');

        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.status
            }
        })
    }
}

export const removeLikes = id => async dispatch => {
    try {
        const res = await axios.put('/api/post/unlike/' + id);

        if (res.status === 200 && res.data !== 400) {
            console.log('====================================');
            console.log(res.data);
            console.log('====================================');
            dispatch({
                type: UPDATE_LIKES,
                payload: {
                    id,
                    likes: res.data
                }
            });
        }

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.status
            }
        })
    }
}

export const deletePost = id => async dispatch => {
    try {
        await axios.delete('/api/post/' + id);

        dispatch({
            type: DELETE_POST,
            payload: id
        })

        dispatch(
            setAlert('Post REmoved', 'success')
        );

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.text
            }
        });
    }
}

export const addPost = formData => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/post/', formData, config);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })

        dispatch(
            setAlert('Post Created', 'success')
        );

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.text
            }
        });
    }
}

export const addComment = (postId, formData) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/post/comment/' + postId, formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })

        dispatch(
            setAlert('Comment Added', 'success')
        );

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.text
            }
        });
    }
}

export const deleteComment = (postId, commentId) => async dispatch => {

    try {
        const res = await axios.delete('/api/post/comment/' + postId + '/' + commentId);

        dispatch({
            type: REMOVE_COMMENT,
            payload: commentId
        })

        dispatch(
            setAlert('Comment Removed', 'success')
        );

    } catch (error) {
        dispatch({
            type: POST_ERROR,
            payload: {
                msg: error.response,
                status: error.text
            }
        });
    }
}