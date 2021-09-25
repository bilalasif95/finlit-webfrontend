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
`;

export default Wrapper;
