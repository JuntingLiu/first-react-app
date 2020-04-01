import * as constants from './constants';
import Axios from 'axios';

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});
export const login = (account, password) => {
  return (dispatch) => {
    Axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      console.log("login -> res", res)
      const { ret, msg } = res.data;
      if (ret === 0) {
        alert(msg)
        dispatch(changeLogin());
      } else {
        console.log('[Login failed]:', msg);
      }
    }).catch(err => {
      console.log("login -> err", err)
    })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});