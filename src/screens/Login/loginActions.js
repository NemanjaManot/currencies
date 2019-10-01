import { LOGIN } from './loginActionTypes';

export const tryLoginAction = testState => ({
    type: LOGIN.TRY_LOGIN,
    testState
});
