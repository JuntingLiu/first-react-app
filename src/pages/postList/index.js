import React, { Component } from 'react';
import List from './components/List';
import Button from './components/Button'

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          name: 'Junting',
          desc: 'A handsome coder.'
        },
        {
          id: 2,
          name: 'Jerry',
          desc: 'A handsome coder.'
        },
        {
          id: 3,
          name: 'Bob',
          desc: 'A handsome coder.'
        },
        {
          id: 4,
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
        <Button>
          {/* <p>😂😄😁</p> */}
          <span>CLick me</span>
        </Button>
      </div>
    );
  }
}

export default PostList;