import styled from 'styled-components';
import logoPic from '../../statics/images/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position:  absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Nav = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 100%;
  padding-right: 70px;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 26px;
  padding: 15px;
  margin-right: 10px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }

  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;

  .iconfont {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    // background: red;
    text-align: center;
    color: #969696;

    &.focused {
      background: #777;
      color: #FFF;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;

  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }

  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;

  &.registered {
    color: #ec6149;
  }

  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;