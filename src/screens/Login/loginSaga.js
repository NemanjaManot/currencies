import { takeEvery, put } from 'redux-saga/effects';
/* Action types */
import { LOGIN } from './loginActionTypes';

export function* tryUserLogin(action) {
    console.log(action);
}

export default function* loginSaga() {
    yield takeEvery(LOGIN.TRY_LOGIN, tryUserLogin);
}
