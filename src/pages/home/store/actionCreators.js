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

const getMoreList = (data, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  articleList: data,
  nextPage
});
export const loadMoreHomeList = (page) => {
  return (dispatch) => {
    Axios.get(`/api/homeList.json?page=${page}`).then(res => {
      const { data: { ret, data } } = res;
      if (ret === 0) {
        dispatch(getMoreList(data, ++page));
      } else {
        console.error('[API] 获取更多文章失败');
      }
    }).catch(err => {
      console.log("loadMoreHomeList -> err", err)
    })
  }
};

// 返回顶部 显示与隐藏
export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
});