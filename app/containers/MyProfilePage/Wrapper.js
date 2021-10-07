import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2rem 3rem;
  .profile_sidebar {
    border: 1px solid #d8d8d8;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 5rem 0 0;
    padding: 2.5rem 1rem 10rem;
    h4 {
      text-align: center;
    }
    .pro_img {
      border-bottom: 1px solid #d8d8d8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 100%;
      .inner {
        border: 1px solid #46a135;
        border-radius: 5rem;
        overflow: hidden;
        margin: 0 auto;
        padding: 3px;
        width: 150px;
        img {
          border-radius: 5rem;
          display: block;
          margin: 0 auto;
          width: 100%;
        }
      }
      label {
        color: #46a135;
        cursor: pointer;
        font-size: 1.25rem;
        margin: 1.5rem auto 3rem;
        padding: 0;
      }
      input[type='file'] {
        display: none;
      }
    }
    .nav-tabs {
      border-bottom: none;
      margin: 0.5rem 0 0;
      .nav-item {
        width: 100%;
        &:last-child {
          .nav-link {
            justify-content: space-between;
          }
        }
      }
      .nav-link {
        align-items: center;
        border: none;
        color: #8b8b8b;
        cursor: pointer;
        display: flex;
        font-size: 0.875rem;
        line-height: 17px;
        padding: 0.95rem 1rem;
        svg {
          color: #8b8b8b;
          font-size: 1.25rem;
          margin: 0 0.75rem 0 0;
        }
        &:hover {
          border: none;
        }
      }
      .nav-link.active {
        border-radius: 5px;
        color: #404041;
        background-color: #e7ece5;
        border-color: #dee2e6 #dee2e6 #fff;
      }
    }
  }
  h4 {
    color: #404041;
    font-weight: 400;
    margin: 0 0 1.5rem;
  }
  .tab-content {
    height: 100%;
    padding: 0 0 5rem;
    position: relative;
  }
  @media (max-width: 1199px) {
    padding: 2rem 0;
    .profile_sidebar {
      margin: 0 2rem 0 0;
    }
  }
  @media (max-width: 991px) {
    .profile_sidebar {
      margin: 0;
    }
  }
  @media (max-width: 767px) {
    .profile_sidebar {
      margin: 0 0 1.5rem;
      padding: 2.5rem 1rem;
    }
  }
`;

export default Wrapper;
