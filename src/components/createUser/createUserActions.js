const actions =  {
    CREATE_USER : 'CREATE_USER',
    CREATE_USER_SUCCESS : 'CREATE_USER_SUCCESS',
    CREATE_USER_ERROR : 'CREATE_USER_ERROR',
    KEEP_OPEN_CREATE_USER : 'KEEP_OPEN_CREATE_USER',
    SET_HAVE_FIELDS_FILLED: 'SET_HAVE_FIELDS_FILLED',
    RESET_USER_CREATED: 'RESET_USER_CREATED',
    
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
    keepOpenCreateUser:(payload) => ({
        type: actions.KEEP_OPEN_CREATE_USER,
        payload,
    }),
    setHaveFieldsFilled:(payload) => ({
        type: actions.SET_HAVE_FIELDS_FILLED,
        payload,
    }),
    resetUserCreated:(payload) => ({
        type: actions.RESET_USER_CREATED,
        payload
    })
};

export default actions;