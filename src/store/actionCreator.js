/**
 * 统一抽离页面 action 集，便于统一管理，利于测试
 * @Author: Junting
 * @Date: 2019-12-24 21:46:39
 * @Last Modified by: Junting
 * @Last Modified time: 2020-03-05 11:26:01
 */

import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import Axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

// 之前的 action 返回必须是一个对象
// 引入 redux-thunk 中间件后，可以返回一个函数
export const getTodoList = () => {
  // 会自动接收 store.dispatch 方法
  return (dispatch) => {
    Axios.get('/api/list').then((res) => {
      const { status, msg, data } = res.data;
      console.log("TCL: TodoList -> componentDidMount -> msg", msg)
      if(status === 200) {
        const action = initListAction(data);
        dispatch(action);
      }
    }).catch(err => {
      console.log("TCL: TodoList -> componentDidMount -> err", err);
    })
  }
}