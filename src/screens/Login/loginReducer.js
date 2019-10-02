/* Action Types */
import { LOGIN } from './loginActionTypes';

const INITIAL_STATE = {
    testState: ''
};

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN.SET: {
            return {
                ...state,
                testState: action.testState
            }
        }
        default:
            return state;
    }
}
