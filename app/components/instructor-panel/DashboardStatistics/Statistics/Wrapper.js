import styled from 'styled-components';

const Wrapper = styled.div`
  .statistics-chart {
    box-shadow: 0px 1px 5px #00000029;
    border-radius: 5px;
    padding: 30px 55px 55px 30px;
    .list-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    h3 {
      font-size: 31px;
      color: #484848;
      margin-bottom: 30px;
    }
    .statistics-list {
      li {
        font-size: 21px;
        color: #484848 !important;
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 25px;
        margin-bottom: 24px;
        img {
          position: absolute;
          left: 0;
        }
      }
    }
  }
  .course-cont {
    box-shadow: 0px 1px 5px #00000029;
    padding: 17px 28px 17px 31px;
    border-radius: 5px;
    h3 {
      color: #484848;
      font-size: 21px;
    }
    .course {
      .course-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
        p {
          color: #484848;
          font-size: 18px;
          width: 50%;
          line-height: 22px;
          -webkit-line-clamp: 2;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
        }
      }
    }
  }
  .recent-cont {
    box-shadow: 0px 1px 5px #00000029;
    border-radius: 5px;
    padding: 30px 30px 69px 30px;
    margin-top: 21px;
    .activities {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 31px;
        color: #484848;
        margin-bottom: 30px;
      }
      button {
        color: #225F2B;
        background: transparent !important;
        border: none;
        font-size: 16px;
      }
    }
    .List-box:not(:last-child) {
      border-bottom: 1px solid #e6e6e6;
    }
    .List-box { 
      padding: 30px 0px;
      h4 {
        font-size: 21px;
        color: #484848 !important;
      }
      p {
        font-size: 18x;
        color: #8b8b8b;
      }
    }
  }
`;

export default Wrapper;
