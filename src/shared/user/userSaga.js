import { takeEvery, put } from 'redux-saga/effects';
/* Services */
import UserService from '../../services/userService';
/* Types */
import { USER } from './userActionTypes';
import { MARKET } from '../../screens/Market/marketActionTypes';

export function* getUserInfo() {
    let user = yield UserService.getLoggedUserInfo();
    if (user.response.data) {
        yield put({
            type: USER.SET_INFO,
            user: user.response.data,
            userId: user.response.data.userInfo.userId
        });

        // call market symbols
        yield put({
            type: MARKET.GET_MARKET_SYMBOLS,
            userId: user.response.data.userInfo.userId
        });

        // call user accounts
        const userAccounts = yield UserService.getUserAccounts(user.response.data.userInfo.userId);
        if (userAccounts.response.data) {
            yield put({
                type: USER.SET_USER_ACCOUNTS,
                userAccount: userAccounts.response.data[0]
            });
        }
    } else {
        // todo LOGOUT AND MOVE TO LOGIN SCREEN
    }
}

export default function* userSaga() {
    yield takeEvery(USER.GET_INFO, getUserInfo);
}
