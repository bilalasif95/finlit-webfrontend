import styled from 'styled-components';

const Wrapper = styled.div`
  .courses {
    padding: 1rem 0 0;
    h4 {
      color: #484848;
      font-weight: 400;
      margin-bottom: 0px;
    }
    .title-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 30px;
      .tabs_cont {
        .shedule-head {
          color: #484848;
          font-size: 20px;
        }
        .nav-tabs {
          border-bottom: 1px solid #e4e4e4;
          .nav-link.active {
            color: #000;
            background-color: #fff;
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 3px solid #ffd416;
          }
          .nav-link {
            border-top: none;
            border-left: none;
            border-right: none;
            border-bottom: 3px solid #fff;
            color: #8b8b8b;
            cursor: pointer;
            font-size: 14px;
            margin-bottom: 0;
            padding: 0px 15px 8px 15px;
            &:hover {
              border-top: none;
              border-left: none;
              border-right: none;
              border-bottom: 3px solid #fff;
            }
          }
        }
        .tab-content > .tab-pane {
          padding: 1rem 0 0;
          .weekdays {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &:not(:last-child) {
              margin-bottom: 15px;
            }
            .name {
              font-size: 14px;
              color: #b8b8b;
            }
            .time {
              font-size: #000000;
              color: #000000;
            }
          }
          h4 {
            color: #484848;
            font-size: 1.25rem;
            margin: 0;
          }
          p {
            color: #8b8b8b;
            font-size: 0.875rem;
            margin: 0;
          }
        }
      }
    }
    .card-cont {
      display: flex;
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
        display: flex;
        justify-content: center;
        align-items: baseline;
        max-height: 180px;
        overflow: hidden;
        width: 17%;
        img {
          width: auto;
        }
      }
      .course_info {
        padding: 0.25rem 0 0.25rem 1rem;
        width: 83%;
        h5 {
          font-size: 24px;
          color: #000;
          font-weight: 400;
          margin: 0 0 0.75rem;
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
            p {
              font-size: 16px;
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
          .outcomes {
            align-items: center;
            display: flex;
            justify-content: flex-start;
            padding: 0 1rem 0 0;
            width: 75%;
            .date_time {
              align-items: center;
              display: flex;
              justify-content: flex-start;
              padding: 0 1rem 0 0;
              width: 50%;
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
              width: 25%;
              span {
                font-size: 0.875rem;
              }
              .stars {
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
              justify-content: flex-start;
              width: 25%;
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
            justify-content: space-between;
            width: 25%;
            button:first-child {
              background-color: transparent;
              border: 1px solid #e4e4e4;
              border-radius: 2rem;
              color: #8b8b8b;
              font-size: 1rem;
              padding: 0.375rem 0.65rem;
            }
            button:last-child {
              background-color: #47a135;
              margin-left: 1.5rem;
              padding: 0.5rem 1.5rem;
            }
          }
        }
      }
    }
    .single_card {
      margin: 0 0 1.5rem;
      .card {
        border-radius: 5px;
        border: initial;
        box-shadow: 0px 3px 6px #00000029;
        .card-img-top {
          width: 100%;
          height: 153px;
        }
        .card-body {
          position: relative;
          padding: 0px 20px 30px 20px;
          .card-title {
            font-size: 16px;
            color: #000000;
            font-weight: 500;
            margin-top: 50px;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .rating-box {
            display: flex;
            margin: 15px 0px;
            .star:nth-child(1),
            .star:nth-child(2) {
              border-right: 1px solid #e4e4e4;
            }
            .star:first-child {
              svg {
                path {
                  color: #fbbf2e;
                }
              }
            }
            .star {
              width: 33.33%;
              text-align: center;
              svg {
                margin-bottom: 5px;
                height: 20px;
                width: 20px;
                path {
                  color: #b8b8b8;
                }
              }
            }
          }
          .like_enroll {
            position: absolute;
            top: -25px;
            right: 20px;
            button {
              background-color: #fff;
              border: 1px solid #e4e4e4;
              border-radius: 2rem;
              color: #ec5252;
              height: 45px;
              width: 45px;
              svg {
                path {
                  color: #b8b8b8;
                }
              }
              &:focus {
                background: #e0f6d0;
                border: 1px solid #E0F6D0;
                box-shadow: initial;
                outline: none;
                svg {
                  path {
                    fill: #46a135;
                  }
                }
              }
            }
          }
          .card-subtitle {
            font-size: 14px;
            color: #000000;
            font-weight: 400;
            margin: 15px 0px;
          }
          .CardFooter {
            display: flex;
            justify-content: space-between;
            button {
              height: 45px;
              background-color: #46a135;
              color: #fff;
              border-radius: 5px;
              border: initial;
              font-size: 14px;
              min-width: 123px;
              &:focus,
              &:hover,
              &:active {
                box-shadow: inherit;
                outline: none;
              }
            }
            .price-box {
              text-align: center;
              h4 {
                font-size: 20px;
                color: #ec5252;
                font-weight: 700;
                margin-bottom: 0px;
              }
              p {
                font-size: 14px;
                color: #8b8b8b;
              }
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
            .date_time {
              width: 60% !important;
            }
            .rating,
            .viewer {
              width: 20% !important;
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
            .date_time {
              width: 100% !important;
            }
            .rating {
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
    .card-img-top {
      height: 200px;
    }
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
            .date_time {
              margin: 0;
              padding: 0 !important;
              width: 100% !important;
            }
            .rating {
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
            .date_time {
              flex-wrap: wrap;
              .date_level {
                margin: 0 !important;
                width: 100% !important;
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
