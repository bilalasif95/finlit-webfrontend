import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .top_detail {
    display: flex;
    flex-direction: column;
    margin: 30px 0 16px;
    .prices {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      h4 {
        color: #ec5252;
        font-size: 1.25rem;
        font-weight: 550;
        margin: 0;
      }
      del {
        color: #8b8b8b;
        font-size: 0.875rem;
        margin: 0 0.5rem;
      }
      span {
        color: #8b8b8b;
        font-size: 0.875rem;
      }
    }
    .rating {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      margin: 1rem 0;
      width: 100%;
      span {
        font-size: 0.875rem;
      }
      p {
        color: #484848;
        margin: 0 0 0 0.5rem;
      }
      .stars {
        margin-left: 0.5rem;
        svg {
          g {
            path:last-child {
              fill: #fbbf2e;
            }
          }
        }
      }
    }
    .event_link {
      border: 1px solid #707070;
      border-radius: 0.313rem;
      color: #8b8b8b;
      font-size: 0.875rem;
      padding: 0.85rem;
      text-align: center;
      text-decoration: none;
    }
    button {
      background-color: #46a135;
      border: 1px solid #46a135;
      border-radius: 0.313rem;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 550;
      line-height: 17px;
      margin: 1rem 0 0;
      padding: 0.85rem;
      width: 100%;
      &:hover {
        background-color: #46a135;
        border: 1px solid #46a135;
      }
      &:focus {
        background-color: #46a135;
        border: 1px solid #46a135;
        box-shadow: none;
      }
    }
  }
  .details {
    background-color: #fbfbfb;
    margin: 1rem 0 0;
    padding: 2rem;
    h4 {
      color: #484848;
      font-size: 1.25rem;
      line-height: 24px;
      margin: 0 0 1rem;
    }
    ul {
      margin: 1rem 0 0;
      li {
        align-items: center;
        display: flex;
        color: #484848;
        font-size: 0.875rem;
        line-height: 17px;
        justify-content: space-between;
        padding: 0 0 1rem;
        svg {
          margin: 0 0.5rem 0 0;
        }
        p {
          margin: 0;
          width: 100%;
        }
      }
    }
    .form-group {
      margin: 1.5rem 0 1rem;
      position: relative;
      label {
        color: #484848;
        font-size: 0.875rem;
      }
      .form-control {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
        padding: 0.6rem 1rem;
        &:focus {
          box-shadow: none;
        }
        &::placeholder {
          color: #e6e6e6;
        }
      }
      button {
        background-color: #46a135;
        border: 1px solid #46a135;
        border-top-right-radius: 0.313rem;
        border-bottom-right-radius: 0.313rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 550;
        line-height: 17px;
        padding: 0.72rem;
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        &:hover {
          background-color: #46a135;
          border: 1px solid #46a135;
        }
        &:focus {
          background-color: #46a135;
          border: 1px solid #46a135;
          box-shadow: none;
        }
      }
    }
  }

  @media (max-width: 991px) {
    .details {
      padding: 1rem;
      .form-group {
        margin: 0.5rem 0 0;
      }
    }
  }
  @media (max-width: 960px) and (min-width: 768px) {
    margin: 0 0 1.5rem;
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;

export default Wrapper;
