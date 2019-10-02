import { USER } from './userActionTypes';

const initialState = {
    user: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER.SET_INFO:
            console.log(action);
            return {
                ...state,
                user: action ? action.user : null
            };
        default:
            return state;
    }
}
