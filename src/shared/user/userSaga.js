import { takeEvery, put, select, all } from 'redux-saga/effects';
/* Services */
import UserService from '../../services/userService';
/* Types */
import { USER } from './userActionTypes';

export function* getUserInfo() {
    let user = yield UserService.getLoggedUserInfo();
    if (user) {
        yield all([
            put({
                type: USER.SET_INFO,
                user
            }),
        ]);

    } else {
        // todo LOGOUT AND MOVE TO LOGIN SCREEN
    }
}

export default function* userSaga() {
    yield takeEvery(USER.GET_INFO, getUserInfo);
}
