import { MARKET } from './marketActionTypes';

export const getSingleSymbolAction = (userId, symbolId) => ({
    type: MARKET.GET_SINGLE_SYMBOL,
    userId,
    symbolId
});

export const toggleWatchlistAction = (accountId, symbolId, isFollowing) => ({
    type: MARKET.TOGGLE_WATCHLIST,
    accountId,
    symbolId,
    isFollowing
});
