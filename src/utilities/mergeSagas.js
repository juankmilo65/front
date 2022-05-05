import { all, fork } from 'redux-saga/effects';

import loginSagas from '../components/login/loginSaga'
import userSagas from '../components/users/userSaga'
import createUserSagas from '../components/createUser/createUserSaga'
import plansSaga from '../components/plans/plansSaga'

export function* rootSaga() {
      yield all([
            fork(loginSagas), 
            fork(userSagas),
            fork(createUserSagas),
            fork(plansSaga)
      ]);
}