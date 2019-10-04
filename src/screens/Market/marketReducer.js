import { MARKET } from './marketActionTypes';

const initialState = {
    symbols: null,
    watchList: null,
    singleSymbol: null
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
        default:
            return state;
    }
}
