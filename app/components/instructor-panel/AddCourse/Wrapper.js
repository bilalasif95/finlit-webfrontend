import styled from 'styled-components';

const Wrapper = styled.div`
.mb-0 {
  margin-bottom: 0px;
}
.add_form {
  .addInput {
    position: relative;
    button {
      position: absolute;
      z-index: 1;
      right: 15px;
      background: transparent;
      border: none;
      color: #74b867;
      top: 53%;
    }
    .levelSelect {
      svg {
        left: 80px;
      }
    }
  }
  .graphicsLecture {
    display: flex;
    align-items: center;
    .form-group {
      width: 34%;
    }
  }
  .addLecture {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    button {
      background: transparent;
      border: none;
      color: #74b867;
      font-size: 18px;
      &:first-child {
        span {
          border: 2px solid #46a135;
          border-radius: 100%;
          height: 20px;
          width: 20px;
          line-height: 16px;
          display: inline-block;
          color: #46a135;
          font-size: 18px;
          font-weight: 600;
          margin-right: 15px;
        }
      }
    }
  }
  .lectureList {
    display: flex;
    justify-content: space-between;
    background-color: #eaeaea;
    padding: 15px 15px;
    border-radius: 5px;
    .list-icons {
      button {
        border: none;
        background: transparent;
        &:first-child {
          margin-right: 20px;
        }
        svg {
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
      }
    }
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .selectAnswer {
    .Answers {
      border: 1px solid #d8d8d8;
      padding: 13px 15px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      &:first-child {
        margin-top: 45px;
      }
      .radio {
        margin-right 10px;
        height: 20px;
        width: 20px;
      }
      .textField {
        width: 100% !important;
        border: none;
        &:focus {
          border: none;
          box-shadow: inherit;
          outline: none;
        }
      }
    }
  }
}
  p {
    color: #9a999a;
    margin: 0 0 1.5rem;
  }
  .form-group {
    margin: 0 0 1.75rem;
  }
  label {
    color: #404041;
  }
  .jodit {
    p {
      color: #404041;
    }
  }
  .custom {
    .form-control {
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      padding: 0.75rem 3.25rem 0.75rem 1rem;
    }
  }
  .input-group-text {
    padding: 0.75rem 1rem;
    color: #404041;
    background-color: transparent;
    border: 1px solid transparent;
    position: absolute;
    right: 0;
    z-index: 3;
  }
  .graphics {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .form-group {
      margin: 0;
      width: 65%;
    }
  }
  .view_graphic {
    align-items: center;
    background-color: #eaeaea;
    border: 1px solid #eaeaea;
    border-radius: 0.35rem;
    display: flex;
    justify-content: center;
    margin: 0 1.5rem 0 0;
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    position: relative;
    img {
      height: 100%;
      width: 100%;
    }
    svg {
      color: #c0c0c0;
      font-size: 3rem;
    }
    .del_btn {
      background-color: #fff;
      border: none;
      padding: 0;
      position: absolute;
      left: 0.125rem;
      top: 0.125rem;
      svg {
        color: #000;
        font-size: 2rem;
      }
    }
  }
`;

export default Wrapper;
