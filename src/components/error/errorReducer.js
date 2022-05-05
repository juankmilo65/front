import actions from './errorActions'

const initState = {
  error: []
}

const ErrorReducer = (state = initState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.SET_ERROR:
      return {
          ...state,
          error: payload
      };
    default:
      return state;
  }

}

export default  ErrorReducer