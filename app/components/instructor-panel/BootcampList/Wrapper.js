import styled from 'styled-components';

const Wrapper = styled.div`
  .courses_list {
    min-height: 500px;
  }
  .single_course {
    display: flex;
    justify-content: space-between;
    margin: 0 0 2rem;
    width: 100%;
    .course_img {
      max-height: 180px;
      overflow: hidden;
      width: 17%;
      img {
        width: 100%;
      }
    }
    .actions_btn {
      align-items: flex-start;
      display: flex;
      justify-content: flex-end;
      width: 23%;
      button {
        background-color: transparent;
        border: none;
        margin: 0 0.25rem;
        padding: 0;
        svg {
          height: 1.25rem;
          width: 1.25rem;
          path {
            fill: #8b8b8b;
            stroke: #8b8b8b;
          }
        }
        &:first-child {
          svg {
            height: 1.5rem;
            width: 2rem;
            path {
              fill: #8b8b8b;
              stroke: #8b8b8b;
            }
          }
        }
      }
    }
    .course_info {
      padding: 0.25rem 0 0.25rem 1rem;
      width: 60%;
      h5 {
        color: #000;
        font-weight: 400;
        margin: 0 0 0.75rem;
      }
      p {
        color: #8b8b8b;
      }
      .date_level {
        p {
          svg {
            height: 16px;
            width: 16px;
          }
          span {
            color: #000;
          }
        }
      }
      .course_short_info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .course_desc {
          width: 80%;
          p {
            font-size: 0.875rem;
            margin: 0 0 0.75rem;
          }
          .course_provider {
            span,
            .provider {
              color: #000;
              font-size: 0.875rem;
              margin: 0 0 0.75rem;
            }
          }
        }
        .course_price {
          align-items: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 20%;
          h5 {
            color: #ec5252;
            font-weight: 550;
            margin: 0;
          }
          del {
            color: #8b8b8b;
            font-size: 0.875rem;
            margin: 0 0 0.75rem;
          }
        }
      }
      .course_outcomes {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 1rem 0 0;
        width: 100%;
        .date_time {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 0 1rem 0 0;
          width: 100%;
          .time-box {
            display: flex;
            align-items: center;
          }
          .time-text {
            color: #8b8b8b;
          }
          span {
            font-size: 0.875rem;
          }
          svg {
            color: #8b8b8b;
            margin-right: 0.5rem;
          }
          .date_level {
            margin: 0 0 0 1rem;
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
        .viewer {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          width: 20%;
          span {
            font-size: 0.875rem;
          }
          svg {
            color: #8b8b8b;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .single_course {
      .course_info {
        width: 70%;
      }
      .actions_btn {
        width: 13%;
      }
    }
  }
  @media (max-width: 850px) {
    .single_course {
      border-bottom: 1px solid #ececec;
      padding: 0 0 1rem;
      .course_info {
        .course_outcomes {
          flex-wrap: wrap;
          justify-content: flex-start;
          .date_time {
            width: 100%;
          }
          .rating {
            width: 40%;
          }
          .viewer {
            justify-content: flex-start;
            width: 60%;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .single_course {
      flex-wrap: wrap;
      .course_img {
        width: 30%;
      }
      .course_info {
        .course_short_info {
          flex-wrap: wrap;
          .course_desc {
            width: 100%;
          }
          .course_price {
            width: 100%;
            del {
              margin: 0;
            }
          }
        }
        .course_outcomes {
          margin: 0;
        }
      }
      .actions_btn {
        width: 100%;
      }
    }
  }
  @media (max-width: 480px) {
    .single_course {
      .course_img {
        align-items: center;
        display: flex;
        max-height: 250px;
        width: 100%;
      }
      .course_info {
        padding: 1rem 0;
        width: 100%;
        .course_short_info {
          flex-wrap: wrap;
          .course_desc {
            width: 100%;
          }
          .course_price {
            width: 100%;
          }
        }
        .course_outcomes {
          margin: 0;
        }
      }
      .actions_btn {
        width: 100%;
      }
    }
  }
  @media (max-width: 414px) {
    .single_course {
      .course_info {
        .course_outcomes {
          .date_time {
            flex-wrap: wrap;
            .date_level {
              margin: 0;
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
