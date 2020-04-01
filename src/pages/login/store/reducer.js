import * as constants from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  login: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
};