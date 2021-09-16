import styled from 'styled-components';

const Wrapper = styled.div`
  .addcart_detail {
    .main_img {
      margin: 0 0 1rem;
      width: 100%;
      img {
        width: 100%;
      }
    }
    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      width: 100%;
      h4 {
        color: #484848;
        margin: 0;
      }
      .like_share {
        button {
          background-color: transparent;
          border: none;
          color: #8b8b8b;
          margin-left: 1rem;
          padding: 0;
        }
      }
    }
    .date_location {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      .item {
        align-items: center;
        display: flex;
        font-size: 0.875rem;
        flex-direction: row;
        justify-content: flex-start;
        svg {
          color: #8b8b8b;
        }
        p {
          color: #8b8b8b;
          margin: 0 0.5rem;
        }
        .value {
          color: #000;
        }
      }
      .time-item {
        margin-top: 10px;
      }
    }
    .tabs_cont {
      margin: 30px 0 0 25px;
      width: 75%;
      .shedule-head {
        color: #484848;
        font-size: 20px;
      }
      .nav-tabs {
        border-bottom: 1px solid #e4e4e4;
        padding: 0 0 0 1rem;
        .nav-link.active {
          color: #000;
          background-color: #fff;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 3px solid #ffd416;
        }
        .nav-link {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 3px solid #fff;
          color: #8b8b8b;
          cursor: pointer;
          font-size: 0.875rem;
          margin-bottom: 0;
          &:hover {
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 3px solid #fff;
          }
        }
      }
      .tab-content > .tab-pane {
        padding: 1rem 0 0;
        .weekdays {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: 15px;
          }
          .name {
            font-size: 14px;
            color: #b8b8b;
          }
          .time {
            font-size: #000000;
            color: #000000;
          }
        }
        h4 {
          color: #484848;
          font-size: 1.25rem;
          margin: 0;
        }
        p {
          color: #8b8b8b;
          font-size: 0.875rem;
          margin: 0;
        }
      }
    }
    .requirement {
      padding: 1.5rem;
      border: 1px solid #e4e4e4;
      border-radius: 0.313rem;
      margin-top: 30px;
      h4 {
        color: #484848;
        font-size: 1.25rem;
        line-height: 24px;
        margin-bottom: 15px;
      }
      p {
        color: #8b8b8b;
        font-size: 0.875rem;
        line-height: 24px;
      }
    }
  }
`;

export default Wrapper;
