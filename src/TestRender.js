import React, { Component } from "react";

class TestRender extends Component {
  // 当父组件 render 函数被执行了，它的子组件 render 都会也会被重新执行
  render() {
    console.log("Children component: [ test render ]");
    return <span>{this.props.content}</span>;
  }
}

export default TestRender;
