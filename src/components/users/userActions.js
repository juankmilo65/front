const actions =  {
    GET_USERS : 'GET_USERS',
    getUsers :(payload) => ({
        type: actions.getUsers,
        payload,
    }),
};

export default actions;