import Axios from 'axios';
import * as constants from './constants'

const changeHemeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
  writerList: data.writerList
});

export const fetchHomeData = () => {
  return (dispatch) => {
    Axios.get('/api/home.json').then(res => {
      const { data: { ret, data } } = res;
      if (ret === 0) {
        dispatch(changeHemeData(data));
      } else {
        alert('[API] 获取首页相关数据失败！！！')
      }
    }).catch(err => {
      console.log("Home -> componentDidMount -> err", err)
    });
  }
}