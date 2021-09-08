import styled from 'styled-components';

const Wrapper = styled.div`
  .single_item {
    background-color: #fff;
    border-radius: 0.35rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    transition: box-shadow 0.5s;
    cursor: pointer;
    .left {
      padding: 2rem 1rem 2rem 0;
      width: 60%;
    }
    .right {
      align-items: center;
      display: flex;
      width: 40%;
      img {
        margin: 0;
        width: 100%;
      }
    }
    img {
      margin: 0 0 1.25rem;
      width: auto;
    }
    .read_more {
      border: 1px solid #e4e4e4;
      border-radius: 0.25rem;
      color: #ec6310;
      display: inline-block;
      font-size: 0.875rem;
      margin: 1.25rem 0 0;
      padding: 0.25rem 1rem;
      text-decoration: none;
    }
    &:hover {
      -webkit-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 767px) {
    .single_item {
      margin: 0 0 1.5rem;
    }
  }
  @media (max-width: 575px) {
    .single_item {
      padding: 0.75rem !important;
    }
  }
  @media (max-width: 480px) {
    .single_item {
      align-items: center;
      .left {
        padding: 0 1rem 0 0;
      }
    }
  }
`;

export default Wrapper;
