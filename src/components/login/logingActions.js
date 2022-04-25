const actions =  {
    LOGIN : 'LOGIN',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_ERROR : 'LOGIN_ERROR',
    REGISTER_LOGIN : 'REGISTER_LOGIN',
    REGISTER_LOGIN_SUCCESS : 'REGISTER_LOGIN_SUCCESS',
    GET_USER_INFO_BY_EMAIL: 'GET_USER_INFO_BY_EMAIL',
    GET_USER_INFO_BY_EMAIL_SUCCESS: 'GET_USER_INFO_BY_EMAIL_SUCCESS',
    GET_USER_INFO_BY_EMAIL_ERROR : 'GET_USER_INFO_BY_EMAIL_ERROR',

    login:(payload) => ({
        type: actions.LOGIN,
        payload,
    }),
    loginSuccess:(payload) => ({
        type: actions.LOGIN_SUCCESS,
        payload,
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
    getUserInfoByEmail:(payload) =>({
        type: actions.GET_USER_INFO_BY_EMAIL,
        payload,
    }),
    getUserInfoByEmailSuccess:(payload) =>({
        type: actions.GET_USER_INFO_BY_EMAIL_SUCCESS,
        payload,
    }),
    getUserInfoByEmailError:(payload) => ({
        type: actions.GET_USER_INFO_BY_EMAIL_ERROR,
        payload: {payload},
    }),
};

export default actions;