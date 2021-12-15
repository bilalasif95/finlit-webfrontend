import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .top-layer {
    align-items: center;
    display: inherit;
    justify-content: space-between;
    width: 100%;
    button {
      align-items: center;
      background-color: transparent;
      border: none;
      color: #404041;
      display: flex;
      font-size: 1rem;
      font-weight: 520;
      justify-content: flex-start;
      padding: 1rem 1.25rem;
      text-align: left;
      width: 80%;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .add_lec_quiz {
    align-items: center;
    display: inherit;
    justify-content: flex-start;
    padding: 0 1rem 1rem 1.5rem;
    button {
      background-color: transparent;
      border: none;
      color: #41952e !important;
      font-weight: 400  !important; 
      margin: 0 1rem 0 0;
      padding: 0;
      min-width: 8rem;
      &:focus {
        box-shadow: none;
      }
      svg {
        color: #41952e;
        height: 1.5rem;
        margin: 0 0.5rem 0 0;
        width: 1.5rem;
      }
    }
  }
`;

export default Wrapper;
