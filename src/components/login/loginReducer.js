import actions from './logingActions'

const initState = {
    isLoading: false,
    errorMessage: ''
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
                data: payload,
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