import {
    Alert
} from 'react-native';
import {
    LOGIN_ACTION,
    SIGNUP_ACTION
} from '../actions/ActionTypes';

import {
    loginAction,
    loginSuccessAction,
    signupSuccessAction
} from '../actions/AuthAction';
import {put, takeLatest} from 'redux-saga/effects';
import qs from 'qs';

const DataLogin = {
    mobilePhone: '123',
    password: '123'
};

export function* watchLoginAction(){
    yield takeLatest(LOGIN_ACTION, login);
};

export function* watchSignupAction(){
    yield takeLatest(SIGNUP_ACTION, signup);
};



function* login (action) {
    try {
        const param = {
            MobilePhone: action.user.mobilePhone,
            Password: action.user.password,
        };

        console.log('param Login  : ', param);
        // console.log('DataLogin  : ', DataLogin);
        if(param.MobilePhone == DataLogin.mobilePhone && param.Password == DataLogin.password){
            yield put(loginSuccessAction(param));
        }
    } catch (error) {
        
    }
};

function* signup (action) {
    try {
        const valueOTP = Math.floor(1000 + Math.random() * 9000);
        // console.log(valueOTP);
        const param = {
            Username: action.user.userName,
            Mobilephone: action.user.mobilePhone,
            ValueOTP: valueOTP
        };
        console.log('param signup  : ', param);

        yield put(signupSuccessAction(param));
    } catch (error) {
        
    }
};