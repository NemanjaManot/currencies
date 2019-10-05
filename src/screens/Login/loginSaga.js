import { takeEvery, put } from 'redux-saga/effects';
/* Action types */
import { LOGIN } from './loginActionTypes';
import { USER } from '../../shared/user/userActionTypes';
/* Services */
import NavigationService from '../../services/navigationService';
import LoginService from '../../services/loginService';
import AsyncStorageService from '../../services/asyncStorageService';

function* isLoginLoading(isLoginLoading) {
    yield put({
        type: LOGIN.LOADING,
        isLoginLoading
    });
}

export function* tryUserLogin(action) {
    yield isLoginLoading(true);

    const params = {
        email: action.loginParams.email,
        password: action.loginParams.password
    };
    const response = yield LoginService.loginUser(params.email, params.password);

    if (response) {
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
        yield isLoginLoading(false);
    }
}

export default function* loginSaga() {
    yield takeEvery(LOGIN.TRY_LOGIN, tryUserLogin);
}
