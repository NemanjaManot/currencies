// @flow

/* Action Types */
import { USER } from './userActionTypes';

type State = {
    user: Object,
    userId: number | null,
    userAccount: Object
};

const INITIAL_STATE = {
    user: null,
    userId: null,
    userAccount: null
};

export default function userReducer(state: State = INITIAL_STATE, action: Object): State {
    switch (action.type) {
        case USER.SET_INFO:
            return {
                ...state,
                user: action ? action.user : null,
                userId: action ? action.userId : null
            };
        case USER.SET_USER_ACCOUNTS:
            return {
                ...state,
                userAccount: action.userAccount
            };
        default:
            return state;
    }
}
