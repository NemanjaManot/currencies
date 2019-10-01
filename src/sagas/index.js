import { all } from 'redux-saga/effects';
/* Sagas */
import loginSaga from '../screens/Login/loginSaga';

export default function* rootSaga() {
    yield all([
        loginSaga()
    ])
}
