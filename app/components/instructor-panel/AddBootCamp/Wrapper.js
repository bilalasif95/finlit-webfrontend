import styled from 'styled-components';

const Wrapper = styled.div`
  // p {
  //   color: #9a999a;
  //   margin: 0 0 1.5rem;
  // }
  .form-group {
    margin: 0 0 1.5rem;
  }
  label {
    color: #404041;
  }
  .jodit {
    p {
      color: #404041;
    }
  }
  .custom {
    .form-control {
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      padding: 0.75rem 1rem 0.75rem 1.6rem;
    }
    .input-group-text {
      padding: 0.75rem 1rem;
      color: #404041;
      background-color: transparent;
      border: 1px solid transparent;
      line-height: 1.3;
      position: absolute;
      left: 0;
      z-index: 3;
    }
  }
`;

export default Wrapper;
