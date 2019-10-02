import { takeEvery, put, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
/* Action types */
import { LOGIN } from './loginActionTypes';
/* Services */
import LoginService from '../../services/loginService';

export function* tryUserLogin(action) {
    console.log(action);
    yield put(NavigationActions.navigate({
        routeName: 'App'
    }));
}

export default function* loginSaga() {
    yield takeEvery(LOGIN.TRY_LOGIN, tryUserLogin);
}
