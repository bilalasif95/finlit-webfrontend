import styled from 'styled-components';

const Wrapper = styled.div`
  .basic_info {
    height: 100%;
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
    .form_footer {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export default Wrapper;
