import { createStore } from 'redux';
import reducer from './reducer'

const store = new createStore(
  reducer,
  // 开启 redux 调试工具
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;