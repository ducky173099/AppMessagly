import {
    LOGIN_ACTION,
    LOGIN_ACTION_SUCCESS,
    LOGIN_ACTION_ERROR,
    SIGNUP_ACTION,
    SINGUP_ACTION_ERROR,
    SINGUP_ACTION_SUCCESS
} from './ActionTypes';
import {put} from 'redux-saga';


export const loginAction = user => {
    return {
        type: LOGIN_ACTION,
        user
    }
};

export const loginSuccessAction = user => {
    return{
        type: LOGIN_ACTION_SUCCESS,
        user
    }
};

export const loginErrorAction = message => {
    return{
        type: LOGIN_ACTION_ERROR,
        message
    }
};

export const signupAction = user => {
    return {
        type: SIGNUP_ACTION,
        user
    }
};

export const signupSuccessAction = user => {
    return{
        type: SINGUP_ACTION_SUCCESS,
        user
    }
};

export const signupErrorAction = message => {
    return{
        type: SINGUP_ACTION_ERROR,
        message
    }
};