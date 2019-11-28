import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
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
      // Fragment 包裹后，无需再外面包一层容器，可以返回多个子容器，渲染的时候也不会有一层包裹
      <Fragment>
        <div className="App">
          {this.state.inputValue}
          <div>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.changeInput.bind(this)}
            />
            <button onClick={this.handleAdd.bind(this)}>提交</button>
          </div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <li key={index} onClick={this.handleDelete.bind(this, index)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
