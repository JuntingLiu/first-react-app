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
    this.props.getDetail()
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content']),
});

const mapDispatchToProps = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Detail);