import {call, all} from 'redux-saga/effects';
import authMiddleware from './AuthMiddleware';

function* RootMiddleware() {
  yield all([call(authMiddleware)]);
}

export default RootMiddleware;
