import { LOGIN } from './loginActionTypes';

export const tryLoginAction = loginParams => ({
    type: LOGIN.TRY_LOGIN,
    loginParams
});
