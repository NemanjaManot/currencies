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

export const getNewsAction = (offset) => ({
    type: MARKET.GET_NEWS,
    offset
});

export const resetNewsAction = () => ({
    type: MARKET.RESET_NEWS
});
