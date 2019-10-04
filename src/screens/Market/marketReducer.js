import { MARKET } from './marketActionTypes';

const initialState = {
    symbols: null,
    watchList: null
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
        default:
            return state;
    }
}
