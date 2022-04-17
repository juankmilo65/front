import { all, fork } from 'redux-saga/effects';

import loginSagas from '../components/login/loginSaga'

export function* rootSaga() {
      yield all([fork(loginSagas)]);
}