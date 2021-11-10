import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem 0 0;
  .course_certificate {
    border: 1px solid #e9e9e9;
    margin: 0 auto;
    max-width: 55rem;
    width: 100%;
    .header {
      // background-color: #255f2b;
      background: url('https://i.imgur.com/4mnVfVZ.png') no-repeat;
      background-size: 100%;
      background-position: top center;
      border-bottom: 5px solid #ffd430;
      padding: 2.5rem 3rem;
      h4 {
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
        line-height: 24px;
        margin: 0 0 2rem;
      }
      h2 {
        color: #fff;
        font-size: 3rem;
        font-weight: 500;
        line-height: 24px;
        margin: 0 0 0.25rem;
      }
    }
  }
  .certificate_details {
    padding: 3rem;
    .name_date {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      h1 {
        color: #3e952e;
        font-size: 3rem;
        line-height: 44px;
        margin: 0 0 0.75rem;
      }
      .comp_date {
        display: inherit;
        justify-content: space-between;
        width: 100%;
        p {
          margin: 0;
        }
      }
    }
    .course_title {
      margin: 2rem 0 5rem;
    }
    .certified_by {
      width: 100%;
      .name {
        color: #0072c5;
        margin: 0 0 0.5rem;
      }
      p {
        color: #8b8b8b;
        font-size: 0.875rem;
        margin: 0;
      }
    }
  }
  .footer {
    background-color: #41952e;
    padding: 1.5rem 3rem;
    position: relative;
    a {
      color: #fff;
      font-size: 0.875rem;
      margin: 1.5rem 0 0;
    }
    .logo {
      background-color: #255f2b;
      bottom: 1.5rem;
      padding: 2.25rem 5rem 2.25rem 2.25rem;
      position: absolute;
      right: 0;
      img {
        width: 7rem;
      }
    }
  }
`;

export default Wrapper;
