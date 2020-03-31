import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);