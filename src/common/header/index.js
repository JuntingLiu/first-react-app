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
import { actionCreators } from './store';

const Header = (props) => {
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
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={ props.focused ? 'focused' : '' }
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={ props.focused ? 'iconfont icon-Magnifier focused' : 'iconfont icon-Magnifier' }></i>
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
};

const mapStateToProps = (state) => {
  const { header } = state;
  return {
    focused: header.focused
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    }
  };
};


export  default  connect(mapStateToProps, mapDispatchToProps)(Header);