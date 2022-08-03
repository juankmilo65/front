import actions from './rolesActions'

const initState = {
    roles: [],
    total: 0,
    isLoading: false,
    errorMessage: ''
};

const RoleReducer = (state = initState, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case actions.GET_ROLES:
            return {
                ...state,
                isLoading: true
            };
        case actions.GET_ROLES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                roles: payload.roles,
                total: payload.count
            };
        case actions.GET_ROLES_ERROR:
            return {
              ...state,
              isLoading: false,
              errorMessage: payload.payload
            }
        default:
        return state;
    }
}


export default RoleReducer