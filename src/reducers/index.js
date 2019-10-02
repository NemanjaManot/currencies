import { combineReducers } from 'redux';
/* Reducers */
import loginReducer from '../screens/Login/loginReducer';
import userReducer from '../shared/user/userReducer';

export default combineReducers({
    loginReducer,
    userReducer
});
