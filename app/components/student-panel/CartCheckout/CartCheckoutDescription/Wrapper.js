import styled from 'styled-components';

const Wrapper = styled.div`
  .cart_checkout {
    margin-top: 31px;
    .header {
      align-tems: center;
      display: flex;
      justify-content: flex-end;
      .input-group {
        width: 30%;
        .form-control {
          border: none;
          border-right: 1px solid #e4e4e4;
          font-size: 1rem;
          padding: 0.25rem 0.75rem;
          &:focus {
            box-shadow: none;
          }
        }
        button {
          background-color: transparent;
          border-color: transparent;
          color: #8b8b8b;
          padding: 0.25rem 0.5rem;
          position: absolute;
          right: 0;
          top: -2px;
          z-index: 4;
          &:focus {
            box-shadow: none;
          }
        }
        .btn-secondary {
          background-color: transparent;
          border-color: transparent;
        }
      }
      .cart {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 12%;
        margin: 6px 0px 30px;
        div {
          &:first-child {
            border-right: 1px solid #e4e4e4;
          }
        }
        .num_cont {
          position: relative;
          width: 2.2rem;
          text-align: center;
          width: 50px;
        }
        svg {
          color: #8b8b8b;
          height: 20px;
          width: 20px;
          cursor: pointer;
        }
        .no_item {
          align-tems: center;
          display: flex;
          justify-content: center;
          background-color: #404041;
          border-radius: 2rem;
          color: #fff;
          font-size: 0.75rem;
          height: 1.25rem;
          padding: 1.1px 0 0;
          position: absolute;
          top: -4px;
          right: 5px;
          width: 1.25rem;
        }
      }
    }
    table {
      width: 100%;
      tr {
        align-tems: center;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e4e4e4;
      }
      th,
      td {
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0.7rem 0;
        width: 20%;
      }
      th {
        color: #404041;
      }
      td {
        color: #8b8b8b;
      }
      th:first-child,
      td:first-child {
        width: 60%;
      }
      button {
        background-color: transparent;
        border: none;
        color: #8b8b8b;
        padding: 0 0.5rem;
        &:focus {
          box-shadow: none;
        }
        svg {
          color: #8b8b8b;
        }
      }
    }
    .detail {
      display: flex;
      justify-content: flex-start;
      .icon {
        max-height: 60px;
        min-height: 60px;
        min-width: 65px;
        overflow: hidden;
        width: 15%;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .desc {
        padding: 0 0.5rem;
        width: 85%;
        .title {
          color: #000;
          font-size: 0.875rem;
          margin: 0 0 0.05rem;
          overflow: hidden;
          vertical-align: middle;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        p {
          color: #8b8b8b;
          font-size: 0.75rem;
          overflow: hidden;
          vertical-align: middle;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .provider {
          color: #000;
          font-size: 0.75rem;
        }
      }
    }
    .cartDetailsCont {
      margin-top: 64px;
      .customBorder {
        border-bottom: 1px solid #d8d8d8;
        width: 100%;
        margin: 50px 0px 50px;
        display: block;
      }
      .moreCourses {
        .card {
          border-radius: 10px;
          .card-body {
            padding: 20px 20px 0px 20px;
            .card-title {
              font-size: 20px;
              color: #404041;
              margin-bottom: 20px;
            }
            .cardList {
              display: flex;
              margin-bottom: 35px;
              li {
                color: #404041;
                font-size: 16px;
                font-weight: 700;
                &:not(:last-child) {
                  margin-right: 25px;
                }
                img {
                  height: 30px;
                  width: 30px;
                  margin-right: 10px;
                }
              }
            }
          }
          .card-footer {
            background-color: #fff;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 20px;
            .price {
              h4 {
                font-size: 20px;
                color: #404041;
                font-weight: 700;
              }
            }
            .addCart {
              display: flex;
              align-items: center;
              button {
                font-size: 14px;
                color: #3e952e;
                font-weight: 700;
                img {
                  margin-right: 6px;
                }
              }
            }
          }
        }
        h2 {
          font-size: 24px;
          color: #404041;
          margin-bottom: 30px;
        }
      }
      .courseDetail {
        padding: 20px 20px;
        border: 1px solid #d8d8d8;
        border-radius: 10px;
        margin-bottom: 20px;
        .checkoutDetails {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 22px;
          .deleteImg {
            position: absolute;
            right: 0;
            top: 0;
            height: 20px;
            width: 16px;
            cursor: pointer;
          }
          .courseDetailImg {
            height: 92px;
            width: 16%;
            img {
              height: 100%;
              object-fit: cover;
              border-radius: 5px;
            }
          }
          .courseDetailText {
            width: 82%;
            position: relative;
            h2 {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 230px;
            }
            h2,
            h3 {
              font-size: 20px;
              color: #404041;
              margin-bottom: 0px;
              line-height: 40px;
            }
            p {
              font-size: 14px;
              color: #8b8b8b;
            }
          }
        }
        .courseDetailList {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          margin-bottom: 0px;
          li {
            color: #404041;
            font-size: 14px;
            font-weight: 700;
            display: flex;
            align-items: center;
            svg {
              margin-right: 10px;
              color: #8b8b8b;
              width: 20px;
              height: 20px;
            }
            img {
              margin-right: 10px;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
    .footer {
      align-tems: center;
      display: flex;
      justify-content: flex-end;
      padding: 1rem 0;
      width: 100%;
      p {
        color: #404041;
        font-size: 0.875rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .cart_checkout {
      .header {
        .cart {
          width: 10%;
        }
      }
    }
  }
  @media (max-width: 991px) {
    .cart_checkout {
      .header {
        .input-group {
          width: 100%;
          .form-control {
            padding: 0.25rem 0.75rem 0.25rem 0;
          }
        }
      }
      table {
        th,
        td {
          min-width: 130px;
          width: 28%;
        }
        th:first-child,
        td:first-child {
          min-width: 270px;
          width: 60%;
        }
        th:last-child,
        td:last-child {
          min-width: 60px;
          width: 12%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .cart_checkout{
      .cartDetailsCont {
        margin-top: 30px;
      }
      .cartDetailsCont {
        .courseDetail {
          padding: 16px 16px;
          .checkoutDetails {
            .courseDetailImg {
              height: 70px;
              width: 30%;
            }
            .courseDetailText {
              width: 70%;
              h3, h2 {
                font-size: 16px;
                line-height: 30px;
              }
            }
          }
          .courseDetailList {
            width: 100%;
            flex-wrap: wrap;
            li {
              width: 50%;
              margin-bottom: 15px;
            }
          }
        }
        .customBorder {
          margin: 30px 0px 20px;
        }
        .moreCourses {
          h2 {
            font-size: 20px;
            margin-bottom: 20px;
            line-height: 30px;
          }
          .card {
            .card-body { 
              padding: 10px 10px 0px 10px;
              .card-title {
                font-size: 16px;
                margin-bottom: 15px;
              }
              .cardList {
                flex-wrap: wrap;
                margin-bottom: 0px;
                li {
                  font-size: 14px;
                  width: 50%;
                  margin-bottom: 15px;
                  &:first-child {
                    width: 100%;
                  }
                  &:not(last-child) {
                    margin-right: 0px !important;
                  }
                }
              }
            }
            .card-footer {
              padding: 10px 10px;
              .price {
                h4 {
                  font-size: 16px;
                }
              }
              .addCart {
                button {
                  padding: 0px;
                }
              }
            }
          }
        } 
      }
    } 
  }
  @media (max-width: 575px) {
    .cart_checkout {
      table {
        th,
        td {
          width: 28%;
        }
        th:first-child,
        td:first-child {
          width: 60%;
        }
        th:last-child,
        td:last-child {
          width: 12%;
        }
      }
    }
      .cart_checkout {
        margin-top: 0;
        .footer {
          padding: 0 !important;
        }
        .cartDetailsCont {
          .moreCourses {
            .card {
              &:first-child {
                margin-bottom: 16px;
              }
              .card-body {
                .cardList {
                  flex-wrap: nowrap;
                  li {
                    &:not(:last-child) {
                      margin-right: 25px !important;
                    }
                    width: auto !important;
                    &:first-child {
                      width: auto;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  @media (max-width: 424px) {
    .cart_checkout {
      .header {
        .cart {
          width: 15%;
        }
      }
    }
  }
  @media (max-width: 375px) {
    .cart_checkout {
      .cartDetailsCont {
        .checkoutDetails {
          display: initial !important;
          .courseDetailImg {
            width: 100% !important;
            height: auto !important;
            margin-bottom: 15px;
            img {
              width: 100%;
            }
          }
          .courseDetailText {
            width: 100% !important;
            margin-bottom: 15px;
            img {
              top: 10px !important;
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
