import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 0 2rem;
  .article {
    border: 1px solid #e4e4e4;
    border-radius: 0.25rem;
    padding: 2rem;
    h4 {
      color: #484848;
      line-height: 29px;
    }
    .article_outcomes {
      align-items: center;
      display: flex;
      justify-content: sflex-start;
      margin: 1rem 0 0;
      width: 100%;
      .item {
        align-items: center;
        color: #8b8b8b;
        display: flex;
        justify-content: flex-start;
        padding: 0 1.5rem 0 0;
        span {
          font-size: 0.875rem;
        }
        svg {
          margin-right: 0.5rem;
        }
      }
    }
    .article_desc {
      margin: 2rem 0 0;
      text-align: justify;
      max-height: 610px;
      overflow-y: auto;
      ::-webkit-scrollbar {
        display: none;
      }
      p {
        color: #484848;
        font-size: 0.875rem;
      }
    }
  }
  @media (max-width: 960px) and (min-width: 768px) {
    .article {
      padding: 1.25rem;
      .article_outcomes {
        flex-wrap: wrap;
        .item {
          width: 33.33%;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .article {
      padding: 1.25rem;
    }
  }
  @media (max-width: 600px) {
    .article {
      padding: 1rem;
      .article_outcomes {
        flex-wrap: wrap;
        .item {
          width: 33.33%;
        }
      }
    }
  }
  @media (max-width: 480px) {
    .article {
      padding: 1rem;
      .article_outcomes {
        flex-wrap: wrap;
        .item {
          margin: 0 0 1rem;
          width: 50%;
        }
      }
      .article_desc {
        padding: 0 0 1.5rem;
      }
    }
  }
`;

export default Wrapper;
