import actions from './logingActions'

const initState = {
    token: '',
    isLoading: false,
    errorMessage: '',
    userLogged: null
};

export default function reducer(state = initState, action) {
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
        case actions.GET_USER_INFO_BY_EMAIL_SUCCESS:
            return {
                ...state,
                userLogged: payload,
            }
        case actions.GET_USER_INFO_BY_EMAIL_ERROR:
            return {
                ...state,
                errorMessage: payload.payload
            }
        default:
        return state;
    }
}