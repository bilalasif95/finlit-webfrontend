import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .create_course {
    height: 100%;
    width: 100%;
    .form-group {
      margin: 0 0 2rem;
    }
    .input-group {
      position: relative;
      .form-control {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
        color: #8d8d8d;
      }
      .input-group-append {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
        button {
          display: flex;
          background-color: transparent;
          border: none;
          color: #8d8d8d;
          padding: 0.7rem;
          &:focus {
            box-shadow: none;
            outline: none;
          }
        }
      }
    }
    textarea {
      max-height: 10rem;
      min-height: 10rem;
    }
    .custom {
      .form-control {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
        padding: 0.75rem 1rem 0.75rem 3rem;
      }
    }
    .input-group-text {
      padding: 0.75rem 1rem;
      color: #404041;
      background-color: transparent;
      border: 1px solid transparent;
      position: absolute;
      left: 0;
      z-index: 3;
    }
  }
`;

export default Wrapper;
