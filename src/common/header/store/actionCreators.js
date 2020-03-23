import Axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';


export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

// store 管理的 state 已经都变成了 immutable 的不可变对象了，而接口返回的还是 Array
// 所以这里我们也要转变成 immutable 对象
const changeSearchList = (data) => ({
  type: actionTypes.CHANGE_SEARCH_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchList = () => {
  return (dispatch) => {
    Axios.get('/api/searchList.json').then((res) => {
      const { data: { ret, data } } = res;
      if (ret === 0) {
        dispatch(changeSearchList(data));
      }
    }).catch((err) => {
      console.log("searchList -> err", err)
    })
  };
};

export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});
