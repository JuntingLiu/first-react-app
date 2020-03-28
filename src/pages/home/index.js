import React from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
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
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchHomeData();
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeData() {
    const action = actionCreators.fetchHomeData();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);