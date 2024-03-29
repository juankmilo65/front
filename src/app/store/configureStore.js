import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import loginReduer from '../../components/login/loginReducer'
import usersReduer from '../../components/users/userReducer'
import createUsersReducer from '../../components/createUser/createUserReducer'
import plansReducer from '../../components/plans/plansReducer'
import rolesReducer from '../../components/roles/rolesReducer'
import errorReducer from '../../components/error/errorReducer'
import {rootSaga} from '../../utilities/mergeSagas'


export function configureStore() {

  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['login'],
    // stateReconciler: autoMergeLevel2,
  }

  const rootReducer = combineReducers({
    login: loginReduer,
    error:errorReducer,
    users: usersReduer,
    createUsers: createUsersReducer,
    plans: plansReducer,
    roles: rolesReducer
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    const persistor = persistStore(store)
    sagaMiddleware.run(rootSaga);
    return {store, persistor};
}