import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem 0 0;
  .course_certificate {
    border: 1px solid #e9e9e9;
    // transform: rotate(90deg);
    position: relative;
    max-width: 80rem;
    .circle_bg {
      bottom: 0;
      display: none;
      position: absolute;
      right: 0;
      width: 25rem;
    }
    .header {
      // background-color: #255f2b;
      background: url('https://i.imgur.com/4mnVfVZ.png') no-repeat;
      background-size: cover;
      background-position: top center;
      border-bottom: 10px solid #ffd430;
      padding: 4.5rem 6rem;
      z-index: 1;
      h4 {
        color: #fff;
        font-size: 2.5rem;
        font-weight: 300;
        line-height: 24px;
        margin: 0 0 2.5rem;
      }
      h2 {
        color: #fff;
        font-size: 3.5rem;
        font-weight: 500;
        line-height: 24px;
        margin: 0 0 0.25rem;
      }
    }
  }
  .certificate_details {
    padding: 4rem 6rem;
    .name_date {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      h1 {
        color: #3e952e;
        font-size: 4rem;
        font-style: italic;
        line-height: 44px;
        margin: 0 0 1rem;
      }
      .comp_date {
        align-items: center;
        display: inherit;
        justify-content: space-between;
        width: 100%;
        p {
          color: #404041;
          font-size: 1.15rem;
          margin: 0;
        }
      }
    }
    .course_title {
      color: #404041;
      font-size: 1.15rem;
      margin: 2rem 0 5rem;
    }
    .certified_by {
      width: 100%;
      img {
        margin: 0 0 0.5rem;
        width: 10rem;
      }
      p {
        color: #404041;
        font-size: 1rem;
        font-style: italic;
        margin: 0;
      }
    }
  }
  .footer {
    background-color: #41952e;
    padding: 1.5rem 6rem;
    position: relative;
    a {
      color: #fff;
      font-size: 1.25rem;
      margin: 1.5rem 0 0;
    }
    .logo {
      background-color: #255f2b;
      bottom: 1.5rem;
      padding: 2.5rem 10rem 2.5rem 2.5rem;
      position: absolute;
      right: 0;
      img {
        width: 8rem;
      }
    }
  }
`;

export default Wrapper;
