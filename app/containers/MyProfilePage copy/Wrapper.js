import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 1.5rem 3rem;
  .col-sm-6,
  .col-md-4,
  .col-lg-4 {
    border-right: 1px solid #dcdcdc;
  }
  .my_profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem 3rem;
    h4 {
      text-align: center;
    }
    .pro_img {
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      overflow: hidden;
      width: 160px;
      img {
        display: block;
        margin: 0 auto;
        width: 100%;
      }
    }
    .user_type {
      color: #404041;
      margin: 0 0 1.5rem;
      text-align: center;
    }
    p {
      color: #9a999a;
      margin: 0 0 1.5rem;
      text-align: center;
    }
    button {
      background-color: #acacac;
      border: 1px solid #acacac;
      color: #fff;
      margin: 0 auto;
      width: 180px;
    }
  }
  .basic_info {
    padding: 0 0 0 3rem;
    .col-sm-6,
    .col-md-4,
    .col-lg-4 {
      border-right: none;
    }
    .form-group {
      margin: 0 0 1rem;
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
  }
  h4 {
    color: #404041;
    font-weight: 400;
    margin: 0 0 1.5rem;
  }
  @media (max-width: 991px) {
    padding: 1.5rem 0;
    .my_profile {
      padding: 0 1rem 3rem;
    }
    .basic_info {
      padding: 0;
    }
  }
  @media (max-width: 767px) {
    .col-sm-6,
    .col-md-4,
    .col-lg-4 {
      border-bottom: 1px solid #dcdcdc;
      border-right: none;
    }
    .my_profile {
      padding: 0 0 1.5rem;
    }
    .basic_info {
      padding: 1.5rem 0 0;
      .col-sm-6,
      .col-md-4,
      .col-lg-4 {
        border-bottom: none;
        border-right: none;
      }
    }
  }
`;

export default Wrapper;
