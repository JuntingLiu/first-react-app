import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 构造函数里进行提前绑定，有一定的性能优化
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteItem(this.props.index);
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
}

export default TodoItem;
