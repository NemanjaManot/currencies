// @flow

/* Action types */
import { MARKET } from './marketActionTypes';

type SingleSymbolType = {
    userId: number,
    symbolId: number
};

type WatchlistType = {
    accountId: number,
    symbolId: number,
    isFollowing: boolean
};

type NewsType = {
    offset: number
}

export const getSingleSymbolAction = (userId: number, symbolId: number): SingleSymbolType => ({
    type: MARKET.GET_SINGLE_SYMBOL,
    userId,
    symbolId
});

export const toggleWatchlistAction = (accountId: number, symbolId: number, isFollowing: boolean): WatchlistType => ({
    type: MARKET.TOGGLE_WATCHLIST,
    accountId,
    symbolId,
    isFollowing
});

export const getNewsAction = (offset: number): NewsType => ({
    type: MARKET.GET_NEWS,
    offset
});

export const resetNewsAction = () => ({
    type: MARKET.RESET_NEWS
});
