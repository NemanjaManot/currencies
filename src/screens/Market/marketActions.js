import { MARKET } from './marketActionTypes';

export const getSingleSymbolAction = (userId, symbolId) => ({
    type: MARKET.GET_SINGLE_SYMBOL,
    userId,
    symbolId
});
