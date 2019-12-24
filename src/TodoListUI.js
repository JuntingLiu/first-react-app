/**
 * UI 组件
 * 只负责页面渲染，不负责相关业务逻辑操作
 * @Author: Junting
 * @Date: 2019-12-24 22:48:16
 * @Last Modified by: Junting
 * @Last Modified time: 2019-12-24 22:48:36
 */

import React, { Component } from 'react';
import {
  Input,
  Button,
  List,
  Icon
} from 'antd';

class TodoListUI extends Component {
  render () {
    return (
      <div style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '400px' }}>
          <div>
            <Input
              value={ this.props.inputValue }
              onChange={this.props.handleInputChange}
              placeholder="todo info"
              style={{ width: '300px', 'marginRight': '10px' }}
              />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          </div>

          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                actions={
                  [<Icon onClick={() => { this.props.handleItemDelete(index) }} type="close" style={{ color: '#f81d22' }}/>]
                }
              >
                  {item}
              </List.Item>
            )}
            style={{marginTop: '10px' }}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;