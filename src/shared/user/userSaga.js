import { takeEvery, put } from 'redux-saga/effects';
/* Services */
import NavigationService from '../../services/navigationService';
import UserService from '../../services/userService';
import AsyncStorageService from '../../services/asyncStorageService';
/* Types */
import { USER } from './userActionTypes';
import { MARKET } from '../../screens/Market/marketActionTypes';

export function* getUserInfo() {
    const userResponse = yield UserService.getLoggedUserInfo();
    if (userResponse.data) {
        yield put({
            type: USER.SET_INFO,
            user: userResponse.data,
            userId: userResponse.data.userInfo.userId
        });

        // call market symbols
        yield put({
            type: MARKET.GET_MARKET_SYMBOLS,
            userId: userResponse.data.userInfo.userId
        });

        // call user accounts
        const userAccounts = yield UserService.getUserAccounts(userResponse.data.userInfo.userId);
        if (userAccounts.data) {
            const userAccount = userAccounts.data[0];
            yield put({
                type: USER.SET_USER_ACCOUNTS,
                userAccount
            });

            // call watchlist
            if (userAccount && userAccount.id) {
                yield put({
                    type: MARKET.GET_WATCHLIST,
                    userAccountId: userAccount.id
                });
            }

        }
    } else {
        yield AsyncStorageService.clearTokens();
        NavigationService.navigate('Login');
    }
}

export default function* userSaga() {
    yield takeEvery(USER.GET_INFO, getUserInfo);
}
