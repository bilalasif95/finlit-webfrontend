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
      border: 1px solid #e4e4e4;
      border-radius: 0.313rem;
      margin: 1.5rem 0 0;
      padding: 1rem 2rem 2rem;
      .nav-tabs {
        border-bottom: 1px solid #e4e4e4;
        padding: 0 1rem;
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
      h4 {
        color: #484848;
        font-size: 1.25rem;
        line-height: 24px;
      }
      ul {
        margin: 0 0 0 1.2rem;
        li {
          color: #8b8b8b;
          font-size: 0.875rem;
          line-height: 24px;
          list-style: disc;
        }
      }
    }
  }
`;

export default Wrapper;
