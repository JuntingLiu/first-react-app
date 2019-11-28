import React, { Component, Fragment } from "react";
import "./todoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }

  changeInput(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleAdd() {
    // this.setState 修改 state 的数据
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }

  handleDelete(index) {
    // immutabel 原则，不允许直接修改 state 里的数据
    // 不要直接去操作原数据，先拷贝一份数据
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
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
            onChange={this.changeInput.bind(this)}
          />
          <button onClick={this.handleAdd.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleDelete.bind(this, index)}
                // 对于输入的 html 标签，不要转移成字符串标签，后面参数跟着不要转移的内容
                dangerouslySetInnerHTML={{ __html: item }}
              >
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
