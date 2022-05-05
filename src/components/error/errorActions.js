const actions =  {
  SET_ERROR : 'SET_ERROR',

  setError:(payload) => ({
    type: actions.SET_ERROR,
    payload
  })
};

export default actions;