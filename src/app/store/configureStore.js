import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";


export function configureStore() {
    const rootEpic = combineEpics();
    const epicMiddleware = createEpicMiddleware();
    const rootReducer = combineReducers({});

    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(epicMiddleware))
      );

    epicMiddleware.run(rootEpic);
    return store;
}