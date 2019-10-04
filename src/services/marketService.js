import ApiHelper from '../utils/apiHelper';

class MarketService {
    getSymbols(userId) {
        return ApiHelper.get(`users/${userId}/symbols`).then(response => ({ response })).catch(error => ({ error }));
    }
}

export default new MarketService();

