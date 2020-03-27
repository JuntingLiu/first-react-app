import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;

  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  padding-top: 30px;
`;

// Topic
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  /* 充分利用 TopicWrapper 容器的宽度 */
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  box-sizing: border-box;
  float: left;
  height: 32px;
  line-height: 32px;
  /* 充分利用 TopicWrapper 容器的宽度 */
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
