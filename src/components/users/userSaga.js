import { all, call, put, takeEvery } from 'redux-saga/effects';

import services from './userService'
import actions from './userActions'

function* getUserChildrenByFatherId (data) {
  try{
    let key = 0;
    const users = [];
    const result = yield call(services.getUserChildrenByFatherId , data.payload);
    
    result.map(o => {
      o.user.createdAt = o.user.createdAt.split('T')[0]
      o.user.updatedAt = o.user.updatedAt.split('T')[0]
      o.user.key =  key;
      key++;
      return users.push(o.user)
    })

    if(result.isAxiosError){
        yield put(actions.getUserChildrenByFatherIdError(result.response.data.error))
    }

    yield put(actions.getUserChildrenByFatherIdSuccess(users))

  }catch(error){
    throw error
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.GET_USERS_CHILDREN_BY_FATHER_ID, getUserChildrenByFatherId)]);
}