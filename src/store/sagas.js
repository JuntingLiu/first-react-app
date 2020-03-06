/**
 * Sage 必须导出一个 generator 函数
 * @Author: Junting
 * @Date: 2020-03-05 16:34:31
 * @Last Modified by: Junting
 * @Last Modified time: 2020-03-05 16:35:30
 */
import { put, takeEvery } from 'redux-saga/effects';
import Axios from 'axios';
import {
  GET_INIT_LIST
} from './actionTypes'
import {
  initListAction
} from './actionCreator';

function* getInitList() {
  try {
    const res = yield Axios.get('/api/list');
    const { status, msg, data } = res.data;
    console.log("TCL: function*getInitList -> msg", msg);

    if(status === 200) {
      const action = initListAction(data);
      yield put(action); // 替代 store.dispatch() 方法
    }
  } catch(err) {
    console.log("TCL: function*getInitList -> err", err);
  }

}

function* todoListSaga() {
  // 捕捉到类型为 GET_INIT_LIST 就会立即执行 getInitList 方法
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default todoListSaga;