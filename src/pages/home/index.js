import React from 'react';
import Topic from './components/topic';
import List from './components/list';
import Recommend from './components/recommend';
import Writer from './components/writer';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from  './style';
import BannerUrl from '../../statics/images/banner_1.jpg';

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
}

export default Home;