/**
 * 数据
 * @Author: Junting
 * @Date: 2019-12-21 11:51:50
 * @Last Modified by: Junting
 * @Last Modified time: 2020-03-03 16:22:18
 */
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]
};

// store 会自动传递两个参数: state、action
// reducer 可以接收 state, 但不能修改 state 的值
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === ADD_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';

    return newState;
  }

  if (action.type === DELETE_TODO_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);

    return newState;
  }

  if (action.type === INIT_LIST_ACTION) {
    let newState = Object.assign({}, state); // 推荐
    newState.list = action.data;

    return newState;
  }


  return state;
}