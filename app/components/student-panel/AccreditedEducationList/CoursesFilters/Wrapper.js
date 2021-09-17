import styled from 'styled-components';

const Wrapper = styled.div`
  .course_filters {
    align-items: center;
    border-radius: 5px;
    background-color: #fbfbf8;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 100%;
    .filter-label {
      color: #484848;
      font-size: 14px;
      margin-bottom: 10px;
    }
    .form-group {
      padding: 0 0.5rem;
      width: 20%;
      label {
        color: #484848;
      }
      .input-group {
        .form-control {
          border-top-left-radius: 0.25rem !important;
          border-bottom-left-radius: 0.25rem !important;
          padding: 0.375rem 0.75rem 0.375rem 2.25rem !important;
        }
        .input-group-prepend {
          position: absolute;
          top: 1px;
          z-index: 4;
          .input-group-text {
            background-color: transparent;
            border: none;
          }
        }
      }
    }
  }
  .total_results {
    font-size: 14px;
    padding: 13px 0px 14px 0;
    color: #484848;
  }
  @media (max-width: 991px) {
    .course_filters {
      flex-wrap: wrap;
      justify-content: flex-start;
      .form-group {
        width: 33.33%;
        &:nth-child(4),
        &:last-child {
          margin: 1.5rem 0 0;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .course_filters {
      .form-group {
        width: 50%;
        &:nth-child(3),
        &:nth-child(4),
        &:last-child {
          margin: 1.5rem 0 0;
        }
      }
    }
  }
  @media (max-width: 575px) {
    .course_filters {
      padding: 1rem 0.75rem;
      .form-group {
        width: 100%;
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:last-child {
          margin: 1rem 0 0;
        }
      }
    }
  }
`;

export default Wrapper;
