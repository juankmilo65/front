const actions =  {
    GET_USERS : 'GET_USERS',
    
    getUsers :(payload) => ({
        type: actions.GET_USERS,
        payload,
    }),
};

export default actions;