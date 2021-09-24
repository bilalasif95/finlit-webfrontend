/**
 * Menubar
 */

import styled from 'styled-components';

const Menubar = styled.div`
  background-color: #225f2b;
  .registration {
    width: 20%;
    .dropdown {
      display: flex;
      justify-content: flex-end;
      padding: 0 0 0 1rem;
      width: 100%;
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
          color: #8b8b8b;
          border-bottom: 1px solid #f6f6f6;
          &:last-child {
            border-bottom: none;
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
    .navbar-nav {
      justify-content: flex-end;
      .nav-item:last-child {
        .nav-link {
          border: 1px solid #fff;
          border-radius: 3px;
          padding: 0.5rem 0.75rem;
        }
      }
    }
    @media (min-width: 1400px) {
      width: 25%;
    }
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  .navbar {
    padding: 1rem 0;
    .navbar-brand {
      padding: 0;
    }
    @media (min-width: 992px) {
      .container-xl {
        align-items: flex-start !important;
      }
    }
  }
  .nav-item {
    margin: 0 0.2rem;
    position: relative;
  }
  .navbar-nav {
    align-items: center;
  }
  .navbar-collapse {
    justify-content: flex-end;
    margin: 0.7rem 0;
  }
  .nav-link {
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    word-break: keep-all;
    line-height: 14px;
    padding: 0.5rem 0;
    &:focus,
    &:hover {
      color: #f4f4f4;
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
      width: 134px;
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
  @media (max-width: 1100px) and (min-width: 992px) {
    .navbar-collapse {
      width: 90%;
    }
    .registration {
      width: 15%;
      .dropdown {
        padding: 0 0.5rem 0 1rem;
      }
      .user_name {
        display: none;
      }
    }
  }
`;

export default Menubar;
