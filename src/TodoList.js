import React, { Component, Fragment } from "react";
import "./todoList.css";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };

    this.changeInput = this.changeInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeInput(e) {
    // 新版支持函数，提升性能
    // 当传递一个函数时，变成了一个异步的 setState 时，使用 e.target.value 就有问题了，这里要提前先保存数据
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleAdd() {
    // this.setState 修改 state 的数据
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });

    // setState 传递函数的时候，支持接收一个 prevState 参数(修改之前的数据，等价于 this.state)
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }));
  }

  handleDelete(index) {
    // immutabel 原则，不允许直接修改 state 里的数据
    // 不要直接去操作原数据，先拷贝一份数据
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list
    // });
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list };
    });
  }

  render() {
    return (
      // Fragment 占位符组件；包裹后，无需再外面包一层容器，可以返回多个子容器，渲染的时候也不会有一层包裹
      <Fragment>
        {
          /* JSX 语法里的注释 */
          // 单行注释
        }
        <div>
          {/* 对于 label 属性 for 会于 js 里的 for 冲突 */}
          <label htmlFor="insertArea">输入任务名称：</label>
          <input
            id="insertArea"
            // 类名
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInput}
          />
          <button onClick={this.handleAdd}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }

  // 代码拆分
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 只支持一层容器
        <div key={index}>
          <TodoItem
            content={item}
            index={index}
            deleteItem={this.handleDelete}
          />
          {/*
            <li
              key={index}
              onClick={this.handleDelete.bind(this, index)}
              // 对于输入的 html 标签，不要转移成字符串标签，后面参数跟着不要转移的内容
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          */}
        </div>
      );
    });
  }
}

export default TodoList;
