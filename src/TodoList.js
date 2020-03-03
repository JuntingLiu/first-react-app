/**
 * 容器组件（聪明组件）
 * 不负责页面渲染工作，只负责业务逻辑
 * @Author: Junting
 * @Date: 2019-12-24 22:48:57
 * @Last Modified by: Junting
 * @Last Modified time: 2020-03-03 16:17:51
 */
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodoListUI'
import store from './store';
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction
} from './store/actionCreator';
import Axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 当前组件订阅 store, store 有变更，就会执行 this.handleStoreChange 方法
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    Axios.get('/api/list').then((res) => {
      const { status, msg, data } = res.data;
      console.log("TCL: TodoList -> componentDidMount -> msg", msg)
      if(status === 200) {
        const action = initListAction(data);
        store.dispatch(action);
      }
    }).catch(err => {
      console.log("TCL: TodoList -> componentDidMount -> err", err);
    })
  }

  render () {
    return (
      <TodoListUI
        inputValue={ this.state.inputValue }
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    // 通知 store 变更
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action)
  }

  handleItemDelete(index) {
    console.log("TCL: TodoList -> handleItemDelete -> index", index)
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
