import { MARKET } from './marketActionTypes';

const initialState = {
    symbols: null
};

export default function marketReducer(state = initialState, action) {
    switch (action.type) {
        case MARKET.SET_MARKET_SYMBOLS:
            return {
                ...state,
                symbols: action.symbols
            };
        default:
            return state;
    }
}
