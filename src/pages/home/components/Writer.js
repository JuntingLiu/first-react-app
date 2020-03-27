import React from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterList,
  WriterItem
} from '../style'

class Writer extends React.Component {
  render() {
    const { list } = this.props;

    return(
      <WriterWrapper>
        <WriterTitle>
          <span className="title">推荐作者</span>
          <span className="change">
            <i ref={(spin) => {this.spinIcon = spin}} className="iconfont icon-spin"/>
            换一换
          </span>
        </WriterTitle>
        <WriterList>
          {
            list.map((item) => (
              <WriterItem key={item.get('id')}>
                <img className="avatar" src={item.get('avatar')} alt=""/>
                <span className="follow">
                  <i className="iconfont icon-plus"></i>
                  关注
                </span>
                <span className="name">{item.get('name')}</span>
                <p>{item.get('desc')}</p>
              </WriterItem>
            ))
          }
        </WriterList>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
});

export default connect(mapStateToProps, null)(Writer);