import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  min-width: 29.313rem;
  padding: 1rem 1.5rem 1.5rem;
  .item_list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      border-bottom: 1px solid #d8d8d8;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0.75rem 0;
      width: 100%;
      svg {
        fill: #ec5252;
      }
      .item_img {
        border: 1px solid #d8d8d8;
        height: 3.563rem;
        width: 7.025rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
      .item_desc {
        display: flex;
        justify-content: space-between;
        padding: 0 0 0 1rem;
        width: 90%;
        p {
          color: #404041;
          font-size: 0.875rem;
          font-weight: 550;
          line-height: 17px;
          margin: 0;
          width: 100%;
        }
        .name {
          color: #8b8b8b;
          font-size: 0.875rem;
          line-height: 17px;
          margin: 0.5rem 0;
          width: 100%;
        }
      }
    }
  }
  .total_checkout {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5rem 0 0;
    button {
      background-color: #47a135;
      border: none;
      color: #fff;
      font-size: 0.875rem;
      line-height: 17px;
      font-weight: 550;
      padding: 0.75rem;
      width: 100%;
      &:focus {
        box-shadow: none;
      }
    }
    p {
      color: #404041;
      font-size: 1.25rem;
      line-height: 17px;
      font-weight: 550;
      margin: 0 0 1.5rem;
      width: 100%;
    }
  }
  @media (max-width: 480px) {
    min-width: 19.4rem;
    padding: 0.5rem 1rem 1rem;
  }
`;

export default Wrapper;
