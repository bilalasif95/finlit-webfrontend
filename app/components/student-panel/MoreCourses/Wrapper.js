import styled from 'styled-components';

const Wrapper = styled.footer`
  .card {
    border-radius: 10px;
    .card-body {
      padding: 20px 20px 0px 20px;
      .card-title {
        font-size: 20px;
        color: #404041;
        margin-bottom: 20px;
      }
      .cardList {
        display: flex;
        margin-bottom: 35px;
        li {
          color: #404041;
          font-size: 16px;
          font-weight: 700;
          &:not(:last-child) {
            margin-right: 25px;
          }
          img {
            height: 30px;
            width: 30px;
            margin-right: 10px;
          }
        }
      }
    }
    .card-footer {
      background-color: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      .price {
        h4 {
          font-size: 20px;
          color: #404041;
          font-weight: 700;
        }
      }
      .addCart {
        display: flex;
        align-items: center;
        button {
          font-size: 14px;
          color: #3e952e;
          font-weight: 700;
          img {
            margin-right: 6px;
          }
        }
      }
    }
  }
  h2 {
    font-size: 24px;
    color: #404041;
    margin-bottom: 30px;
  }
`;

export default Wrapper;
