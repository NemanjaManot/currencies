import { combineReducers } from 'redux';
/* Reducers */
import loginReducer from '../screens/Login/loginReducer';
import userReducer from '../shared/user/userReducer';
import marketReducer from '../screens/Market/marketReducer';

export default combineReducers({
    loginReducer,
    userReducer,
    marketReducer
});
