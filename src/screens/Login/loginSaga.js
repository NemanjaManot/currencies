import { takeEvery, put, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
/* Action types */
import { LOGIN } from './loginActionTypes';
/* Services */
import NavigationService from '../../services/navigationService';
import LoginService from '../../services/loginService';

export function* tryUserLogin(action) {
    const params = {
        email: action.loginParams.email,
        password: action.loginParams.password
    };
    let response;
    response = yield LoginService.loginUser(params.email, params.password);
    if (response.response) {
        NavigationService.navigate('App');
    } else {
        console.log(response)
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN.TRY_LOGIN, tryUserLogin);
}
