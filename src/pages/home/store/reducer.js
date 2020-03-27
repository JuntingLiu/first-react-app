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
  ],
  articleList: [
    {
      id: 1,
      title: '写作我是认真的',
      desc: '我写小说刚好一个月了。家里人问我，这一个月都在捣鼓的事情，挣了多少钱了？ 我听了觉得特别不舒服。 因为我一分钱没赚到。 书没签约平台，自然赚不到钱。 可是在家人看来，我天天码字，貌似很辛苦，而且非常没有时间。 但是却没有收益，那不是很讽刺人吗？',
      imgUrl: topic_001
    },
    {
      id: 2,
      title: '写作我是认真的',
      desc: '我写小说刚好一个月了。家里人问我，这一个月都在捣鼓的事情，挣了多少钱了？ 我听了觉得特别不舒服。 因为我一分钱没赚到。 书没签约平台，自然赚不到钱。 可是在家人看来，我天天码字，貌似很辛苦，而且非常没有时间。 但是却没有收益，那不是很讽刺人吗？',
      imgUrl: topic_002
    },
    {
      id: 3,
      title: '写作我是认真的',
      desc: '我写小说刚好一个月了。家里人问我，这一个月都在捣鼓的事情，挣了多少钱了？ 我听了觉得特别不舒服。 因为我一分钱没赚到。 书没签约平台，自然赚不到钱。 可是在家人看来，我天天码字，貌似很辛苦，而且非常没有时间。 但是却没有收益，那不是很讽刺人吗？',
      imgUrl: topic_003
    },
    {
      id: 4,
      title: '写作我是认真的',
      desc: '我写小说刚好一个月了。家里人问我，这一个月都在捣鼓的事情，挣了多少钱了？ 我听了觉得特别不舒服。 因为我一分钱没赚到。 书没签约平台，自然赚不到钱。 可是在家人看来，我天天码字，貌似很辛苦，而且非常没有时间。 但是却没有收益，那不是很讽刺人吗？',
      imgUrl: topic_001
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: 'https://www.jianshu.com/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },
    {
      id: 2,
      imgUrl: 'https://www.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },
    {
      id: 3,
      imgUrl: 'https://www.jianshu.com/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },
    {
      id: 4,
      imgUrl: 'https://www.jianshu.com/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    },
  ],
  writerList: [
    {
      id: 1,
      name: '卢璐说',
      avatar: topic_001,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
    {
      id: 2,
      name: '老子',
      avatar: topic_002,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
    {
      id: 3,
      name: '小刚',
      avatar: topic_003,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
    {
      id: 4,
      name: '嘎吱',
      avatar: topic_001,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
    {
      id: 5,
      name: '天天',
      avatar: topic_002,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
    {
      id: 6,
      name: '倾诉',
      avatar: topic_003,
      desc: '写了1477.9k字 · 30.7k喜欢'
    },
  ]
});

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
};