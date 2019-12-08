import React, { Component, Fragment } from "react";
import "./todoList.css";
import TodoItem from "./TodoItem";
import TestRender from "./TestRender";

class TodoList extends Component {
  constructor(props) {
    // 当组件的 props 和 state 发生了改变，自身的 render 函数就会被重新执行
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
    // const value = e.target.value;

    // 通过 ref 获取 DOM 节点后提取数据
    const value = this.input.value;
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
    this.setState(
      prevState => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }),
      () => {
        // 实在要通过 DOM 操作，需要放在 setState 操作数据之后，通过参数形式进行
        console.log(
          "列表长度(异步后)：",
          this.ul.querySelectorAll("div").length
        );
      }
    );
    // 不推荐理由之一：因为 setState 是异步的，所以你获取列表长度老是获取上一次的长度
    console.log("列表长度：", this.ul.querySelectorAll("div").length);
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
    console.log("render");
    return (
      // Fragment 占位符组件；包裹后，无需再外面包一层容器，可以返回多个子容器，渲染的时候也不会有一层包裹
      <Fragment>
        {
          /* JSX 语法里的注释 */
          // 单行注释
        }
        <div>
          <TestRender content={this.state.inputValue} />
          {/* 对于 label 属性 for 会于 js 里的 for 冲突 */}
          <label htmlFor="insertArea">输入任务名称：</label>
          <input
            id="insertArea"
            // 类名
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.changeInput}
            // 不推荐使用，通过 ref 获取当前 DOM 节点
            ref={input => {
              this.input = input;
            }}
          />
          <button onClick={this.handleAdd}>提交</button>
        </div>
        <ul ref={ul => (this.ul = ul)}>{this.getTodoItem()}</ul>
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
