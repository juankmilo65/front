const actions =  {
    CREATE_USER : 'CREATE_USER',
    CREATE_USER_SUCCESS : 'CREATE_USER_SUCCESS',
    CREATE_USER_ERROR : 'CREATE_USER_ERROR',
    
    createUser :(payload) => ({
        type: actions.CREATE_USER,
        payload,
    }),
    createUserSuccess :() => ({
        type: actions.CREATE_USER_SUCCESS,
    }),
    createUserError:(payload) => ({
        type: actions.CREATE_USER_ERROR,
        payload,
    }),
};

export default actions;