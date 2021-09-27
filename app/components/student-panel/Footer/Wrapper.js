import styled from 'styled-components';

const Wrapper = styled.footer`
  border-top: 1px solid #ececed;
  padding: 1rem 0 4rem;
  background-color: #f8f9fb;
  margin: 4rem 0 0;
  .copyright {
    p {
      color: #a6a6a7;
      font-size: 0.8rem;
      margin: 0;
    }
  }
  .social-links {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    li {
      padding-right: 0.5rem;
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
    width: 100%;
    li {
      color: #a6a6a7;
      font-size: 0.8rem;
      padding-left: 1rem;
      a {
        color: #a6a6a7;
        font-size: 0.8rem;
        margin: 0;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 575px) {
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
    margin: 2rem 0 0 !important;
    padding: 1rem 0 2rem;
  }
`;

export default Wrapper;
