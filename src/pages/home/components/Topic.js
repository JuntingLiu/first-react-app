import React from 'react';
import {
  TopicWrapper,
  TopicItem
} from '../style';
import { connect } from 'react-redux';

class Topic extends React.PureComponent {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {
          // list 是一个 immutable 的数组
          list.map((item) => {
            return (
              <TopicItem key={item.get('id')}>
                <img className="topic-pic" src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'topicList'])
});
// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(Topic);