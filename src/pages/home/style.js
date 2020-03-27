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
  /* 充分利用 TopicWrapper 容器的宽度 */
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  box-sizing: border-box;
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

// List
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;

  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  float: left;
  width: 500px;

  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    display: -webKit-box;
    -webKit-line-clamp: 2; // 控制几行显示省略号
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;