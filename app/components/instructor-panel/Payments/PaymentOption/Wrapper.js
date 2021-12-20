import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .payment-option {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    .item {
      align-items: center;
      background-color: transparent;
      border: 1px solid #d8d8d8;
      border-radius: 0.313rem;
      display: inherit;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 5rem;
      text-align: center;
      &:focus {
        box-shadow: none;
      }
      img {
        margin: 0 0 1rem;
        max-width: 5rem; 
      }
      p {
        color: #404041;
        font-size: 1rem;
        font-weight: 550;
      }
    }
    @media (max-width: 575px) {
      .item {
        width: 100%;
      }
    }
  }
  .account-detail {
    background-color: #d8d8d8;
    border-radius: 0.313rem;
    display: flex;
    flex-direction: cloumn;
    flex-wrap: wrap;
    margin: 2rem 0 0;
    padding: 2rem;
    .title-action {
      align-items: center;
      display: inherit;
      justify-content: space-between;
      width: 100%;
      .del-edit {
        align-items: center;
        display: inherit;
        justify-content: flex-end;
        button {
          background-color: transparent;
          border: none;
          color: #404041;
          font-size: 1.5rem;
          font-weight: 550;
          margin: 0 0 0 1rem;
          padding: 0;
          &:focus {
            box-shadow: none;
          }
        }
      }
    }
    .account-data {
      display: inherit;
      flex-direction: column;
      flex-wrap: wrap;
      margin: 1.5rem 0 0;
      width: 100%;
      .item {
        align-items: center;
        display: inherit;
        justify-content: flex-start;
        padding: 0.5rem 0;
        width: 100%;
        .property {
          font-weight: 550;
          width: 13rem;
        }
        .value {
          width: 70%;I
        }
      }
    }
    @media (max-width: 575px) {
      padding: 1rem;
      .title-action {
        flex-wrap: wrap-reverse;
        .del-edit {
          margin: 0 0 1rem;
          width: 100%;
        }
      }
      .account-data {
        .item {
          flex-wrap: wrap;
          .property {
            width: 100%;
          }
          .value {
            width: 100%;I
          }
        }
      }
    }
  }
`;

export default Wrapper;
