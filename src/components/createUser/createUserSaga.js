import { all, call, put, takeEvery } from 'redux-saga/effects';

import services from './createUserService'
import actions from './createUserActions'

function* createUser (data) {
  try{
    const user = {
      "name": data.payload.name,
      "lastname":data.payload.lastname,
      "prefix": data.payload.prefix,
      "phone":data.payload.phone,
      "email": data.payload.email,
      "password": data.payload.password,
      "country": data.payload.country,
      "city": data.payload.city,
      "status": true,
      "agreement":data.payload.agreement,
      "parentId": data.payload.parentId
    }

    const result = yield call(services.createUser, user );

    if(result.isAxiosError){
        yield put(actions.createUserError(result.response.data.error))
    }

    yield put(actions.createUserSuccess())

  }catch(error){
    throw error
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.CREATE_USER, createUser)]);
}