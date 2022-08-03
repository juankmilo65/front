const actions =  {
  GET_ROLES : 'GET_ROLES',
  GET_ROLES_SUCCESS : 'GET_ROLES_SUCCESS',
  GET_ROLES_ERROR: 'GET_ROLES_ERROR',
  
  getRoles :(payload) => ({
      type: actions.GET_ROLES,
      payload,
  }),
  getRolesSuccess :(payload) => ({
    type: actions.GET_ROLES_SUCCESS,
    payload,
  }),
  getRolesError:(payload) => ({
      type: actions.GET_ROLES_ERROR,
      payload,
  }),
};

export default actions;