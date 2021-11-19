import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  // box-shadow: 2px 3px 4px #cececeb8;
  z-index: 1;
  top: 0;
  .profileAside {
    width: 155px; 
    height: 100%;
    position: relative;
    padding: 50px 0px 30px 0px;
    .sideNav {
      margin: 0 0 5rem;
      padding: 50px 0px 30px 0px;
      .sideNavLink {
        display: block;
        text-align: center;
        font-size: 14px;
        color: #404041;
        font-weight: 600;
        padding: 12px 0px;
        border-width: 0px 0px 0px 4px;
        border-style: solid;
        border-color: transparent;
        transition: 0.4s linear;
        a {
          color: #404041;
          display: block;
        }
        svg {
          height: 24px;
          width: 24px;
        }
        img {
          height: 24px;
          width: 24px;
        }
        &:hover {
          background-color: #46a13524;
          border-left: 4px solid #46a135;
          color: #46a135;
          text-decoration: none;
        }
        &:hover a {
          color: #46a135;
          text-decoration: none;
        }
      }
      .active.sideNavLink {
        color: #46a135;
        text-decoration: none;
        background-color: #46a1353b !important;
        border-left: 4px solid #46a135;
      }
      .active.sideNavLink a {
        color: #46a135;
      }
    }
    .customDropdown button {
      width: 100%;
      border-radius: 0px;
      background-color: transparent !important;
      margin-bottom: 0px !important;
      span svg {
        width: 12px !important;
      }
      &:focus,
      &:hover,
      &:active {
        outline: none;
        box-shadow: none !important;
        border-left: 4px solid #46a135;
        color: #46a135;
        background-color: #46a1353b !important;
      }
    }
    .collapse .card {
      border: none;
      .card-body {
        padding: 20px 12px 0px 28px;
      }
    }
    .sideList li a {
      color: #909090;
      text-decoration: none;
      margin-bottom: 10px;
      display: inline-block;
      &:hover {
        color: #46a135;
      }
    }
    .homeBtn {
      position: absolute;
      bottom: 20px;
      width: 100%;
      .backBtn {
        border: 1px solid #d8d8d8;
        padding: 7px 10px;
        display: table;
        margin: 0px auto;
        color: #404041;
        border-radius: 5px;
        &:hover {
          color: #404041;
          text-decoration: none;
        }
      }
    }
  }
`;

export default Wrapper;
