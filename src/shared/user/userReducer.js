import { USER } from './userActionTypes';

const initialState = {
    user: null,
    userId: null,
    userAccount: null
};

export default function userReducer(state = initialState, action) {
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
