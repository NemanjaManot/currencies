import ApiHelper from '../utils/apiHelper';

class MarketService {
    getSymbols(userId) {
        return ApiHelper.get(`users/${userId}/symbols`).then(response => ({ response })).catch(error => ({ error }));
    };

    getWatchlist(accountId) {
        return ApiHelper.get(`accounts/${accountId}/watchlist`).then(response => ({ response })).catch(error => ({ error }));
    };
}

export default new MarketService();

