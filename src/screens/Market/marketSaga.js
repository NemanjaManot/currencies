import { takeEvery, put, all } from 'redux-saga/effects';
/* Action types */
import { MARKET } from './marketActionTypes';
/* Services */
import MarketService from '../../services/marketService';
import NavigationService from '../../services/navigationService';

export function* getSymbols(action) {
    const response = yield MarketService.getSymbols(action.userId);

    if (response.data) {
        yield put({
            type: MARKET.SET_MARKET_SYMBOLS,
            symbols: response.data
        });
    }
}

export function* getWatchlist(action) {
    const response = yield MarketService.getWatchlist(action.userAccountId);

    if (response.data) {
        yield put({
            type: MARKET.SET_WATCHLIST,
            watchList: response.data
        });
    }
}

export function* getSingleSymbol(action) {
    const response = yield MarketService.getSingleSymbol(action.userId, action.symbolId);
    if (response.data) {
        yield all([
            put({
                type: MARKET.SET_SINGLE_SYMBOL,
                singleSymbol: response.data
            }),
            put({
                type: MARKET.GET_NEWS,
                offset: 0
            })
        ]);

        yield NavigationService.navigate('SingleSymbol', { params: response.data.displayName });
    }
}

export function* getNews(action) {
    const response = yield MarketService.getNews(5, action.offset);

    if (response.data) {
        const isAllNewsFetched = !response.data.next;
        yield put({
            type: MARKET.SET_NEWS,
            news: response.data.results,
            isAllNewsFetched
        });
    }
}

export function* toggleWatchlist(action) {
    const response = yield MarketService.toggleWatchlist(action.accountId, action.symbolId, action.isFollowing);

    if (response.data) {
        yield put({
            type: MARKET.TOGGLE_WATCHLIST_SUCCESS,
            toggledItem: response.data,
            isFollowing: action.isFollowing
        });
    }
}

export default function* marketSaga() {
    yield takeEvery(MARKET.GET_MARKET_SYMBOLS, getSymbols);
    yield takeEvery(MARKET.GET_WATCHLIST, getWatchlist);
    yield takeEvery(MARKET.GET_SINGLE_SYMBOL, getSingleSymbol);
    yield takeEvery(MARKET.TOGGLE_WATCHLIST, toggleWatchlist);
    yield takeEvery(MARKET.GET_NEWS, getNews);
}
