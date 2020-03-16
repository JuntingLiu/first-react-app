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
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: green;
`;