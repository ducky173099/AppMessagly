import {all} from 'redux-saga/effects';

import {
    watchLoginAction,
    watchSignupAction
} from './AuthSaga';

export default function* rootSaga() {
    yield all([
        watchLoginAction(),
        watchSignupAction()
    ]);
}
