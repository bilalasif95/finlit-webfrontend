import styled from 'styled-components';

const Wrapper = styled.footer`
  border-top: 1px solid #eee;
  padding: 2.5rem 0;
  background-color: #f8f9fb;
  margin: 0;
  .copyright {
    p {
      color: #a6a6a7;
      font-size: 0.75rem;
      margin: 0;
    }
  }
  .social-links {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0;
    padding: 0;
    li {
      list-style: none;
      padding-right: 0.5rem;
      svg {
        font-size: 1.125rem;
      }
      &:first-child {
        svg {
          path {
            fill: #475993;
          }
        }
      }
      &:nth-child(2) {
        svg {
          path {
            fill: #0077b7;
          }
        }
      }
      &:nth-child(3) {
        svg {
          path {
            fill: #f61c0d;
          }
        }
      }
      &:last-child {
        svg {
          path {
            fill: #00aaf2;
          }
        }
      }
    }
  }
  .footer_links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    width: 100%;
    li {
      // color: #404041;
      // font-size: 0.875rem;
      // font-weight: 550;
      padding-left: 1rem;
      list-style: none;
      a {
        color: #404041;
        font-size: 0.875rem;
        font-weight: 550;
        margin: 0;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 960px) {
    .footer_links {
      li {
        font-size: 0.75rem;
      }
    }
  }
  @media (max-width: 767px) {
    .copyright {
      width: 100%;
      p {
        text-align: center;
      }
    }
    .social-links {
      justify-content: center;
      width: 100%;
    }
    .footer_links {
      justify-content: center;
      flex-wrap: wrap;
      margin: 1rem 0 0;
      li {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }
    }
  }
  @media (max-width: 991px) {
    padding: 1rem 0 2rem;
  }
`;

export default Wrapper;
