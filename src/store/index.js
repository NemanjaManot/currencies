import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* Reducers */
import reducers from '../reducers';
/* Sagas */
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const appReducer = (state, action) => {
    return reducers(state, action);
};

const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
