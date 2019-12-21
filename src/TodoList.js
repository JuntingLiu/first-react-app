import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {
  Input,
  Button,
  List
} from 'antd';
import store from './store';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
            <Button type="primary">提交</Button>
          </div>

          <List
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>{item}</List.Item>
            )}
            style={{ width: '300px', marginTop: '10px' }}
          />
        </div>
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };

    // 通知 store 变更
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState());
  }
}

export default TodoList;
