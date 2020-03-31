import * as constants from './constants';
import Axios from 'axios';

const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title,
  content
});
export const getDetail = (id) => {
  return (dispatch) => {
    Axios.get('/api/detail.json?id=' + id).then(res => {
      const { ret, data } = res.data;
      if (ret === 0){
        const { title, content } = data;
        dispatch(changeDetail(title, content));
      }
    }).catch(err => {
      console.log("getDetail -> err", err);
    })
  };
};