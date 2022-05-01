const actions =  {
    GET_USERS_CHILDREN_BY_FATHER_ID : 'GET_USERS_CHILDREN_BY_FATHER_ID',
    GET_USERS_CHILDREN_BY_FATHER_ID_SUCCESS : 'GET_USERS_CHILDREN_BY_FATHER_ID_SUCCESS',
    GET_USERS_CHILDREN_BY_FATHER_ID_ERROR : 'GET_USERS_CHILDREN_BY_FATHER_ID_ERROR',
    
    getUserChildrenByFatherId :(payload) => ({
        type: actions.GET_USERS_CHILDREN_BY_FATHER_ID,
        payload,
    }),
    getUserChildrenByFatherIdSuccess :(payload) => ({
        type: actions.GET_USERS_CHILDREN_BY_FATHER_ID_SUCCESS,
        payload,
    }),
    getUserChildrenByFatherIdError:(payload) => ({
        type: actions.GET_USERS_CHILDREN_BY_FATHER_ID_ERROR,
        payload,
    }),
};

export default actions;