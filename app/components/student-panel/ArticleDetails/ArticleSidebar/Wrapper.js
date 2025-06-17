import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f8f9fb;
  padding: 2rem;
  margin: 0 0 2rem;
  width: 100%;
  h4 {
    color: #000;
    font-size: 1.5rem;
    padding: 0 0 0.625rem;
    position: relative;
    .btm_line {
      background-color: #ffd416;
      bottom: 0;
      display: block;
      height: 0.313rem;
      left: 0;
      position: absolute;
      width: 3.313rem;
    }
  }
  .input-group {
    margin: 2rem 0 0;
    .form-control {
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      &:focus {
        box-shadow: none;
      }
    }
    button {
      background-color: transparent;
      border-color: transparent;
      color: #000;
      position: absolute;
      right: 0;
      top: -2px;
      z-index: 4;
      &:focus {
        box-shadow: none;
      }
    }
    .btn-secondary {
      background-color: transparent;
      border-color: transparent;
    }
  }
  ul {
    margin: 1rem 0 0;
    padding: 0;
    li {
      border-bottom: 1px solid #e4e4e4;
      list-style: none;
      padding: 1rem 0;
      a {
        color: #000;
        font-size: 0.875rem;
        line-height: 16px;
        text-decoration: none;
      }
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
