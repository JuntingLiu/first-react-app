import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchTrending,
  SearchTrendingTitle,
  SearchTrendingSwitch,
  SearchTrendingList,
  SearchTrendingItem
} from './style';
import { actionCreators } from './store';

class Header extends PureComponent {

  getSearchTrending () {
    const { focused, mouseIn, search_list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = search_list.toJS(); // immutable 对象转换为 JS 对象
    const pageList = [];

    // 异步数据请求到后在执行
    if (newList.length) {
      for (let i = (page - 1) * 10; i < (page * 10); i++) {
        newList[i] && pageList.push(
          <SearchTrendingItem key={newList[i]}>{newList[i]}</SearchTrendingItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchTrending
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <SearchTrendingTitle>
            热门搜索
            <SearchTrendingSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(spin) => {this.spinIcon = spin}} className="iconfont icon-spin"/>
              换一换
            </SearchTrendingSwitch>
          </SearchTrendingTitle>
          <SearchTrendingList>
            { pageList }
          </SearchTrendingList>
        </SearchTrending>
      );
    } else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur, search_list } = this.props;
    return (
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载 APP</NavItem>
            <NavItem className="right">登录</NavItem>
            <NavItem className="right">
              <i className="iconfont icon-Aa"></i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={ focused ? 'focused' : '' }
                  onFocus={() => handleInputFocus(search_list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={ focused ? 'iconfont icon-Magnifier focused zoom' : 'iconfont icon-Magnifier zoom' }></i>
              {/* 热搜面板 */}
              { this.getSearchTrending() }
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
};

const mapStateToProps = (state) => {
  return {
    //  等价于 state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    search_list: state.getIn(['header', 'search_list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      (list.size === 0) && dispatch(actionCreators.searchList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^\d]/ig, '');
      console.log("handleChangePage -> originAngle", originAngle)

      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }

      spin.style.transform = `rotate(${originAngle + 360}deg)`;

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    }
  };
};


export  default  connect(mapStateToProps, mapDispatchToProps)(Header);