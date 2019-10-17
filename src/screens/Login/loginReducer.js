// @flow

/* Action Types */
import { LOGIN } from './loginActionTypes';

type State = {
    errorMessage: string | null,
    isLoginLoading: boolean
};

const INITIAL_STATE = {
    errorMessage: null,
    isLoginLoading: false
};

export default function loginReducer(state: State = INITIAL_STATE, action: Object): State {
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
