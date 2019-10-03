import { takeEvery, put } from 'redux-saga/effects';
/* Services */
import NavigationService from '../../services/navigationService';
import UserService from '../../services/userService';
import AsyncStorageService from '../../services/asyncStorageService';
/* Types */
import { USER } from './userActionTypes';
import { MARKET } from '../../screens/Market/marketActionTypes';

export function* getUserInfo() {
    const user = yield UserService.getLoggedUserInfo();
    if (user.response) {
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
        if (userAccounts.response) {
            yield put({
                type: USER.SET_USER_ACCOUNTS,
                userAccount: userAccounts.response.data[0]
            });
        }
    } else {
        yield AsyncStorageService.clearTokens();
        NavigationService.navigate('Login');
    }
}

export default function* userSaga() {
    yield takeEvery(USER.GET_INFO, getUserInfo);
}
