import React from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav
} from './style';

class Header extends React.Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo/>
          <Nav/>
        </HeaderWrapper>
      </div>
    )
  }
}

export  default  Header;