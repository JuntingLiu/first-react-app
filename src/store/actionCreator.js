/**
 * 统一抽离页面 action 集，便于统一管理，利于测试
 * @Author: Junting
 * @Date: 2019-12-24 21:46:39
 * @Last Modified by: Junting
 * @Last Modified time: 2019-12-24 21:47:31
 */

import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'

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
