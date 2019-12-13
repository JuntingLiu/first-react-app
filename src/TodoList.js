import React, { Component, Fragment } from "react";
import "./todoList.css";
import TodoItem from "./TodoItem";
import TestRender from "./TestRender";
import axios from 'axios';

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

    // ajax 异步请求数据也可以放到 constructor 函数里，但是不推荐。
  }

  changeInput(e) {
    // 新版支持函数，提升性能
    // 当传递一个函数时，变成了一个异步的 setState 时，使用 e.target.value 就有问题了，这里要提前先保存数据
    // const value = e.target.value;

    // 通过 ref 获取 DOM 节点后提取数据
    // const value = this.input.value;
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

  // 在组件即将被挂载的到页面的时刻自动执行 (新版本已被重新命名，在组件挂载的时候才会执行)
  // ajax 异步请求数据在这个生命周期函数里，但是在写 native 里会有所冲突 （不推荐）
  componentWillMount() {
    console.log(
      "React lifeCycles：componentWillMount",
      "组件即将被挂载前自动执行"
    );
  }

  // 在组件第一次被挂载的到页面时刻自动执行 （在组件挂载的时候才会执行）
  // ajax 异步请求数据在这个生命周期函数里 （极力推荐，约定）
  componentDidMount() {
    axios.get('/api/todolist').then(res => {
      const { ret, data, msg} = res.data;

      if (ret === 0) {
        this.setState(() => {
          return {
            list: data
          }
        })
      } else {
        alert(msg);
      }
    }).catch(err => {
      console.log("TCL: TodoList -> componentDidMount -> err", err)
    })
    console.log(
      "React lifeCycles: componentDidMount",
      "组件被挂载的到页面时刻自动执行"
    );
  }

  // 组件更新之前自动执行, 要求返回 Boolean 值，判别是否更新组件
  shouldComponentUpdate() {
    console.log(
      "React lifeCycles: shouldComponentUpdate",
      "组件更新之前自动执行"
    );
    return true;
  }

  // 组件被更新之前，它会自动执行，但是他在 shouldComponentUpdate 之后执行
  // 如果 shouldComponentUpdate 返回 true, componentWillUpdate 才会执行
  // 返回 false, componentWillUpdate 就不执行了
  // （新版本已更名）
  componentWillUpdate() {
    console.log(
      "React lifeCycles: componentWillUpdate",
      "组件更新之前自动执行"
    );
  }

  // 组件更新完成之后自动执行
  componentDidUpdate() {
    console.log(
      "React lifeCycles: componentDidUpdate",
      "组件更新完成之后自动执行"
    );
  }

  // render 生命周期函数没有内置实现，所以组件必须自己实现 render
  render() {
    console.log("TodoList render");
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
            // ref={input => {
            //   this.input = input;
            // }}
          />
          <button onClick={this.handleAdd}>提交</button>
        </div>
        <ul ref={ul => (this.ul = ul)} >
          {this.getTodoItem()}
        </ul>
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
