import * as actionTypes from './actionTypes';

const initialState = {
  focused: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return { focused: true };
    case actionTypes.SEARCH_BLUR:
      return { focused: false };
    default:
      return state
  }
};