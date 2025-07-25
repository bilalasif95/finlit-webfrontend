import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  h4 {
    color: #484848;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 0.5rem;
  }
  p {
    color: #8b8b8b;
    font-size: 1rem;
    text-align: center;
  }
  .security_verify {
    max-width: 32rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    svg {
      fill: #46a135;
      height: 5rem;
      margin: 2.5rem auto;
      width: 5rem;
    }
    h4 {
      font-weight: 600 !important;
      font-size: 20px !important;
    }
    h5 {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 50px;
    }
    .app_store {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 1.5rem 0;
      width: 100%;
      img {
        margin: 0 0.5rem;
        width: 150px;
      }
    }
  }
  .enable_auth {
    padding: 5rem 0;
    margin: 0 auto;
    max-width: 31rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    p {
      color: #9a999a;
      margin: 0 0 1.5rem;
      text-align: left;
    }
  }
  .thank_you {
    padding: 5rem 0;
    margin: 2rem auto 5rem;
    max-width: 27rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
      color: #255f2b;
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
    }
    p {
      color: #484848;
      font-size: 1.25rem;
      line-height: 24px;
      margin: 0.5rem 0 0;
      text-align: center;
    }
    .go_login {
      background-color: #46a135;
      border-radius: 0.25rem;
      color: #fff;
      margin: 1.5rem 0 0;
      padding: 0.75rem;
      width: 100%;
    }
  }
  .form_footer {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default Wrapper;
