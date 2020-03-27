// import * as constants from './constants';
import { fromJS } from 'immutable'
import topic_001 from '../../../statics/images/topic_001.jpeg';
import topic_002 from '../../../statics/images/topic_002.jpg';
import topic_003 from '../../../statics/images/topic_003.jpg';

// 生成一个不可变的 immutable 对象
const initialState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: topic_001
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: topic_002
    },
    {
      id: 3,
      title: '动漫',
      imgUrl: topic_003
    },
  ]
});

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
};