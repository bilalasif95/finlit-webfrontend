import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 0.625rem;
  margin: 30px 0 16px;
  width: 100%;
  .top_detail {
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    .prices {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 0 0.5rem;
      width: 100%;
      .old_price {
        align-items: center;
        display: flex;
        justify-content: flex-start;
      }
      h4 {
        color: #404041;
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
      }
      del {
        color: #8b8b8b;
        font-size: 0.875rem;
        margin: 0 1rem 0 0;
      }
      span {
        background-color: #ffd416;
        border-radius: 0.188rem;
        color: #404041;
        font-size: 0.625rem;
        font-weight: 550;
        padding: 0.25rem 0.5rem;
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
    .enroll_now {
      background-color: transparent;
      border: 1px solid #707070;
      color: #8b8b8b;
      svg {
        path {
          stroke: #8b8b8b;
        }
      }
    }
    .add_cart {
      background-color: #46a135;
      border: 1px solid #46a135;
      color: #fff;
      svg {
        path {
          stroke: #fff;
        }
      }
    }
    button {
      border-radius: 0.313rem;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 550;
      line-height: 17px;
      font-size: 0.875rem;
      padding: 0.85rem;
      text-align: center;
      text-decoration: none;
      margin: 1rem 0 0;
      padding: 0.85rem;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      position: relative;
      width: 100%;
      &:hover,
      &:focus {
        box-shadow: none;
      }
    }
    button, span {
      transition: 200ms;
    }
    
    .text {
      width: 100%;
    }
    
    .icon {
      position: absolute;
      transform: translateX(0);
      height: 1.25rem;
      width: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
     svg {
      font-size: 1.25rem;
    }
    button:hover .text {
      color: transparent;
    }
    
    button:hover .icon {
      width: 90%;
      transform: translateX(0);
    }
  }
  .details {
    padding: 1.5rem;
    h4 {
      color: #404041;
      font-size: 1.25rem;
      line-height: 24px;
      margin: 0 0 1rem;
    }
    ul {
      margin: 1rem 0 0;
      padding: 0;
      li {
        align-items: center;
        display: flex;
        color: #484848;
        font-size: 0.875rem;
        line-height: 17px;
        list-style: none;
        justify-content: flex-start;
        padding: 0 0 1rem;
        svg {
          font-size: 1.25rem;
          margin: 0 1rem 0 0;
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
