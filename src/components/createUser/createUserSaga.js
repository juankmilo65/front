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
      "parentId": data.payload.parentId,
      "planId": data.payload.plan,
      "wallet": data.payload.wallet
    }

    const result = yield call(services.createUser, {user, language: data.payload.language} );

    if(result.isAxiosError){
       return  yield put(actions.createUserError(result.response.data.message))
    }

    yield put(actions.createUserSuccess())

  }catch(error){
    throw error
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.CREATE_USER, createUser)]);
}