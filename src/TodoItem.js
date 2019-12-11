import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 构造函数里进行提前绑定，有一定的性能优化
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index, deleteItem } = this.props;
    deleteItem(index);
  }

  // props 更新才会被执行，（组件需要接收 props）才会有触发
  // 一个组件要从父组件接收 props
  // 只要父组件的 render 函数被 “重新” 执行了，子组件的这个生命周期函数就会被执行
  // * 如果这个组件第一次存在于父组件中，不会被执行
  // * 如果这个组件之前已经存在于父组件中，才会被执行
  componentWillReceiveProps() {
    console.log(
      "React lifeCycles: componentWillReceiveProps",
      "TodoItem 组件更新完成之后自动执行"
    );
  }

  // 当这个组件即将从页面移除（销毁）的时候，会被执行
  componentWillUnmount() {
    console.log(
      "React lifeCycles: componentWillUpdate",
      "TodoItem 组件被移除之前自动执行"
    );
  }

  render() {
    const { content, prefix } = this.props;
    return (
      <li onClick={this.handleClick}>
        {prefix} - {content}
      </li>
    );
  }
}

// 对传递的 Prop 进行类型校验
TodoItem.propTypes = {
  prefix: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  deleteItem: PropTypes.func
};

// 默认 prop 值
TodoItem.defaultProps = {
  prefix: "React"
};

export default TodoItem;
