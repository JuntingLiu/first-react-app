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
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

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
                in={this.state.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={ this.state.focused ? 'focused' : '' }
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={ this.state.focused ? 'iconfont icon-Magnifier focused' : 'iconfont icon-Magnifier' }></i>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};


export  default  connect(mapStateToProps, mapDispatchToProps)(Header);