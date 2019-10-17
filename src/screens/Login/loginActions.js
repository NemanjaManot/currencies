// @flow

/* Action types */
import { LOGIN } from './loginActionTypes';

type TryLoginType = {
    loginParams: Object
};

export const tryLoginAction = (loginParams: Object): TryLoginType => ({
    type: LOGIN.TRY_LOGIN,
    loginParams
});
