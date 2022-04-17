import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import loginReduer from '../../components/login/loginReducer'
import {rootSaga} from '../../utilities/mergeSagas'


export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  
  const rootReducer = combineReducers({
    login: loginReduer
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    return store;
}