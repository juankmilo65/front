const actions =  {
  GET_ALL_PLANS : 'GET_ALL_PLANS',
  GET_ALL_PLANS_SUCCESS : 'GET_ALL_PLANS_SUCCESS',

  getAllPlans:() => ({
    type: actions.GET_ALL_PLANS,
  }),
  getAllPlansSuccess:(payload) => ({
    type: actions.GET_ALL_PLANS_SUCCESS,
    payload
  })
};

export default actions;