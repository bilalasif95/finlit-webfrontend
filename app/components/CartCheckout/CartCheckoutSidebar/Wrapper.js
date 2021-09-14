import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 0.313rem;
  padding: 2rem;
  margin: 0 0 2rem;
  width: 100%;
  .heading {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 0 1rem;
    h4 {
      color: #484848;
      font-size: 1.25rem;
      margin: 0;
      position: relative;
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
  fieldset {
    margin: 0 0 1rem;
    padding: 0;
    .form-check {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin: 0 0 0.5rem;
      label {
        color: #484848;
        font-size: 0.875rem;
        margin: 0;
      }
    }
    .form-check-input:focus {
      box-shadow: none;
    }
    .form-check-input:checked {
      background-color: transparent;
      border-color: #255f2b;
    }
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
    }
  }
  .form-check {
    label {
      color: #8b8b8b;
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
