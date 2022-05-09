import actions from './createUserActions'

const initState = {
    isLoading: false,
    errorMessage: '',
    keepOpenCreateUser: false,
    haveFieldsFilled: false,
    userCreated: false
};

const CreateUsersReducer = (state = initState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case actions.CREATE_USER:
            return {
                ...state,
                isLoading: true,
                userCreated: false
            };
        case actions.CREATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userCreated: true
            };
        case actions.CREATE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
                userCreated: false
            }
        case actions.KEEP_OPEN_CREATE_USER:
            return {
                ...state,
                keepOpenCreateUser: payload
            }
        case actions.SET_HAVE_FIELDS_FILLED:
            return {
                ...state,
                haveFieldsFilled: payload,
            }
        case actions.RESET_USER_CREATED:
            return {
                ...state,
                userCreated: false,
                errorMessage: '',
                isLoading: false,
            }
        default:
        return state;
    }
}


export default  CreateUsersReducer