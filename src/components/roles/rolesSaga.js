import { all, call, put, takeEvery } from 'redux-saga/effects';

import services from './rolesService'
import actions from './rolesActions'

function* getRoles (data){
  try{
    const result = yield call(services.getRoles , data.payload);

    if(result.isAxiosError){
      yield put(actions.getRolesError(result.response.data.error))
    }

    const finalObj =  {
      roles: result.roles, 
      count: result.count
    };
    yield put(actions.getRolesSuccess (finalObj));
  }catch(error){
    throw error
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_ROLES, getRoles)]);
}