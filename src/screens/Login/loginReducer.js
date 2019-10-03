/* Action Types */
import { LOGIN } from './loginActionTypes';

const INITIAL_STATE = {
    errorMessage: null
};

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN.SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state;
    }
}
