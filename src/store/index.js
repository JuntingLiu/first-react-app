/**
 * redux 的核心概念
 * 1. store 是唯一的
 * 2. 只有 store 能够改变自己的内容（state）
 * 3. Reducer 必须是纯函数（纯函数指的是，输入固定的值，就一定会有固定的输出，而切不会有任何副作用（对其他结果产生影响））
 *
 * redux 核心的 API
 * * creatStore 创建 store
 * * store.getState() 获取所有定义的 state
 * * store.dispatch() 派发 action 操作，会传递给 store，store 接收到了就会执行 reducer 函数
 * * store.subscribe() 订阅 Store 的改变，只要改变，接收的函数就会执行
 * @Author: Junting
 * @Date: 2019-12-24 21:59:41
 * @Last Modified by: Junting
 * @Last Modified time: 2020-03-05 15:38:48
 */

import { createStore, applyMiddleware ,compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoListSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = new createStore(
  reducer,
  enhancer
);

// then run the saga
sagaMiddleware.run(todoListSaga);

export default store;