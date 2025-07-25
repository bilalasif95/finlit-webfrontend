/**
 * Menubar
 */

import styled from 'styled-components';

const Menubar = styled.div`
  background-color: #fff;
  box-shadow: 0px 5px 21px 0px rgba(0, 0, 0, 0.14);
  z-index: 1;
  .d_res {
    display: none !important;
  }
  .input-group {
    .form-control {
      background-color: #f9f9f9;
      border: 1px solid #f9f9f9;
      border-radius: 2.5rem !important;
      color: #404041;
      font-size: 0.875rem;
      padding: 0.65rem 1rem 0.65rem 3rem;
      &::placeholder {
        color: #8b8b8b;
      }
      &:focus {
        z-index: 0;
      }
    }
    .input-group-append {
      position: absolute;
      left: 0;
      top: 1px;
      z-index: 1;
    }
    button {
      background-color: transparent;
      border: none;
      color: #8b8b8b;
      padding: 0.5rem 1rem;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .nav_right {
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
  .alert_dropdown {
    display: flex;
    justify-content: center;
    margin: 0 1.5rem 0 0 !important;
    .nav-link {
      position: relative;
      .count {
        background-color: #ec5252;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 0.65rem;
        padding: 2px;
        line-height: normal;
        position: absolute;
        right: -0.6rem;
        top: 0.25rem;
      }
    }
    .dropdown-toggle::after {
      display: none;
    }
  }
  .dropdown-menu {
    box-shadow: 0px 0px 25px 5px #00000029;
    border: none;
    border-radius: 0.5rem;
    overflow: hidden;
    padding: 0;
    top: 1.55rem !important;
  }
  .mycart {
    .dropdown-menu {
      left: 200px !important;
    }
  }
  .notify {
    .dropdown-menu {
      left: 155px !important;
    }
  }
  .registration {
    max-width: 45%;
    .dropdown {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      padding: 0 0 0 1rem;
      width: 100%;
      .dropdown-toggle {
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: flex-end;
        padding: 0;
        width: 100%;
      }
      .dropdown-toggle::after {
        color: black;
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
          font-weight: 550;
          color: #404041;
          // border-bottom: 1px solid #f6f6f6;
          &:active {
            background: initial;
          }
          &:last-child {
            border-bottom: none;
          }
          svg {
            color: #404041;
            font-size: 1.25rem;
            margin-right: 1rem;
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
    .navbar-nav {
      justify-content: flex-end;
      .nav-item:last-child {
        .nav-link {
          border: 1px solid #255f2b;
          border-radius: 3px;
          padding: 0.5rem 0.75rem;
        }
      }
    }
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .navbar {
    padding: 1rem 0;
    .logo {
      padding: 0;
      width: 3.5rem;
    }
    svg {
      color: #8b8b8b;
      font-size: 1.25rem;
    }
  }
  .nav-item {
    margin: 0 0.2rem;
    position: relative;
    list-style: none;
  }
  .navbar-nav {
    align-items: center;
  }
  .navbar-collapse {
    justify-content: space-between;
    margin: 0;
  }
  .nav-link {
    color: #255f2b;
    font-size: 0.875rem;
    font-weight: 500;
    word-break: keep-all;
    line-height: 14px;
    padding: 0.5rem 0;
    text-decoration: none;
    &:focus,
    &:hover {
      color: #255f2b;
    }
  }
  .dropdown-toggle::after {
    margin-left: 0.7rem;
  }
  .dropdown-item {
    font-size: 0.8rem;
    font-weight: 500;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .navbar-toggler {
    padding: 0;
  }
  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: '';
    background: url(https://i.imgur.com/aZKcsWl.png);
    background-size: 100% 100%;
  }

  @media (max-width: 1100px) and (min-width: 992px) {
    .navbar-collapse {
      width: 60%;
    }
    .registration {
      .dropdown {
        padding: 0 0.5rem 0 1rem;
      }
      .user_name {
        display: none;
      }
    }
  }
  @media (max-width: 991px) {
    .d_res {
      display: block !important;
    }
    .navbar-toggler,
    .d_desk {
      display: none !important;
    }
    .mycart {
      .dropdown-menu {
        left: 0 !important;
      }
    }
    .notify {
      .dropdown-menu {
        left: 0 !important;
      }
    }
  }
  @media (max-width: 480px) {
    .cat_text {
      display: none !important;
    }
  }
`;

export default Menubar;
