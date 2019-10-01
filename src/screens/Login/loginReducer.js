/* Action Types */
import { LOGIN } from './loginActionTypes';

const INITIAL_STATE = {
    testState: 'test state 1'
};

export default function loginReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN.TRY_LOGIN: {
            return {
                ...state,
                testState: action.testState
            }
        }
        default:
            return state;
    }
}
