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
