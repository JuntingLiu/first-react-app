import React, { Component } from 'react';
import List from './components/List';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          name: 'Junting',
          desc: 'A handsome coder.'
        },
        {
          name: 'Jerry',
          desc: 'A handsome coder.'
        },
        {
          name: 'Bob',
          desc: 'A handsome coder.'
        },
        {
          name: 'Helen',
          desc: 'A handsome coder.'
        },
      ]
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <List
          collection={posts}
          titleKey='name'
          textKey='desc'
          />
      </div>
    );
  }
}

export default PostList;