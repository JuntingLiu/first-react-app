import React from 'react';
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
              <NavSearch></NavSearch>
              <i className="iconfont icon-Magnifier">;</i>
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

export  default  Header;