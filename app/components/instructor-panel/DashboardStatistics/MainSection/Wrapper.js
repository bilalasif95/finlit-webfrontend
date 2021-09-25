import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #255f2b;
  margin: 0 0 4rem;
  .main_section {
    padding: 0 0 4.5rem;
    position: relative;
    h4 {
      font-size: 2rem;
      color: #fff;
      margin: 1rem 0 0;
    }
    .top_links {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      margin: 1.5rem 0 0;
      li {
        display: flex;
        margin: 0 1rem 0 0;
        .link {
          border: 1px solid #fff;
          border-radius: 1.5rem;
          color: #fff;
          font-size: 0.875rem;
          padding: 0.5rem 0.85rem;
          text-decoration: none;
          -webkit-transition: background-color 0.3s ease-out;
          -moz-transition: background-color 0.3s ease-out;
          -o-transition: background-color 0.3s ease-out;
          transition: background-color 0.3s ease-out;
          text-align: center;
          &:hover {
            background-color: #fff;
            color: #255f2b;
          }
        }
        .dropdown-toggle {
          background-color: transparent;
          border: 1px solid #fff;
          border-radius: 1.5rem;
          color: #fff;
          font-size: 0.875rem;
          padding: 0.5rem 0.85rem;
          text-decoration: none;
          -webkit-transition: background-color 0.3s ease-out;
          -moz-transition: background-color 0.3s ease-out;
          -o-transition: background-color 0.3s ease-out;
          transition: background-color 0.3s ease-out;
          &:focus {
            box-shadow: none;
          }
          &:hover {
            background-color: #fff;
            color: #255f2b;
          }
        }
        .dropdown-menu {
          padding: 0;
          li {
            border-bottom: 1px solid #dcdcdc;
            margin: 0;
            &:last-child {
              border-bottom: none;
            }
            .dropdown_link {
              color: #404041 !important;
              font-size: 0.875rem;
              text-decoration: none;
              display: block;
              margin: 0;
              width: 100%;
              padding: 0.5rem 1rem;
              clear: both;
              font-weight: 400;
              text-align: inherit;
              white-space: nowrap;
              background-color: transparent;
              border: 0;
            }
          }
        }
        .dropdoen-item:focus {
          background-color: transparent;
        }
      }
    }
    .main_links {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      margin: 3rem 0 0;
      flex-wrap: wrap;
      width: 100%;
      a {
        border: 1px solid #fff;
        border-radius: 0.25rem;
        color: #fff;
        font-size: 0.875rem;
        margin: 0 1rem 0 0;
        min-width: 200px;
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        text-align: center;
      }
    }
    .stats {
      bottom: -4rem;
      position: absolute;
      width: 100%;
      .single_item {
        align-items: center;
        background-color: #fff;
        border-radius: 0.25rem;
        display: flex;
        justify-content: space-between;
        -webkit-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
        padding: 2.5rem 1.5rem;
        h2 {
          color: #404041;
          font-weight: 600;
          margin: 0;
          width: 50%;
        }
        p {
          border-left: 1px solid #dcdcdc;
          color: #8b8b8b;
          padding: 0.25rem 0 0.25rem 1rem;
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 1199px) and (min-width: 992px) {
    .main_section {
      .stats {
        .row > * {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
        .single_item {
          padding: 2.5rem 0.5rem;
          h2 {
            font-size: 1.25rem;
          }
          p {
            padding: 0.25rem 0 0.25rem 0.5rem;
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    padding: 1.5rem 0 0;
    .main_section {
      padding: 0;
      .main_links {
        a {
          margin: 0 1rem 1rem 0 !important;
        }
      }
      .stats {
        margin: 0 0 -5.5rem;
        position: static !important;
        .single_item {
          margin: 0 0 1.5rem;
          padding: 2.5rem 1rem;
          p {
            padding: 0.25rem 0 0.25rem 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 414px) {
    padding: 0;
    .main_section {
      .top_links {
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          margin: 0 0 1rem;
          width: 47%;
          &:last-child {
            width: 100%;
          }
          .link {
            width: 100%;
          }
          .dropdown {
            width: 100%;
            .show {
              width: 100%;
            }
            .dropdown-toggle {
              align-items: center;
              display: flex;
              justify-content: space-between;
              width: 100%;
            }
          }
        }
      }
      .main_links {
        margin: 1rem 0 0.5rem;
        a {
          margin: 0 0 1rem;
          min-width: 100%;
        }
      }
    }
  }
`;

export default Wrapper;
