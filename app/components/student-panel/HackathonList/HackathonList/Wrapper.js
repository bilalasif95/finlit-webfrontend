import styled from 'styled-components';

const Wrapper = styled.div`
  .courses {
    padding: 1rem 0 0;
    h4 {
      color: #404041;
      font-weight: 400;
      margin: 0 0 1.5rem;
    }
    .single_course {
      display: flex;
      justify-content: space-between;
      margin: 0 0 2rem;
      &:last-child {
        margin: 0 !important;
      }
      width: 100%;
      .course_img {
        max-height: 158px;
        overflow: hidden;
        width: 13%;
        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
      .course_info {
        padding: 0.25rem 0 0.25rem 1.25rem;
        width: 87%;
        h5 {
          color: #000;
          font-weight: 400;
          margin: 0 0 15px;
          overflow: hidden;
          vertical-align: middle;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p {
          color: #8b8b8b;
          overflow: hidden;
          vertical-align: middle;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .course_short_info {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .course_desc {
            width: 80%;
            .outcomes {
              align-items: center;
              display: flex;
              justify-content: flex-start;
              padding: 0 1rem 0 0;
              width: 75%;
              .date {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                width: 35%;
                color: #000;
                font-size: 14px;
                span {
                  font-size: 0.875rem;
                }
                svg {
                  color: #8b8b8b;
                  margin-right: 0.5rem;
                }
              }
              .viewer {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                width: 35%;
                color: #000;
                font-size: 14px;
                span {
                  font-size: 0.875rem;
                }
                svg {
                  color: #8b8b8b;
                  margin-right: 0.5rem;
                }
              }
            }
            p {
              font-size: 13px;
              margin: 0 0 10px;
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
            justify-content: flex-end;
            width: 20%;
            h5 {
              color: #ec5252;
              font-weight: 550;
              margin: 0;
            }
            del {
              color: #8b8b8b;
              font-size: 0.875rem;
            }
          }
        }
        .course_outcomes {
          align-items: center;
          display: flex;
          justify-content: flex-end;
          margin: 1rem 0 0;
          width: 100%;
          .outcomes {
            align-items: center;
            display: flex;
            justify-content: flex-start;
            padding: 0 1rem 0 0;
            width: 75%;
            .date {
              align-items: center;
              display: flex;
              justify-content: flex-start;
              width: 35%;
              span {
                font-size: 0.875rem;
              }
              svg {
                color: #8b8b8b;
                margin-right: 0.5rem;
              }
            }
            .viewer {
              align-items: center;
              display: flex;
              justify-content: flex-start;
              width: 35%;
              span {
                font-size: 0.875rem;
              }
              svg {
                color: #8b8b8b;
                margin-right: 0.5rem;
              }
            }
          }
          .like_enroll {
            align-items: center;
            display: flex;
            width: 25%;
            justify-content: flex-end;
            button:first-child {
              background-color: transparent;
              border: 1px solid #e4e4e4;
              border-radius: 2rem;
              color: #ec5252;
              padding: 0.375rem 0.65rem;
            }
            button:last-child {
              background-color: #47a135;
              padding: 0.75rem 1.5rem;
              margin-left: 39px;
              border: none;
              border-radius: 5px;
              width: 147px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 1280px) {
    .courses {
      .course_info {
        .course_outcomes {
          flex-wrap: wrap;
          .outcomes {
            padding: 0 !important;
            width: 100% !important;
            .date,
            .viewer {
              width: 40% !important;
            }
          }
          .like_enroll {
            justify-content: flex-end !important;
            margin: 1rem 0 0;
            width: 100% !important;
          }
        }
      }
    }
  }
  @media (max-width: 767px) {
    .courses {
      .course_img {
        width: 25% !important;
      }
      .course_info {
        width: 75% !important;
        .course_outcomes {
          .outcomes {
            flex-wrap: wrap;
            .date {
              width: 30% !important;
            }
            .viewer {
              width: 70% !important;
            }
          }
        }
      }
    }
  }
  @media (max-width: 575px) {
    .courses {
      .single_course {
        flex-wrap: wrap;
      }
      .course_img {
        align-items: center;
        display: flex;
        justify-content: center;
        max-height: 250px !important;
        width: 100% !important;
      }
      .course_info {
        padding: 0.5rem 0 !important;
        width: 100% !important;
        h5 {
          margin: 0 0 0.25rem !important;
        }
        .course_short_info {
          flex-wrap: wrap;
          .course_desc {
            width: 100% !important;
            p {
              margin: 0 0 0.25rem !important;
            }
          }
          .course_price {
            justify-content: flex-start !important;
            width: 100% !important;
            del {
              margin: 0 !important;
            }
          }
        }
        .course_outcomes {
          flex-wrap: wrap;
          .outcomes {
            flex-wrap: wrap;
            .date {
              width: 40% !important;
            }
            .viewer {
              width: 60% !important;
            }
          }
        }
      }
    }
  }
  @media (max-width: 414px) {
    .courses {
      .course_info {
        .course_outcomes {
          margin: 0 !important;
          .outcomes {
            .date {
              margin: 0 !important;
              width: 100% !important;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
