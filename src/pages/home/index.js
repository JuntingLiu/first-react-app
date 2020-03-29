import React from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from  './style';
import BannerUrl from '../../statics/images/banner_1.jpg';
import { actionCreators } from './store'

class Home extends React.Component {
  render () {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" src={BannerUrl} alt=""/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
          {
            this.props.showScrollTop && <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
          }
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchHomeData();
    this.bindEvents();
  }

  handleScrollTop() {
    window.scroll(0, 0);
  }

  // 监听 scroll
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScrollTop: state.getIn(['home', 'showScrollTop'])
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData() {
    const action = actionCreators.fetchHomeData();
    dispatch(action);
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);