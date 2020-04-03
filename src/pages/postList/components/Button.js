import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children}) => (
<button>{children}</button>
)

// 使用 children 从拥有者接收传递的 react 元素，必须是个 array
// 如果传递的是一个元素，就不是 array 了，而是一个 react 元素类型,
// 所以在类型校验上需要扩展下
Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ])
}

export default Button