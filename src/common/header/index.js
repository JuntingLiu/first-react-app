import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

class Header extends React.Component {

  handleInputFocus() {
    this.setState({
      focused: true
    });
  }

  handleInputBlur() {
    this.setState({
      focused: false
    });
  }

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载 APP</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont icon-Aa"></i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.props.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={ this.props.focused ? 'focused' : '' }
                  onFocus={this.props.handleInputFocus}
                  onBlur={this.props.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={ this.props.focused ? 'iconfont icon-Magnifier focused' : 'iconfont icon-Magnifier' }></i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="registered">注册</Button>
            <Button className="writting">
              <i className="iconfont icon-write"></i> 写文章
            </Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur () {
      const action = { type: 'search_blur' };
      dispatch(action);
    }
  };
};


export  default  connect(mapStateToProps, mapDispatchToProps)(Header);