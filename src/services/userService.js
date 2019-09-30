import ApiHelper from '../utils/apiHelper';

class UserService {
    getUserInfo() {
        return ApiHelper.get('users/me').then(response => ({ response })).catch(error => ({ error }));
    }
}

export default new UserService();

