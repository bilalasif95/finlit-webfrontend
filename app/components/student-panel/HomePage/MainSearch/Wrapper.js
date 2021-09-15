import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #255f2b;
  padding: 4rem 0;
  .main_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h4 {
      color: #fff;
      margin: 0 0 2rem;
    }
    .obj_cont {
      position: relative;
      .circle {
        background-color: #377d3d;
        border-radius: 5rem;
        width: 96px;
        height: 96px;
        position: absolute;
        right: -2.5rem;
        top: -4rem;
        color: #377d3d;
        z-index: 0;
      }
      .dots {
        top: 0;
        position: absolute;
        right: -3.9rem;
      }
    }
    .search_bar {
      background-color: #fff;
      padding: 0.65rem;
      border-radius: 0.5rem;
      position: relative;
      z-index: 1;
      .form-control {
        border: none;
        &::placeholder {
          color: #8b8b8b;
        }
        &:focus {
          outline: none;
          box-shadow: none;
          border: none;
        }
      }
      button {
        font-size: 0.875rem;
        background-color: #ffd416;
        border: none;
        border-radius: 5px;
        padding: 0.5rem 2.5rem;
        &:hover,
        &:focus {
          outline: none;
          box-shadow: none !important;
          border: none;
          background-color: #e0b809;
        }
      }
    }
    @media (max-width: 767px) {
      .obj_cont {
        .circle {
          right: 0;
          top: -5rem;
        }
        .dots {
          right: 0;
          top: 2.7rem;
        }
      }
    }
    @media (max-width: 480px) {
      .obj_cont {
        .circle {
          top: -3.7rem;
        }
        .dots {
          top: 2.5rem;
        }
      }
      .search_bar {
        background-color: transparent;
        padding: 0;
        .input-group {
          justify-content: center;
        }
        .form-control {
          border-radius: 0.25rem !important;
          width: 100%;
        }
        button {
          margin: 1rem 0 0;
        }
      }
    }
  }
  @media (max-width: 480px) {
    padding: 2rem 0;
    .main_content {
      h4 {
        color: #fff;
        margin: 0 0 1rem;
        z-index: 1;
      }
    }
  }
`;

export default Wrapper;
