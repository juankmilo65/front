import { all, takeEvery, put, call } from 'redux-saga/effects';

import services from './loginService'
import actions from './logingActions'

function* login(data) {
    try{
        const token = yield call(services.login, data.payload);

        if(token.isAxiosError){
            yield put(actions.loginError(token.response.data.error))
        }

        yield put(actions.loginSuccess(token))
    
    }catch(error){
        throw error
    }
}


// export function registerLogin(data) {
//     return axios.post(`${BASE_URL}/users`, data);
// }

export default function* rootSaga() {
    yield all([
        takeEvery(actions.LOGIN, login)
    ]);
  }