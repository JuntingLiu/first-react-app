import React, { Component, Fragment} from 'react';
import './todoList.css';

class Animate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(() => ({ show: !this.state.show }))
  }

  render() {
    return (
      <Fragment>
        <p className={ this.state.show ? 'show': 'hide' }>React</p>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }
}

export default Animate;