import React from 'react';
import { storiesOf } from '@storybook/react'
import List from '../pages/postList/components/List';


const posts = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
  },
]
const posts2 = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
    text: 'Mixins Considered Harmful'
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
    text: 'Mixins Considered Harmful'
  },
]

storiesOf('List', module)
  .add('without text field', () => (
    <List
      collection={posts}
      titleKey="title"
      />
  ))
  .add('with text field', () => (
    <List
      collection={posts2}
      titleKey='title'
      textKey='text'
      />
  ))

// export default {
//   title: 'List',
//   component: List
// }
