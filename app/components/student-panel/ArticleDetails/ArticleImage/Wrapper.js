import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 0 2rem;
  width: 100%;
  height: 400px;
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 991px) {
    margin: 0 0 1rem;
    max-height: 400px;
    height: initial;
    img {
      width: 100%;
      max-width: initial;
    }
  }
`;

export default Wrapper;
