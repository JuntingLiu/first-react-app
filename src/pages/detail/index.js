import React from 'react';
import { connect } from 'react-redux';

// 使用 react-loadable 异步组件后，<Router></Router> 上就不是 Detail 组件了，路由信息就接收不到了，这里就需要通过 withRouter 来解决这个问题。
import { withRouter } from 'react-router-dom';
import {
  DetailWrapper,
  Header,
  Content
} from './style';
import * as actionCreators from './store/actionCreators';

class Detail extends React.Component {
  render () {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    // 获取路由参数
    // 方式1: /detail/2 推荐
    const { params: { id } } = this.props.match;
    // 方式2: /detail?id=2
    // const { location: { search }} = this.props;
    this.props.getDetail(id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
});

// 处理 loadable 组件后，route 问题
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));