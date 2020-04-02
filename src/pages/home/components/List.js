import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
import PropTypes from "prop-types";

class List extends React.PureComponent {
  render() {
    const { list, handleLoadMore, page } = this.props;

    return (
      <div>
        {
          list.map((item, index) => (
            <Link to={'/detail/' + item.get('id')} key={index}>
              <ListItem>
                <img className="pic" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => {handleLoadMore(page)}}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
  handleLoadMore(page) {
    dispatch(actionCreators.loadMoreHomeList(page));
  }
});

List.propTypes = {
  test: PropTypes.string.isRequired
}

List.defaultProps = {
  test: 'test'
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
