import Actions from '../Actions';
import {takeEvery} from 'redux-saga/effects';

function* login(action) {
  console.log(action);
}
function* signup(action) {
  console.log(action);
}
function* logout(action) {
  console.log(action);
}

export default function* authMiddleware() {
  yield takeEvery(Actions.Auth.LOGIN, login);
  yield takeEvery(Actions.Auth.SIGNUP, signup);
  yield takeEvery(Actions.Auth.LOGOUT, logout);
}
