import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem 0 0;
  .wishlist_cont {
    margin: 1.5rem 0 0;
    .wishlist_item {
      padding: 20px 20px;
      border: 1px solid #d8d8d8;
      border-radius: 0.313rem;
      margin-bottom: 20px;
      .wishlist_details {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 22px;
        .action_btns {
          position: absolute;
          right: 0;
          top: 0;
          button {
            background-color: transparent;
            border: none;
            font-size: 1.25rem;
            padding: 0;
            margin: 0 0 0 1rem;
            &:focus {
              box-shadow: none;
            }
            &:last-child {
              svg {
                color: #46a135;
              }
            }
          }
        }
        .wishlist_img {
          height: 92px;
          width: 11%;
          img {
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
          }
        }
        .wishlist_desc {
          width: 89%;
          padding: 0 0 0 1rem;
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
      .wishlist_outcomes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
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
    @media (max-width: 991px) {
      .wishlist_item {
        .wishlist_outcomes {
          width: 75%;
        }
      }
    }
    @media (max-width: 767px) {
      .wishlist_item {
        .wishlist_details {
          .wishlist_img {
            width: 15%;
          }
          .wishlist_desc {
            width: 85%;
          }
        }
        .wishlist_outcomes {
          width: 100%;
        }
      }
    }
    @media (max-width: 575px) {
      .wishlist_item {
        .wishlist_details {
          .wishlist_img {
            width: 20%;
          }
          .wishlist_desc {
            width: 80%;
          }
        }
        .wishlist_outcomes {
          flex-wrap: wrap;
          width: 100%;
        }
      }
    }
    @media (max-width: 480px) {
      .wishlist_item {
        padding: 0.75rem;
        .wishlist_details {
          .wishlist_img {
            width: 20%;
          }
          .wishlist_desc {
            width: 80%;
            h2,
            h3 {
              font-size: 16px;
            }
          }
        }
        .wishlist_outcomes {
          flex-wrap: wrap;
          justify-content: flex-start;
          width: 100%;
          li {
            font-size: 12px;
            width: 50%;
          }
        }
      }
    }
    @media (max-width: 414px) {
      .wishlist_item {
        padding: 0.75rem;
        .wishlist_details {
          flex-wrap: wrap;
          .wishlist_img {
            height: 100%;
            width: 100%;
            img {
              width: 100%;
            }
          }
          .wishlist_desc {
            padding: 0;
            width: 100%;
          }
        }
      }
    }
  }
`;

export default Wrapper;
