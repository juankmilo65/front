import { all, takeEvery, put, call } from 'redux-saga/effects';

import service from './plansService'
import actions from './plansActions'
import actionsError from '../error/errorActions'

function* getAllPlans() {
  try{
      const plans = yield call(service.getAllPlans);

      if(plans.isAxiosError){
          yield put(actionsError.setError(plans.response.data))
      }

      yield put(actions.getAllPlansSuccess(plans))
  
  }catch(error){
      throw error
  }
}

export default function* rootSaga() {
  yield all([
      takeEvery(actions.GET_ALL_PLANS, getAllPlans)
  ]);
}