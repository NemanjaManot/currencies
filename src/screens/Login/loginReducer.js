/* Action Types */
import { LOGIN } from './loginActionTypes';

const INITIAL_STATE = {
    errorMessage: null,
    isLoginLoading: false
};

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN.SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        }
        case LOGIN.LOADING: {
            return {
                ...state,
                isLoginLoading: action.isLoginLoading
            };
        }
        default:
            return state;
    }
}
