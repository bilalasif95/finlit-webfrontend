import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .top_detail {
    display: flex;
    flex-direction: column;
    margin: 0 0 1rem;
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
      width: 25%;
      span {
        font-size: 0.875rem;
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
    svg {
      color: #484848;
      font-size: 1.5rem;
    }
  }
  p {
    color: #8b8b8b;
    font-size: 0.875rem;
    margin: 0 0 1rem;
  }
  .form-group {
    margin: 0 0 1rem;
    label {
      color: #484848;
      font-size: 0.875rem;
    }
    .form-control {
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        color: #e6e6e6;
      }
    }
  }
  ul {
    margin: 1rem 0 0;
    li {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0 0 1rem;
      p {
        color: #484848;
        font-size: 0.875rem;
        line-height: 16px;
        margin: 0;
        width: 50%;
        &:last-child {
          text-align: right;
        }
      }
      h4 {
        color: #ec5252;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 24px;
        margin: 0;
        text-align: right;
        width: 50%;
      }
    }
  }
  .term_service {
    p {
      color: #8b8b8b;
      font-size: 0.625rem;
      line-height: 12px;
    }
    a {
      color: #46a135;
      font-size: 0.625rem;
      line-height: 12px;
      text-decoration: none;
    }
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
  .secure_payment {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem 0 0;
    width: 100%;
    svg {
      color: #8b8b8b;
      width: 1.25rem;
      height: 1.25rem;
    }
    p {
      margin: 0;
    }
  }
  @media (max-width: 960px) and (min-width: 768px) {
    margin: 0 0 1.5rem;
    padding: 1.25rem;
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
    padding: 1.25rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export default Wrapper;
