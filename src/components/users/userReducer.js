import actions from './userActions'

const initState = {
    usersByFather: [],
    isLoading: false,
    errorMessage: ''
};

const UserReducer = (state = initState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case actions.GET_USERS_CHILDREN_BY_FATHER_ID:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_USERS_CHILDREN_BY_FATHER_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                usersByFather: payload,
            };
        case actions.GET_USERS_CHILDREN_BY_FATHER_ID_ERROR:
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