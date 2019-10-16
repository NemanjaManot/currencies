import { all } from 'redux-saga/effects';
/* Sagas */
import loginSaga from '../screens/Login/loginSaga';
import userSaga from '../shared/user/userSaga';
import marketSaga from '../screens/Market/marketSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        userSaga(),
        marketSaga()
    ]);
};
