import actions from './plansActions'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initState = {
  plans: []
}

const PlansReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.GET_ALL_PLANS_SUCCESS:
      return {
          ...state,
          plans: payload
      };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'plans',
  storage: storage,
};

export default persistReducer(persistConfig, PlansReducer)