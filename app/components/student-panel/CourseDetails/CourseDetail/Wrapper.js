import styled from 'styled-components';

const Wrapper = styled.div`
  .addcart_detail {
    margin-top: 30px;
    .jodit-toolbar__box:not(:empty) {
      display: none;
    }
    .jodit-status-bar {
      display: none;
    }
    .jodit-container:not(.jodit_inline) {
      border: none;
    }
    .main_img {
      margin: 0 0 1rem;
      overflow: hidden;
      height: 30rem;
      width: 100%;
      border-radius: 0.5rem;
      .video-react {
        padding: 0 !important;
      }
      img {
        width: 100%;
        // height: 100%;
        // border-radius: 3px;
        // object-fit: cover;
      }
    }
    .breadcrumb_bar {
      a {
        color:#5ca54e;
        text-decoration: none;
      }
      .active {
        color: #404041;
        font-weight: 550;
      }
    }
    .header {
      align-items: baseline;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      width: 100%;
      h3 {
        color: #404041;
        font-size: 2.5rem;
        line-height: 50px;
        margin: 0;
        width: 100%;
      }
    }
    .cat_rating {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      .cat_type {
        background-color: #fde3dc;
        border-radius: 0.25rem;
        margin: 0 1rem 0 0;
        padding: 0.5rem 1rem;
        p {
          color: #b53837;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 20px;
        }
      }
      .rating {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        width: 20%;
        span {
          font-size: 0.875rem;
        }
        .stars {
          display: flex;
          margin-left: 0.5rem;
          svg {
            g {
              path:last-child {
                fill: #fbbf2e;
              }
            }
          }
        }
      }
    }
    .date_sharing {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem 0;
      width: 100%;
      .updates {
        display: flex;
        justify-content: flex-start;
        width: 60%;
      }
      .item {
        align-items: flex-start;
        display: flex;
        font-size: 0.875rem;
        flex-direction: column;
        justify-content: center;
        padding: 0 2rem 0 0;
        svg {
          color: #8b8b8b;
        }
        p {
          color: #8b8b8b;
          margin: 0 0 0.25rem;
          width: 100%;
        }
        .value {
          color: #000;
          width: 100%;
        }
      }
      .time-item {
        margin-top: 10px;
      }
      .like_share {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        width: 40%;
        button {
          background-color: #f9f9f9;
          border: none;
          color: #000;
          margin-left: 1rem;
          padding: 0.5rem 1rem;
          svg {
            margin: 0 0.5rem 0 0;
          }
        }
      }
    }
    .tabs_cont {
      .nav-tabs {
        border-bottom: 1px solid #d8d8d8;
        padding: 0 1.75rem;
        .nav-link.active {
          color: #3e952e;
          background-color: #fff;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #3e952e;
        }
        .nav-link {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 2px solid #fff;
          color: #8b8b8b;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 550;
          margin-bottom: 0;
          &:hover {
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 2px solid #fff;
            text-decoration: none;
          }
        }
      }
      .tab-content > .tab-pane {
        padding: 0 0 2rem;
        border-bottom: 1px solid #d8d8d8;
        .content_in {
          border: 1px solid #d8d8d8;
          border-radius: 0.5rem;
          margin: 2rem 0 0;
          padding: 2rem;
          h4 {
            color: #404041;
            font-size: 1.5rem;
            line-height: 22px;
            margin: 0 0 1rem;
          }
          p {
            color: #404041;
            font-size: 0.875rem;
            margin: 0 0 1rem;
            &:last-child {
              margin: 0;
            }
          }
          ul {
            margin: 0;
            padding: 0;
            li {
              align-items: center;
              display: flex;
              color: #404041;
              font-size: 0.875rem;
              line-height: 32px;
              list-style: none;
              svg {
                fill: #000;
                font-size: 1.75rem;
                margin: 0 0.5rem 0 0;
              }
            }
          }
          .tags_list {
            display: flex !important;
            flex-wrap: wrap;
            justify-content: flex-start;
            li {
              background-color: #f9f9f9;
              border-radius: 2rem;
              font-size: 0.875rem;
              margin: 0.5rem 0.5rem 0 0;
              padding: 0.35rem 1.5rem;
            }
          }
        }
        .course_content {
          padding: 2rem 0 0;
          .short_info {
            align-items: center;
            display: flex;
            margin: 0 0 0.5rem;
            p {
              color: #969696;
              font-size: 0.875rem;
              margin: 0;
            }
            svg {
              fill: #8b8b8b;
              font-size: 1.75rem;
            }
          }
          .section_in {
            display: flex;
            flex-direction: column;
            width: 100%;
            .item {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 0 0 1rem;
              width: 100%;
              &:last-child {
                margin: 0;
              }
              .left {
                svg {
                  margin: 0 0.75rem 0 0;
                  font-size: 1.5rem;
                  path {
                    stroke: #8b8b8b;
                  }
                }
              }
              .right {
                svg {
                  color: #ec5252;
                  font-size: 1.5rem; 
                }
              }
            }
          }
        }
        .instructor_detail {
          align-items: center;
          border-bottom: 1px solid #e3e3e3;
          display: flex;
          justify-content: flex-start;
          margin: 0 0 1.5rem;
          padding: 0 0 1.5rem;
          width: 100%;
          .instructor_img {
            width: 4.25rem;
            height: 4.25rem;
            border-radius: 5rem;
            overflow: hidden;
          }
          .instructor_desc {
            width: 80%;
            padding: 0 0.75rem;
            h4 {
              margin: 0 0 0.25rem;
            }
            p {
              color: #969696;
              font-size: 0.875rem;
              margin: 0;
            }
          }
        }
        .features {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          width: 70%;
          li {
            font-weight: 550;
            list-style: none;
            width: 50%;
            svg {
              fill: #8b8b8b !important;
              font-size: 1.75rem;
              margin: 0 0.5rem 0 0;
            }
          }
        }
        .reviews_header {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          justify-content: space-between;
          h4 {
            line-height: normal;
            margin: 0;
            width: 80%;
          }
          button {
            background-color: transparent;
            border: none;
            color: #3e952e;
            font-size: 0.875rem;
            &:hover,
            &:focus {
              box-shadow: none;
            }
          }
          p {
            margin: 0.5rem 0 1.5rem !important;
            width: 100%;
          }
        }
        .rating_status {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .rating_star {
            align-items: center;
            background-color: #f9f9f9;
            border-radius: 0.313rem; 
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            margin: 0 2.5% 0 0;
            padding: 2rem;
            width: 27.5%;
            h4 {
              font-size: 2.25rem;
              line-height: 44px;
              margin: 0;
            }
            .star {
              margin: 0.5rem 0 0.25rem;
              svg {
                fill: #ffa506;
                font-size: 1.25rem;
              }
            }
          }
          .status {
            background-color: #f9f9f9;
            border-radius: 0.313rem; 
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            padding: 1.13rem 1.5rem;
            width: 70%;
            .item {
              align-items: center;
              display: flex;
              justify-content: space-between;
              margin: 0 0 0.25rem;
              width: 100%;
              &:last-child {
                margin: 0;
              }
              p {
                margin: 0;
                text-align: left;
                width: 20%;
                &:last-child {
                  padding: 0 0 0 0.5rem;
                  width: 12%;
                }
              }
              .progress {
                height: 0.5rem;
                width: 68%;
                .progress-bar {
                  background-color: #3e952e;
                }
              }
            }
          }
        }
        .user_reviews {
          display: flex;
          width: 100%;
          flex-direction: column;
          margin: 3rem 0 0;
          .single_review {
            border-bottom: 1px solid #d8d8d8; 
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 1rem 0;
            width: 100%;
            .user_info {
              display: flex;
              justify-content: flex-start;
              margin: 0 0 1rem;
              width: 100%;
              .user_img {
                border-radius: 5rem;
                display: flex;
                height: 4rem;
                justify-content: flex-start;
                overflow: hidden;
                width: 4rem;
              }
              .user_desc {
                display: flex;
                flex-wrap: wrap;
                padding: 0 1rem;
                width: 90%;
                .name_date {
                  align-items: center;
                  display: inherit;
                  width: 100%;
                  h6 {
                    color: #404041;
                    font-size: 0.875rem;
                    font-weight: 600;
                  }
                  p {
                    color: #8b8b8b;
                    font-size: 0.875rem;
                    margin: 0 0 0 1rem;
                  }
                }
                .star {
                  margin: 0;
                  svg {
                    fill: #ffa506;
                    font-size: 1.25rem;
                  }
                }
              }
            }
          }
        }
        .more_reviews {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 1.5rem 0 0;
          width: 100%;
          button {
            background-color: transparent;
            border: none;
            color: #3e952e;
            font-size: 0.875rem;
            font-weight: 600;
            &:hover,
            &:focus {
              box-shadow: none;
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .addcart_detail {
      .main_img {
        margin: 0;
      }
      .tabs_cont {
        padding: 0 1rem 1rem;
      }
      .requirement {
        padding: 1rem;
      }
    }
  }
`;

export default Wrapper;
