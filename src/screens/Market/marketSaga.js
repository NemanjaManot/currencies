import { takeEvery, select, put, all } from 'redux-saga/effects';
/* Action types */
import { MARKET } from './marketActionTypes';
/* Services */
import MarketService from '../../services/marketService';

export function* getSymbols(action) {
    const response = yield MarketService.getSymbols(action.userId);

    if (response.data) {
        yield put({
            type: MARKET.SET_MARKET_SYMBOLS,
            symbols: response.data
        })
    }
}

export function* getWatchlist(action) {
    const response = yield MarketService.getWatchlist(action.userAccountId);

    if (response.data) {
        yield put({
            type: MARKET.SET_WATCHLIST,
            watchList: response.data
        })
    }
}

export function* getSingleSymbol(action) {
    const response = yield MarketService.getSingleSymbol(action.userId, action.symbolId);
    const chartData = yield MarketService.getChartData(action.userId, action.symbolId);

    if (response.data) {
        yield put({
            type: MARKET.SET_SINGLE_SYMBOL,
            singleSymbol: response.data
        })
    }

    if (chartData.data) {
        yield put({
            type: MARKET.SET_CHART_DATA,
            chartData: chartData.data
        })
    }
}

export default function* marketSaga() {
    yield takeEvery(MARKET.GET_MARKET_SYMBOLS, getSymbols);
    yield takeEvery(MARKET.GET_WATCHLIST, getWatchlist);
    yield takeEvery(MARKET.GET_SINGLE_SYMBOL, getSingleSymbol);
}
