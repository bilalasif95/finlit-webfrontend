/**
 * Menubar
 */

import styled from 'styled-components';

const Menubar = styled.div`
  background-color: #255f2b;
  .registration {
    width: 20%;
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
`;

export default Menubar;
