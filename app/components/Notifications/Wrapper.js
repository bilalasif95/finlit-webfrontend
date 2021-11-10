import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  min-width: 29.313rem;
  .title {
    border-bottom: 1px solid #d8d8d8;
    margin: 0 1.5rem;
    padding: 1.5rem 0;
    h4 {
      color: #404041;
      font-size: 1.25rem;
      line-height: 24px;
    }
  }
  .notify_list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 0.5rem 1.5rem;
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0.75rem 0;
      width: 100%;
      svg {
        fill: #ec5252;
      }
      .notify_img {
        border: 1px solid #d8d8d8;
        border-radius: 5rem;
        height: 3.75rem;
        overflow: hidden;
        width: 4.015rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .notify_desc {
        display: flex;
        justify-content: space-between;
        padding: 0 0 0 1rem;
        width: 90%;
        .left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 90%;
          p {
            color: #404041;
            font-size: 0.875rem;
            line-height: 17px;
            margin: 0;
            width: 100%;
          }
          a {
            color: #404041;
            font-size: 0.875rem;
            line-height: 17px;
            font-weight: 550;
            text-decoration: none;
            width: 100%;
          }
          .time {
            color: #8b8b8b;
            font-size: 0.875rem;
            line-height: 17px;
            margin: 0.5rem 0 0;
            width: 100%;
          }
        }
        .right {
          display: flex;
          width: 2rem;
        }
      }
    }
  }
  .mark_read_all {
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem 1.5rem;
    button {
      background-color: transparent;
      border: none;
      color: #3e952e;
      font-size: 0.875rem;
      line-height: 17px;
      font-weight: 550;
      padding: 0;
      &:focus {
        box-shadow: none;
      }
    }
    a {
      color: #3e952e;
      font-size: 0.875rem;
      line-height: 17px;
      font-weight: 550;
      text-decoration: none;
    }
  }
  @media (max-width: 480px) {
    min-width: 19.4rem;
    .title {
      margin: 0 1rem;
      padding: 1rem 0;
    }
    .notify_list {
      padding: 0.5rem 1rem;
    }
    .mark_read_all {
      padding: 1rem;
    }
  }
`;

export default Wrapper;
