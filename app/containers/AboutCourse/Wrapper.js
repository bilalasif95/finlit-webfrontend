import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem 0 0;
  .top_info {
    padding: 0 0 2rem;
    h6 {
      color: #8b8b8b;
      font-size: 1.25rem;
      line-height: 24px;
      margin: 0 0 0.25rem;
    }
    b {
      color: #404041;
      font-size: 0.875rem;
      line-height: 17px;
    }
    p {
      color: #8b8b8b;
      font-size: 0.875rem;
      line-height: 17px;
      margin: 0.25rem 0 0;
    }
  }
  .user_details {
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    padding: 1.5rem 0;
    .col-lg-8 {
      p {
        width: 25%;
        &:last-child {
          font-weight: 600;
          text-align: left;
          width: 75%;
        }
      }
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        display: flex;
        justify-content: space-between;
        margin: 0 0 1rem;
        &:last-child {
          margin: 0;
        }
        p {
          color: #404041;
          font-size: 0.875rem;
          line-height: 17px;
          margin: 0;
          width: 50%;
          &:last-child {
            font-weight: 600;
            text-align: left;
            width: 50%;
          }
        }
      }
    }
  }
  .get_certificate {
    padding: 1.5rem 0;
    button {
      background-color: transparent;
      border: 1px solid #3e952e;
      color: #3e952e;
      font-size: 0.875rem;
      margin: 1.5rem 0 0;
      padding: 0.75rem 1.5rem;
    }
  }
  @media (max-width: 991px) {
    .user_details {
      .col-lg-8 {
        p {
          width: 50%;
          &:last-child {
            width: 50%;
          }
        }
      }
      li {
        margin: 0 0 1rem;
      }
    }
  }
  @media (max-width: 767px) {
    .user_details {
      .col-lg-8 {
        li:last-child {
          margin: 0;
        }
      }
      li {
        margin: 0 0 1rem;
        &:last-child {
          margin: 0 0 1rem !important;
        }
        p {
          width: 26% !important;
          &:last-child {
            width: 74% !important;
          }
        }
      }
    }
  }
  @media (max-width: 575px) {
    .user_details {
      li {
        flex-wrap: wrap;
        p {
          margin: 0 0 0.5rem !important;
          width: 100% !important;
          &:last-child {
            margin: 0;
            width: 100% !important;
          }
        }
      }
    }
  }
`;

export default Wrapper;
