// import * as constants from './constants';
import { fromJS } from 'immutable';
import * as constants from './constants';
import topic_001 from '../../../statics/images/topic_001.jpeg';
import topic_002 from '../../../statics/images/topic_002.jpg';
import topic_003 from '../../../statics/images/topic_003.jpg';

// 生成一个不可变的 immutable 对象
const initialState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: []
});

export default (state = initialState, action) => {
  switch(action.type) {
    case constants.CHANGE_HOME_DATA:
      const imgArr = [topic_001, topic_002, topic_003];
      const handleArr = ['topicList', 'articleList', 'writerList'];

      // 处理图片数据
      handleArr.forEach(key => {
        action[key] && action[key].forEach(item => {
          if (key === 'writerList') {
            item.avatar = imgArr[Math.floor(Math.random() * 3)];
          } else {
            item.imgUrl = imgArr[Math.floor(Math.random() * 3)];
          }
        });
      });

      // immutable 中 state 有一个 merge api
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
      })
    default:
      return state
  }
};