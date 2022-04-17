const actions =  {
    LOGIN : 'LOGIN',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_ERROR : 'LOGIN_ERROR',
    REGISTER_LOGIN : 'REGISTER_LOGIN',
    REGISTER_LOGIN_SUCCESS : 'REGISTER_LOGIN_SUCCESS',

    login:(payload) => ({
        type: actions.LOGIN,
        payload,
    }),
    loginSuccess:(payload) => ({
        type: actions.LOGIN_SUCCESS,
        payload: {payload},
    }),
    loginError:(payload) => ({
        type: actions.LOGIN_ERROR,
        payload: {payload},
    }),
    registerLogin:(payload) => ({
        type: actions.REGISTER_LOGIN,
        payload,
    }),
    registerLoginSuccess :(data) => ({
        type: actions.REGISTER_LOGIN_SUCCESS,
        payload: { data },
    }),
};

export default actions;