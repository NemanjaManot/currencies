import { applyMiddleware, createStore } from 'redux';
/* Reducers */
import reducers from '../reducers';

const appReducer = (state, action) => {
    return reducers(state, action);
};

const store = createStore(
    appReducer,
    applyMiddleware()
);

export default store;
