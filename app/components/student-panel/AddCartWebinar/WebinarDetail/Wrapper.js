import styled from 'styled-components';

const Wrapper = styled.div`
  .addcart_detail {
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
      width: 100%;
      img {
        width: 100%;
      }
    }
    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      width: 100%;
      h4 {
        color: #484848;
        margin: 0;
      }
      .like_share {
        button {
          background-color: transparent;
          border: none;
          color: #8b8b8b;
          margin-left: 1rem;
          padding: 0;
        }
      }
    }
    .date_location {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      .item {
        align-items: center;
        display: flex;
        font-size: 0.875rem;
        flex-direction: row;
        justify-content: flex-start;
        margin: 0 0 0.5rem;
        &:last-child {
          margin: 0;
        }
        svg {
          color: #8b8b8b;
        }
        p {
          color: #8b8b8b;
          margin: 0 0.5rem;
        }
        .value {
          color: #000;
        }
      }
    }
    .tabs_cont {
      border: 1px solid #e4e4e4;
      border-radius: 0.313rem;
      margin: 1.5rem 0 0;
      padding: 2rem;
      h4 {
        color: #484848;
        font-size: 1.25rem;
        margin: 0 0 1rem;
      }
      p {
        color: #8b8b8b;
        font-size: 0.875rem;
        margin: 0;
      }
    }
    .presenters {
      padding: 1.5rem 0;
      h4 {
        color: #484848;
        font-size: 1.25rem;
        line-height: 24px;
      }
      .presenter_list {
        margin: 1rem 0 0;
        .item {
          display: flex;
          justify-content: flex-start;
          margin: 0 0 1rem;
          width: 100%;
          .icon {
            width: 15%;
            img {
              width: 100%;
            }
          }
          .details {
            color: #484848;
            font-size: 0.875rem;
            line-height: 22px;
            padding: 1rem;
            width: 85%;
            .outcomers {
              align-items: center;
              display: flex;
              justify-content: flex-start;
              width: 100%;
              .presenter_name {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                width: 50%;
                p {
                  color: #8b8b8b;
                }
                .name {
                  color: #000;
                }
              }
              .rating {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                margin: 1rem 0;
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
              .courses {
                align-items: center;
                display: flex;
                justify-content: flex-start;
                width: 25%;
                img {
                  width: 1.25rem;
                  margin-right: 0.5rem;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
