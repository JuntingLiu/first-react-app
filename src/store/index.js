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
 * @Last Modified time: 2020-03-05 10:55:11
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// redux-devtools 中间件和别的中间间混合使用的方式：
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk) // 多个中间件
);

// applyMiddleware 向外暴露的公共 API， 使 redux 可以引用外部的中间件
const store = new createStore(
  reducer, // 使用 reducer 构建的初始数据
  enhancer
  // 开启 redux 调试工具 (使用中间件的形式，下面就不能这样写了👇)
  // redux-devtools 也是 redux 的中间件
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;