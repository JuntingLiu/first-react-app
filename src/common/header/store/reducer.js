import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 生成一个不可变的 immutable 对象
const initialState = fromJS({
  focused: false
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象 set 方法，会结合之前的 immutable 对象的值，和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    default:
      return state
  }
};