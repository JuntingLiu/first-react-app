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
  border-bottom: 1px solid #f0f0f0;

  .pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 4px;
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

// Recommend
export const RecommendWrapper = styled.div`
  width: 280px;
  /* margin: 30px 0; */
`;

export const RecommendItem = styled.div`
  width: 100%;
  min-height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
  margin-bottom: 6px;
  border-radius: 4px;
`;

// Writer
export const WriterWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
  text-align: center;
`;

export const WriterTitle = styled.div`
  text-align: left;
  font-size: 14px;
  color: #969696;

  .change {
    float: right;
    display: block;

    .icon-spin {
      display: inline-block; // block 元素动画才会生效
      font-size: 12px;
      margin-right: 5px;
      transition: all 0.2s ease-in;
      transform-origin: center;
    }
  }
`;

export const WriterList = styled.div`
  margin: 0 0 20px;
  text-align: left;
`;

export const WriterItem = styled.div`
  margin-top: 15px;
  line-height: 20px;
  overflow: hidden;

  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  .follow {
    float: right;
    margin-top: 5px;
    color: #42c02e;
    line-height: 15px;
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    overflow: hidden;

    .icon-plus {
      display: block;
      float: left;
    }
  }

  .name {
    display: block;
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    cursor: pointer;
  }

  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
    margin: 0 0 10px;
  }
`;

// Load more
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px auto 60px;
  background-color: #a5a5a5;
  border-radius: 20px;
  text-align: center;
  color: #FFF;
  font-size: 15px;
  cursor: pointer;
`;

// BackTop
export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  cursor: pointer;
`;