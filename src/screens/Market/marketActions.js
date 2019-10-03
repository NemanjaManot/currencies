import { MARKET } from './marketActionTypes';

export const getMarketSymbolsAction = (userId) => ({
    type: MARKET.GET_MARKET_SYMBOLS,
    userId
});
