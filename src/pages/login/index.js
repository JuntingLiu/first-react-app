import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from './store/actionCreators';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';

class Login extends Component{
  render () {
    const {login, handleLogin} = this.props;

    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/* ref 传递的是一个 StyledComponent 组件，提取不到输入信息了，不是一个 DOM；需要换成 innerRef */}
            <Input placeholder="账号" innerRef={ input => this.account = input }/>
            <Input placeholder="密码" type="password" innerRef={ input => this.password = input }/>
            <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }

  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin(accountEl, passwordEl) {
    dispatch(actionCreators.login(accountEl.value, passwordEl.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);