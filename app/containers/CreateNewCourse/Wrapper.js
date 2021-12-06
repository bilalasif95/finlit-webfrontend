import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  .create_course {
    height: 100%;
    width: 100%;
    .details_list {
      display: flex;
      flex-direction: column;
      margin: 0 0 1rem;
      width: 100%;
      .item {
        align-items: center;
        background-color: #f4f6f9;
        border: 1px solid #d8d8d8;
        border-radius: 0.313rem;
        display: flex;
        justify-content: space-between;
        margin: 0 0 1rem;
        width: 100%;
        button {
          background-color: transparent;
          border: none;
          color: #484848;
          font-size: 0.875rem;
          font-weight: 550;
          text-align: left;
          width: 100%;
          &:focus {
            box-shadow: none;
          }
          &:last-child {
            width: 5rem;
            svg {
              font-size: 1.5rem;
            }
          }
        }
        .title_btn {
          align-items: center;
          display: inherit;
          font-size: 1.125rem;
          padding: 0.875rem 1rem 0.875rem 1.75rem;
          svg {
            height: 24px;
            margin: 0 0.5rem 0 0;
            width: 24px;
          }
        }
        .main_title {
          font-size: 1.25rem;
        }
        .action_btns {
          display: flex;
          justify-content: flex-end;
          margin: 0 1rem 0 0;
          button {
            width: 3rem;
            &:first-child {
              svg {
                height: 1.4rem;
                width: 1.4rem;
              }
            }
          }
        }
      }
    }
    .add_btn {
      align-items: center;
      display: flex;
      background-color: transparent;
      border: none;
      color: #46a135;
      font-size: 0.875rem;
      font-weight: 550;
      padding: 0.7rem 0;
      max-width: 10rem;
      &:focus {
        box-shadow: none;
        outline: none;
      }
      span {
        color: #46a135;
        font-size: 1rem;
        font-weight: 550;
        margin: 0 0.5rem 0 0;
      }
    }
    .upload_file {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      width: 100%;
      p {
        color: #575757;
        font-size: 0.875rem;
      }
    }
    .uploading_video {
      align-items: center;
      display: flex;
      justify-content: space-between;
      height: 6rem;
      width: 100%;
      .file_progress {
        width: 100%;
        p {
          color: #aaa;
          display: flex;
          font-size: 0.75rem;
          margin: 0 0 0.5rem;
        }
        span {
          color: #484848;
          font-weight: 550;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 15rem;
          display: inline-block;
          margin: 0 0.25rem;
        }
        .progress {
          height: 0.5rem;
          .progress-bar {
            background-color: #3e952e;
          }
        }
      }
      .del_video {
        display: flex;
        justify-content: flex-end;
        width: 4rem;
        button {
          background-color: transparent;
          border: none;
          color: #ec5252;
          height: 3rem;
          padding: 0 0.25rem 0 0;
          width: 3rem;
          &:focus {
            box-shadow: none;
          }
          svg {
            height: 2.5rem;
            width: 2.5rem;
          }
        }
      }
    }
    .quiz_footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
      p {
        font-size: 0.875rem;
        font-style: italic;
      }
    }
    .form-group {
      margin: 0 0 2rem;
    }
    .input-group {
      position: relative;
      .form-control {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
      }
      .text_limit {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
        .input-group-text {
          padding: 0.75rem 1rem;
          color: #404041;
          background-color: transparent;
          border: 1px solid transparent;
          line-height: 1.3;
          position: static;
        }
      }
      .input-group-append {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
        button {
          display: flex;
          background-color: transparent;
          border: none;
          color: #8d8d8d;
          padding: 0.7rem;
          &:focus {
            box-shadow: none;
            outline: none;
          }
        }
      }
    }
    textarea {
      max-height: 10rem;
      min-height: 10rem;
    }
    .custom {
      .form-control {
        border-top-right-radius: 0.25rem !important;
        border-bottom-right-radius: 0.25rem !important;
        padding: 0.75rem 1rem 0.75rem 1.6rem;
      }
      .input-group-text {
        padding: 0.75rem 1rem;
        color: #404041;
        background-color: transparent;
        border: 1px solid transparent;
        line-height: 1.3;
        position: absolute;
        left: 0;
        z-index: 3;
      }
    }
    .graphics {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 0 2rem;
      position: relative;
      width: 100%;
      .view_cont {
        align-items: center;
        background-color: #f4fcf3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // transform: translate(-50%, 0%);
        width: 100%;
      }
      .view_graphic {
        display: flex;
        justify-content: center;
        left: 0;
        position: absolute;
        top: 3.5rem;
        width: 100%;
        .upload_icon {
          align-items: center;
          background-color: #fff;
          // border: 1px solid #3e952e;
          border-radius: 5rem;
          display: flex;
          justify-content: center;
          width: 10rem;
          height: 10rem;
          margin: 0 0 2rem;
          padding: 2.5rem;
        }
        img {
          width: 100%;
        }
      }
      .camera {
        border-color: #d8d8d8;
        border-style: dashed;
        border-width: 1px;
        border-radius: 0.35rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: 17rem 3.5rem 3.5rem;
        position: relative;
        width: 100%;
        .support {
          color: #949494;
          font-size: 0.875rem;
          margin: 0.5rem 0 0;
          text-align: center;
        }
        .input--file {
          cursor: pointer;
          position: relative;
          color: #7f7f7f;
          display: flex;
          justify-content: flex-end;
          width: 40px;
        }
        .input--file input[type='file'] {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: 40px;
        }
        .drop_upload {
          display: flex;
          justify-content: center;
          p {
            color: #404041;
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
          }
          .browse {
            color: #3e952e;
            cursor: pointer;
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0 0 0 0.25rem;
          }
        }

        button {
          background-color: #3e952e;
          border: none;
          border-radius: 0px;
          color: #fff;
          cursor: pointer;
          font-size: 0.875rem;
          margin: 0 0 0 1rem;
          padding: 0.75rem 1.5rem;
          text-align: center;
          width: 10rem;
          z-index: 2;
          &:focus {
            box-shadow: none;
          }
        }
      }
      .view_thumb {
        align-items: center;
        border: 1px solid #d8d8d8;
        border-radius: 0.35rem;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 24.25rem;
        overflow: hidden;
        position: relative;
        video {
          // height: 100%;
          width: 100%;
        }
        .del_btn_container {
          align-items: center;
          background-color: transparent;
          display: flex;
          height: 100%;
          justify-content: center;
          position: absolute;
          transition: background-color 1s;
          width: 100%;
          z-index: 1;
          .del_btn {
            align-items: center;
            display: none;
            background-color: #fff;
            border: none;
            border-radius: 3rem;
            cursor: pointer;
            height: 5rem;
            padding: 0;
            width: 2rem;
            justify-content: center;
            width: 5rem;
            z-index: 1;
            svg {
              color: #000;
              font-size: 2rem;
            }
            &:focus {
              box-shadow: none;
            }
          }
          &:hover {
            background-color: #0000006b;
            .del_btn {
              display: flex;
            }
          }
        }
      }
      @media (max-width: 991px) {
        .view_thumb {
          height: 100%;
        }
      }
      @media (max-width: 767px) {
        .camera {
          padding: 17rem 2.5rem 2.5rem;
        }
      }
      @media (max-width: 575px) {
        .camera {
          padding: 15rem 0.5rem 2rem;
        }
      }
    }
    @media (max-width: 767px) {
      .details_list {
        margin: 0 0 0.5rem;
        .item {
          flex-wrap: wrap-reverse;
          .title_btn {
            font-size: 1rem;
            padding: 0.25rem 1rem 0.75rem 1rem;
          }
          .action_btns {
            margin: 0.75rem 0 0;
            width: 100%;
          }
        }
      }
      .upload_file {
        margin: 0 0 1rem;
      }
    }
  }
`;

export default Wrapper;
