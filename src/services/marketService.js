import ApiHelper from '../utils/apiHelper';
import { APP_ID } from '../config';

class MarketService {
    getSymbols(userId) {
        return ApiHelper.get(`users/${ userId }/symbols`).then(response => (response)).catch(error => (error));
    };

    getWatchlist(accountId) {
        return ApiHelper.get(`accounts/${ accountId }/watchlist`).then(response => (response)).catch(error => (error));
    };

    toggleWatchlist(accountId, symbolId, isFollowing) {
        return ApiHelper.put(`accounts/${ accountId }/watchlist/${ symbolId }`, {
            following: isFollowing
        }).then(response => (response)).catch(error => (error));
    }

    getSingleSymbol(userId, symbolId) {
        return ApiHelper.get(`users/${ userId }/symbols/${ symbolId }`)
            .then(response => (response)).catch(error => (error));
    }

    getChartData(userId, symbolId) {
        return ApiHelper.get(`users/${ userId }/symbols/${ symbolId }/chart`)
            .then(response => (response)).catch(error => (error));
    }

    getNews(limit, offset) {
        return ApiHelper.get(`applications/${ APP_ID }/news/coinpulse`, { limit, offset })
            .then(response => (response))
            .catch(error => (error));
    }
}

export default new MarketService();

