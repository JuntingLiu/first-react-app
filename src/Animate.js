import React, { Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './todoList.css';

class Animate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleToggle() {
    this.setState(() => ({ show: !this.state.show }))
  }
  handleAdd() {
    this.setState((prevState) => ({ list: [...prevState.list, 'item'] }))
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  key={index}
                  in={this.state.show} // 确定动画是否启动
                  timeout={2000} // 动画持续时间
                  classNames='fade' // 类名前缀
                  appear={true} // 一出现就有动画
                  unmountOnExit // 出场动画完成后移除 DOM
                  onEntered={(el) => {el.style.color = 'green'}} // 动画组件的钩子函数
                >
                <p>{item}</p>
                {/* <p className={ this.state.show ? 'show': 'hide' }>React</p> */}
              </CSSTransition>
              )
            })
          }
        </TransitionGroup>

        <button onClick={this.handleAdd}>Add</button>
      </Fragment>
    )
  }
}

export default Animate;