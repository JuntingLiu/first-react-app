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
  ]
});

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
};