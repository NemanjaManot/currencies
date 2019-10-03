import { USER } from './userActionTypes';

const initialState = {
    user: null,
    userId: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER.SET_INFO:
            return {
                ...state,
                user: action ? action.user : null,
                userId: action ? action.userId : null
            };
        default:
            return state;
    }
}
