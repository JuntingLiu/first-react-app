import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'

// 生成一个不可变的 immutable 对象
const initialState = fromJS({
  focused: false,
  mouseIn: false,
  search_list: [], // 生成的已经是一个 immutable 的不可变对象了
  page: 1, // 当前页
  totalPage: 1 // 总页数
});

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象 set 方法，会结合之前的 immutable 对象的值，和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_SEARCH_LIST:
      return state.set('search_list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state
  }
};