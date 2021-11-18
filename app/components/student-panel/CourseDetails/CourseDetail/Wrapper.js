import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
  .addcart_detail {
    nav {
      z-index: 0 !important;
    }
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
        width: 40%;
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
        width: 50%;
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
        width: 50%;
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
                width: 90%;
                button {
                  background-color: transparent;
                  border: none;
                  border-radius: 0;
                  color: #575757;
                  font-size: 0.875rem;
                  padding: 0;
                  text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                  max-width: 70%;
                  &:focus {
                    box-shadow: none;
                  }
                }
                svg {
                  margin: 0 0.75rem 0 0;
                  font-size: 1.5rem;
                  path {
                    stroke: #8b8b8b;
                  }
                }
              }
              .right {
                display: flex;
                justify-content: flex-end;
                width: 10%;
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
            width: 60%;
          }
          button {
            background-color: transparent;
            border: none;
            color: #3e952e;
            font-size: 0.875rem;
            padding: 0;
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
                padding: 0 0.5rem 0 0;
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
                img {
                  width: 100%;
                }
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
        .user_details {
          border-top: 1px solid #d8d8d8;
          margin: 1.5rem 0 0;
          padding: 1.5rem 0 0;
          .item {
            display: flex;
            justify-content: flex-start;
            margin: 0 0 1rem;
            width: 100%;
            &:lastchild {
              margin: 0;
            }
            .left {
              width: 25%;
            }
            .right {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              padding: 0 0 0 1rem;
              width: 75%;
              button {
                background-color: #41952e;
                border: 1px solid #41952e;
                color: #fff;
                font-size: 0.825rem;
                font-weight: 500;
                -webkit-transition: background-color 2s;
                transition: background-color 2s;
                margin: 1.5rem 0 0;
                padding: 0.75rem;
                width: 12rem;
                &:focus {
                  box-shadow: none;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1100px) {
    .addcart_detail {
      .tabs_cont {
        .tab-content > .tab-pane {
          .rating_status {
            .rating_star {
              padding: 1rem 0.5rem;
            }
          }
        }
      }
    }
  }
  @media (max-width: 991px) {
    .addcart_detail {
      .main_img {
        height: 22.2rem;
      }
      .header {
        h3 {
          font-size: 2rem;
          line-height: 36px;
        }
      }
      .date_sharing {
        .updates {
          .item {
            padding: 0 1rem 0 0;
          }
        }
      }
      .tabs_cont {
        padding: 0 1rem 1rem;
      }
      .requirement {
        padding: 1rem;
      }
    }
  }
  @media (max-width: 991px) and (min-width: 768px) {
    .addcart_detail {
      .tabs_cont {
        padding: 0;
        .tab-content > .tab-pane {
          .rating_status {
            flex-wrap: wrap;
            .rating_star {
              margin: 0 0 1rem;
              width: 100%;
            }
            .status {
              width: 100%;
            }
          }
          .user_details {
            .item {
              .left {
                width: 30%;
              }
              .right {
                width: 70%;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 900px) and (min-width: 768px) {
    .addcart_detail {
      .main_img {
        height: 20rem;
      }
      .date_sharing {
        flex-wrap: wrap;
        .updates {
          margin: 0 0 1rem;
          width: 100%;
        }
        .like_share {
          width: 100%;
        }
      }
      .tabs_cont {
        padding: 0;
        .nav-tabs {
          padding: 0;
        }
        .tab-content > .tab-pane {
          .content_in {
            padding: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .addcart_detail {
      .tabs_cont {
        padding: 0 0 1rem;
        .tab-content > .tab-pane {
          padding: 0 0 1rem;
          .content_in {
            margin: 1rem 0 0;
            padding: 1.5rem;
          }
          .rating_status {
            .rating_star {
              width: 32.5%;
            }
            .status {
              width: 65%;
              .item {
                &:last-child {
                  margin: 0;
                }
                p {
                  width: 30%;
                  &:last-child {
                    width: 20%;
                  }
                }
                .progress {
                  width: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 575px) {
    .addcart_detail {
      .tabs_cont {
        .nav-tabs {
          padding: 0;
        }
        .tab-content > .tab-pane {
          .content_in {
            padding: 1rem;
          }
          .rating_status {
            flex-wrap: wrap;
            .rating_star {
              margin: 0 0 1rem;
              width: 100%;
            }
            .status {
              width: 100%;
            }
          }
          .user_reviews {
            .single_review {
              .user_info {
                .user_desc {
                  padding: 0 0 0 1rem;
                  width: 75%;
                }
              }
            }
          }
          .user_details {
            .item {
              .left {
                width: 40%;
              }
              .right {
                width: 60%;
              }
            }
          }
        }
      }
      .main_img {
        height: 20rem;
      }
      .date_sharing {
        flex-wrap: wrap;
        .updates {
          margin: 0 0 1rem;
          width: 100%;
        }
        .like_share {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 414px) {
    .addcart_detail {
      .header {
        padding: 0 0 1rem;
        h3 {
          font-size: 1.5rem;
          line-height: 30px;
        }
      }
      .cat_rating {
        flex-wrap: wrap;
        .rating {
          margin: 1rem 0 0;
          width: 100%;
        }
      }
      .date_sharing {
        .updates {
          .item {
            width: 30%;
            &:first-child {
              width: 40%;
            }
          }
        }
        .like_share {
          justify-content: space-between;
          button {
            margin: 0;
            width: 47.5%;
          }
        }
      }
      .tabs_cont {
        .nav-tabs {
          .nav-link {
            padding: 0.5rem 0.25rem;
          }
        }
        .content_in {
          .tags_list {
            li {
              padding: 0.25rem 1rem !important;
            }
          }
        }
        .rating_status {
          .status {
            padding: 1rem !important;
            .item {
              &:last-child {
                margin: 0;
              }
              p {
                width: 40% !important;
                &:last-child {
                  width: 25% !important;
                }
              }
              .progress {
                width: 35%;
              }
            }
          }
        }
        .user_details {
          .item {
            &:last-child {
              padding: 0 0 5rem;
              position: relative;
            }
            .left {
              width: 40%;
            }
            .right {
              width: 60%;
              button {
                bottom: 0;
                left: 0;
                position: absolute;
                width: 100% !important;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export default Wrapper;
