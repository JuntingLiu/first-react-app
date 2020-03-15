import React from 'react';
// 组件和 store 做连接
import { connect } from 'react-redux';

// 无状态组件
const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleAdd,
    handleDelete
  } = props;
  return (
    <div>
      <div>
        <input type="text" value={ inputValue } onChange={ handleInputChange }/>
        <button onClick={handleAdd}>提交</button>
      </div>
      <ul>
        { list.map((value, index) => {
          return (
          <li onClick={() => handleDelete(index) } key={`${index}_${value}`}>
            {value}
          </li>
          )
        }) }
      </ul>
    </div>
  );
}

// 让组件的 props（state） 和 store 里的 state 关联起来
const mapStoreToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };

      dispatch(action)
    },
    handleAdd() {
      const action = {
        type: 'add_todo_item'
      };
      dispatch(action)
    },
    handleDelete(index) {
      const action = {
        type: 'delete_todo_item',
        index
      };
      dispatch(action)
    }
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(TodoList);