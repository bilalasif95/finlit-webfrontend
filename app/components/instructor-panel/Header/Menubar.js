import styled from 'styled-components';

const Menubar = styled.div`
  background-color: #255f2b;
  .navbar {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0.5rem 3rem;
  }
  .logo_brand {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: 0 1rem 0 0;
    width: 20%;
    .dropdown {
      margin: 0 0 0 1rem;
      .dropdown-toggle {
        background-color: #47a135;
        border: 1px solid #47a135;
        cursor: not-allowed;
        &:focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
  .nav {
    justify-content: space-between;
    width: 80%;
    .dropdown {
      display: flex;
      justify-content: flex-end;
      padding: 0 0 0 1rem;
      width: 30%;
      .dropdown-toggle {
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        padding: 0;
        width: 200px;
      }
      .dropdown-menu {
        padding: 0 !important;
        top: 1rem !important;
        .dropdown-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #8b8b8b;
          border-bottom: 1px solid #f6f6f6;
          &:last-child {
            border-bottom: none;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          svg {
            margin-right: 0.5rem;
          }
          .notify {
            background-color: #ec5252;
            border-radius: 0.55rem;
            color: #fff;
            margin-left: 1rem;
            padding: 0.05rem 0.25rem;
            font-size: 0.65rem;
            max-width: 30px;
            text-align: center;
          }
        }
      }
    }
  }
  .input-group {
    .form-control {
      background-color: #1b4a21;
      border: 1px solid #1b4a21;
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      color: #fff;
      font-size: 0.875rem;
      &::placeholder {
        color: #fff;
      }
    }
    .input-group-append {
      position: absolute;
      right: 0;
      top: 1px;
      z-index: 5;
    }
    button {
      background-color: transparent;
      border: none;
      padding: 0.5rem 1rem;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .user_account {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    .user_icon {
      border: 1px solid #fff;
      height: 40px;
      width: 40px;
      overflow: hidden;
      border-radius: 2rem;
      img {
        width: 100%;
      }
    }
    .user_name {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 0 0.5rem;
      width: 80%;
      p {
        font-size: 0.875rem;
      }
      span {
        font-size: 0.75rem;
        max-width: 150px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .desk_view {
    width: 70%;
  }
  .res_view {
    display: none;
  }
  @media (max-width: 991px) {
    .navbar {
      margin: 0 auto;
      max-width: 100%;
      padding: 0.5rem 0;
    }
  }
  @media (max-width: 1100px) {
    .logo_brand {
      width: 25%;
    }
    .nav {
      width: 75%;
    }
  }
  @media (max-width: 991px) {
    padding: 0.5rem 0;
    .nav {
      .desk_view {
        width: 65%;
      }
      .dropdown {
        width: 35%;
      }
    }
  }
  @media (max-width: 767px) {
    .nav {
      justify-content: flex-end;
    }
    .input-group {
      width: 100%;
      button {
        padding: 0.25rem 1rem;
      }
    }
    .desk_view {
      display: none;
    }
    .res_view {
      display: block;
      margin: 1.5rem 0 0;
      width: 100%;
    }
  }
  @media (max-width: 575px) {
    .logo_brand {
      .dropdown {
        display: none;
      }
    }
  }
`;

export default Menubar;
