import styled from 'styled-components';

const Wrapper = styled.div`
  p {
    color: #9a999a;
    margin: 0 0 1.5rem;
  }
  .form-group {
    margin: 0 0 1.75rem;
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
      padding: 0.75rem 3.25rem 0.75rem 1rem;
    }
  }
  .input-group-text {
    padding: 0.75rem 1rem;
    color: #404041;
    background-color: transparent;
    border: 1px solid transparent;
    position: absolute;
    right: 0;
    z-index: 3;
  }
  .graphics {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .form-group {
      margin: 0;
      width: 65%;
    }
  }
  .view_graphic {
    align-items: center;
    background-color: #eaeaea;
    border: 1px solid #eaeaea;
    border-radius: 0.35rem;
    display: flex;
    justify-content: center;
    margin: 0 1.5rem 0 0;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    svg {
      color: #c0c0c0;
      font-size: 3rem;
    }
    .del_btn {
      background-color: #fff;
      border: none;
      padding: 0;
      position: absolute;
      left: 0.125rem;
      top: 0.125rem;
      svg {
        color: #000;
        font-size: 2rem;
      }
    }
  }
`;

export default Wrapper;
