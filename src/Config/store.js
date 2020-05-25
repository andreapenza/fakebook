import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import RootMiddleware from '../Middlewares';
import reducers from '../Reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootMiddleware);

export default store;
