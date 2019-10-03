import { takeEvery, put, all } from 'redux-saga/effects';
/* Action types */
import { LOGIN } from './loginActionTypes';
import { USER } from '../../shared/user/userActionTypes';
/* Services */
import NavigationService from '../../services/navigationService';
import LoginService from '../../services/loginService';
import AsyncStorageService from '../../services/asyncStorageService';

export function* tryUserLogin(action) {
    const params = {
        email: action.loginParams.email,
        password: action.loginParams.password
    };
    let response;
    response = yield LoginService.loginUser(params.email, params.password);

    if (response.response) {
        yield AsyncStorageService.setAccessToken(response.response.data.accessToken);
        yield put({ type: USER.GET_INFO });
        NavigationService.navigate('App');
    } else {
        yield put({
            type: LOGIN.SET_ERROR_MESSAGE,
            errorMessage: response.error.response.data.message
        });
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN.TRY_LOGIN, tryUserLogin);
}
