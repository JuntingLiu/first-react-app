import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Input,
  Button,
  List,
  Icon
} from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 当前组件订阅 store, store 有变更，就会执行 this.handleStoreChange 方法
    store.subscribe(this.handleStoreChange);
  }

  render () {
    return (
      <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400px' }}>
          <div>
            <Input
              value={ this.state.inputValue }
              onChange={this.handleInputChange}
              placeholder="todo info"
              style={{ width: '300px', 'marginRight': '10px' }}
              />
            <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          </div>

          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item
                actions={
                  [<Icon onClick={this.handleItemDelete.bind(this, index)} type="close" style={{ color: '#f81d22' }}/>]
                }
              >
                  {item}
              </List.Item>
            )}
            style={{marginTop: '10px' }}
          />
        </div>
      </div>
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
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
