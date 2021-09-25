import styled from 'styled-components';

const Wrapper = styled.div`
  .single_item {
    background-color: #fff;
    border-radius: 0.35rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    transition: box-shadow 0.5s;
    cursor: pointer;
    .event_img {
      align-items: baseline;
      display: flex;
      justify-content: center;
      min-height: 160px;
      max-height: 160px;
      overflow: hidden;
      position: relative;
      img {
        margin: 0 auto;
        width: 100%;
      }
      .title {
        bottom: 0;
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        p {
          background-color: #ffd416;
          color: #fff !important;
          font-size: 0.875rem;
          padding: 0.25rem 0.5rem;
          text-align: center;
          display: block;
          margin: 0 auto;
        }
      }
    }
    .desc {
      padding: 1.5rem;
      width   100%;
      h5 {
        min-height: 40px;
      }
      .posted_by {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem 0 0;
        .posted_profile {
          height: 35px;
          width: 35px;
          border-radius: 1.5rem;
          background-color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            border-radius: 1.5rem;
            height: 100%;
            width: 100%;
          }
        }
        .posted_title {
          display: flex !important;
          justify-content: flex-start;
          align-items: center;
          width: 82.5%;
          padding: 0 0 0 0.75rem;
          color: #000 !important;
        }
      }
      .register {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 1rem 0 0;
        a {
          color: #004D9B;
          display: block;
          font-size: 0.875rem;
          padding: 0.5rem 0;
          text-align: left;
          text-decoration: none;
        }
      }
    }
    &:hover {
      -webkit-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: 991px) {
    .single_item {
      margin: 0 0 1.5rem;
      .event_img {
        min-height: 200px;
        max-height: 200px;
      }
    }
  }
  @media (max-width: 575px) {
    .single_item {
      .event_img {
        min-height: 230px;
        max-height: 230px;
      }
      .desc {
        padding: 0.75rem !important;
      }
    }
  }
`;

export default Wrapper;
