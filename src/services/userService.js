import ApiHelper from '../utils/apiHelper';

class UserService {
    getLoggedUserInfo() {
        return ApiHelper.get('users/me').then(response => ({ response })).catch(error => ({ error }));
    }

    getUserAccounts(userId) {
        return ApiHelper.get(`users/${userId}/accounts`).then(response => ({ response })).catch(error => ({ error }));
    }
}

export default new UserService();

