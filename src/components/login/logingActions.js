const actions =  {
    LOGIN : 'LOGIN',
    LOGIN_SUCCESS : 'LOGIN_SUCCESS',
    LOGIN_ERROR : 'LOGIN_ERROR',
    REGISTER_LOGIN : 'REGISTER_LOGIN',
    REGISTER_LOGIN_SUCCESS : 'REGISTER_LOGIN_SUCCESS',
    GET_USER_INFO_BY_EMAIL: 'GET_USER_INFO_BY_EMAIL',
    CLEAN_TOKEN: 'CLEAN_TOKEN',

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
    cleanToken:() => ({
        type: actions.CLEAN_TOKEN
    })
};

export default actions;