import ApiHelper from '../utils/apiHelper';
import qs from 'qs';
/* Config */
import { CLIENT_ID } from '../config';

class LoginService {
    loginUser(email, password) {
        const data = {
            grant_type: 'password',
            client_id: CLIENT_ID,
            username: email,
            password
        };
        return ApiHelper.post('oauth/token/', qs.stringify(data), {
            headers: {
                noAuth: true
            }
        }).then(response => ({ response })).catch(error => ({ error }));
    }
}

export default new LoginService();
