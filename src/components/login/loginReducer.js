import actions from './logingActions'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';


const initState = {
    token: null,
    isLoading: false,
    errorMessage: '',
    isLoggingIn: false
};

const LogingReducer = (state = initState, action) => {
    const {type, payload} = action;

    switch (type) {
        case actions.LOGIN:
            return {
                ...state,
                isLoading: true
            };
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                token: payload,
            };
        case actions.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload.payload,
            };
        case actions.REGISTER_LOGIN:
            return {
                ...state,
                isLoading: true,
            };
        case actions.REGISTER_LOGIN_SUCCESS:
            return {
                ...state,
                data: payload.data,
            };
        default:
        return state;
    }
}

const persistConfig = {
    key: 'login',
    storage: storage,
    blacklist: ['errorMessage', 'isLoggingIn', 'isLoading' ]
  };

export default persistReducer(persistConfig, LogingReducer)