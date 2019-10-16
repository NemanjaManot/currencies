import { MARKET } from './marketActionTypes';

const initialState = {
    symbols: null,
    watchList: null,
    singleSymbol: null,
    chartData: null,
    news: [],
    isAllNewsFetched: false
};

export default function marketReducer(state = initialState, action) {
    switch (action.type) {
        case MARKET.SET_MARKET_SYMBOLS:
            return {
                ...state,
                symbols: action.symbols
            };
        case MARKET.SET_WATCHLIST:
            return {
                ...state,
                watchList: action.watchList
            };
        case MARKET.SET_SINGLE_SYMBOL:
            return {
                ...state,
                singleSymbol: action.singleSymbol
            };
        case MARKET.SET_CHART_DATA:
            return {
                ...state,
                chartData: action.chartData
            };
        case MARKET.SET_NEWS:
            const news = state.news.slice().concat(action.news);
            return {
                ...state,
                news,
                isAllNewsFetched: action.isAllNewsFetched
            };
        case MARKET.RESET_NEWS:
            return {
                ...state,
                news: []
            };
        case MARKET.TOGGLE_WATCHLIST_SUCCESS:
            let updatedWatchList = [];
            if (action.isFollowing) {
                updatedWatchList = state.watchList.concat(action.toggledItem)
            } else {
                updatedWatchList = state.watchList.filter(item => {
                    return item.id !== action.toggledItem.id
                })
            }

            return {
                ...state,
                watchList: updatedWatchList
            };
        default:
            return state;
    }
}
