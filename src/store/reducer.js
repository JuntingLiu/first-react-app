/**
 * 数据
 * @Author: Junting
 * @Date: 2019-12-21 11:51:50
 * @Last Modified by: Junting
 * @Last Modified time: 2019-12-21 13:35:22
 */

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
  if (action.type === 'change_input_value') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === 'add_todo_item') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';

    return newState;
  }

  if (action.type === 'delete_todo_item') {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);

    return newState;
  }
  return state;
}