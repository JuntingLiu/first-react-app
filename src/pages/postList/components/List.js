import React from 'react';
import PropTypes from 'prop-types';

/**
 * List Item 组件元素
 * @param {String} title 标题
 * @param {String} text 内容，没有就不显示
 */
const Item = ({ title, text }) => (
  <li>
    <h2>{ title }</h2>
    { text && <p>{ text }</p> }
  </li>
)

Item.propTypes = {
  /**
   * 标题
   */
  title: PropTypes.string,
  /**
   * 内容
   */
  text: PropTypes.string
};

/**
 * List 组件
 * @param {Array} collection 集合
 * @param {String} titleKey 标题的 key
 * @param {String} textKey 内容的 key
 */
const List =  ({ collection, titleKey, textKey }, context) => {
  return (
    <ul>
      {
        collection.map((item) => (
          <Item
            key={item.id}
            title={item[titleKey]}
            text={item[textKey]}
            />
        ))
      }
    </ul>
  )
}

List.propTypes = {
  /**
   * 集合
   */
  collection: PropTypes.array,
  titleKey: PropTypes.string,
  textKey: PropTypes.string
};

export default List;