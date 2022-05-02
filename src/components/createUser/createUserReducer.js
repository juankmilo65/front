import actions from './userActions'

const initState = {
    isLoading: false,
    errorMessage: ''
};

const UserReducer = (state = initState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case actions.CREATE_USER:
            return {
                ...state,
                isLoading: true
            };
        case actions.CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false
            };
        case actions.CREATE_USER_ERROR:
            return {
              ...state,
              isLoading: false,
              errorMessage: payload.payload,
            }
        default:
        return state;
    }
}


export default  UserReducer