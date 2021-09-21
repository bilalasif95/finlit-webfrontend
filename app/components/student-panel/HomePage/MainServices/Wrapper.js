import styled from 'styled-components';

const Wrapper = styled.div`
  .slick-slide {
    padding: 0.5rem;
  }
  background-color: #f8f9fb;
  .single_item {
    background-color: #fff;
    border-radius: 0.35rem;
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: box-shadow 0.5s;
    cursor: pointer;
    text-decoration: none;
    img {
      display: block;
      margin: 0 auto 1.25rem;
    }
    &:hover {
      -webkit-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 767px) {
    padding: 2rem 0 1rem;
    .single_item {
      margin: 0 0 1.5rem;
    }
  }
  @media (max-width: 575px) {
    .single_item {
      padding: 0.75rem !important;
    }
  }
`;

export default Wrapper;
