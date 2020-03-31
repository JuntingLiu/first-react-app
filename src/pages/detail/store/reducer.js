import { fromJS } from 'immutable';
import * as constants from './constants';
import topic_001 from '../../../statics/images/topic_001.jpeg';

const initialState = fromJS({
  title: '',
  content: `<img src="${topic_001}" alt=""/>`
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      const { title, content } = action;
      return state.merge({
        title,
        content: state.get('content') + content
      })
    default:
      return state
  }
};
