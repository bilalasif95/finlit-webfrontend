import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.payment-box {
  border: 1px solid #e4e4e4;
  border-radius: 0.313rem;
  padding: 2rem;
  margin: 0 0 2rem;
  width: 100%;
}
.details_cart {
  margin-top: 30px;
}
.dashboard-main {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  .statistics-cont {
    width: 68%;
  }
  .events-cont {
    width: 30%;
    box-shadow: 0px 1px 5px #00000029;
    padding: 17px 28px 17px 31px;
    border-radius: 5px;
  }
}
  .verification-main {
    height: 100vh;
    display: flex;
    align-items: center;
    .email-verification {
      width: 34%;
      margin: 0px auto;
      text-align: center;
      img {
        margin-bottom:  41px;
      }
      h4 {
        font-size: 24px;
        color: #484848;
        font-weight: 700;
      }
      p {
        margin: 15px 0px 30px;
        font-size: 16px;
        color: #8b8b8b;
      }
      .verification-button {
        width: 80%;
        background-color: #46a135;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        color: #fbfbfb;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px auto;
        text-decoration: none;
        &:focus, &:active, &:hover {
          box-shadow: inherit;
          outline: none;
        }
      }
    }
  }
  .no_display {
    display: none;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Lato', sans-serif;
  }

  .MuiFormLabel-root {
    font-family: 'Lato', sans-serif !important;
    margin: 0 0 0.5rem;
  }
  .MuiMenuItem-root {
    font-family: 'Lato', sans-serif !important;
  }

  #app {
    background-color: #F8F9FB;
    min-height: 100%;
    min-width: 100%;
  }

  p {
    margin: 0;
  }
  label {
    line-height: 1.5em;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
  a {
    -webkit-transition: color 0.5s ease-out;
    -moz-transition: color 0.5s ease-out;
    -o-transition: color 0.5s ease-out;
    transition: color 0.5s ease-out;
  }
  label {
    font-size: 0.825rem;
    margin: 0 0 0.75rem;
  }
  .btn {
    -webkit-transition: background-color 0.5s ease-out;
    -moz-transition: background-color 0.5s ease-out;
    -o-transition: background-color 0.5s ease-out;
    transition: background-color 0.5s ease-out;
    &:focus {
      box-shadow: none;
      outline: none;
    }
  }
  // Page Footer Btns Styles
  .form_footer {
    .top_btns {
      align-items: center;
      display: flex;
      justigy-content: flex-start;
      button {
        color: #fff;
        margin: 0 1rem 0 0;
        min-width: 150px;
        padding: 0.75rem;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .bottom_btns {
      align-items: center;
      display: flex;
      justify-content: flex-end;
      width: 100%;
      button {
        color: #fff;
        margin: 0 0 0 1rem;
        min-width: 200px;
        padding: 0.75rem;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .btn_add {
      background-color: #8b8b8b;
      border: 1px solid #8b8b8b;
    }
    .btn_del {
      background-color: #d7d7d7;
      border: 1px solid #d7d7d7;
    }
    .btn_save {
      background-color: #adadad;
      border: 1px solid #adadad;
    }
    .btn_submit {
      background-color: #46a135;
      border: 1px solid #46a135;
    }
    .btn_cancel {
      background-color: #8b8b8b;
      border: 1px solid #8b8b8b;
    }
    @media (max-width: 480px) {
      width: 100%;
      .top_btns {
        justify-content: space-between;
        margin : 0 0 1rem;
        button {
          margin: 0;
          min-width: 100px;
          width: 48%;
        }
      }
      .bottom_btns {
        justify-content: space-between;
        margin : 0 0 1rem;
        button {
          margin: 0;
          min-width: 100px;
          width: 47%;
          &:last-child {
            min-width: 100px;
          }
        }
      }
    }
  }
  .camera {
    .form-control {
      color: #8b8b8b;
      display: flex;
      justify-content: space-between;
      p {
        margin: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .input--file {
      cursor: pointer;
      position: relative;
      color: #7f7f7f;
      display: flex;
      justify-content: flex-end;
      width: 40px;
    }
    .input--file input[type="file"] {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 40px;
    }
  }

  #services {
    background-color: #F8F9FB;
    padding: 4rem 0 0;
    .slick-dots {
      bottom: -40px;
    }
    .header {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 0 2rem;
      width: 100%;
      h4 {
        color: #404041;
        font-size: 1.25rem !important;
      }
      a {
        color: #000;
        font-size: 0.875rem;
        text-decoration: none;
      }
    }
    h5 {
      color: #000;
      font-size: 1rem;
      font-weight: 400;
      margin: 0 0 1.25rem;
    }
    p {
      color: #8b8b8b;
      font-size: 0.875rem;
      margin: 0;
    }
  }
  @media (max-width: 1024px) and (min-width: 767px) {
    #services {
      h5 {
        min-height: 40px;
      }
    }
  }
  @media (max-width: 991px) {
    #services {
    padding: 2rem 0 0 !important;
  }
}

// Registration Form Pages Styles
.registration_page {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  // height: 100vh;
  // position: fixed;
  width: 100%;
  .error {
    color: red;
    margin-bottom: 20px;
  }
  .Login-form {
    height: 100vh !important;
  }
  .form_container {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      padding: 2rem;
      .form_content {
          padding: 1rem;
          margin: 0 auto;
          max-width: 475px;
          width: 100%;
          h2 {
              color: #484848;
              line-height: 44px;
              margin: 0 0 1.25rem;
          }
          .form-group {
              margin: 0 0 1rem;
          }
          .form_err {
            margin: 0 0 1.5rem;
          }
          label {
            color: #484848;
            line-height: 1rem;
            font-size: 14px;
          }
          .form-control {
            color: #484848;
            border-radius: 3px;
            border: 1px solid #e6e6e6;
            &:focus {
              border: 1px solid #80bb2b;
              box-shadow: none;
            }
            &::placeholder {
              color: #e6e6e6;
            }
          }
          button {
              background-color: #46a135;
              border: none;
              color: #fff;
              font-size: 0.825rem;
              -webkit-transition: background-color 2s; /* For Safari 3.0 to 6.0 */
              transition: background-color 2s; /* For modern browsers */
              padding: 0.75rem;
              width: 100%;
              margin: 14px 0px 0px;
              &:focus {
                  background-color: #2c821c;
                  box-shadow: none;
              }
              &:hover {
                  background-color: #2c821c;
              }
          }
          .remember_forgot {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 0 0 1.5rem;
              width: 100%;
              a {
                  color: #57aa48;
                  font-size: 0.825rem;
                  text-decoration: none;
                  &:hover {
                      color: #2c821c;
                  }
              }
              .form-group {
                  width: 48%;
              }
              p {
                font-size: 0.825rem;
              }
          }
          .reg_footer {
              display: flex;
              font-size: 0.825rem;
              justify-content: center;
              margin: 1.5rem 0 0;
              p {
                  color: #9d9d9d;
              }
              a {
                  color: #5dad4e;
                  text-decoration: none;
                  &:hover {
                      color: #2c821c;
                  }
              }
          }
      }
  }
  .img_container {
      background-image: url(https://cdn.discordapp.com/attachments/548125906472796170/882576760540114994/reg.png);
      background-size: cover;
      background-position: center;
      height: 100%;
      width: 50%;
      position: fixed;
      right: 0;
  }
  @media (max-width: 991px) {
      height: 100% !important;
      flex-wrap: wrap-reverse;
      .form_container {
          padding: 0 !important;
          width: 100% !important;
          .form_content {
              padding: 2rem 1rem !important;
          }
      }
      .img_container {
          height: 600px;
          width: 100% !important;
      }
  }
  @media (max-width: 767px) {
      .img_container {
          height: 400px;
      }
  }
}
// Modal UI Custom Styles
.modal-open {
  padding-right: 0 !important;
}
.modal {
  .modal-header {
    border-bottom: none;
    padding: 1.5rem 1rem 0;
    .close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      align-items: center;
      font-size: 1.75rem;
      color: #8b8b8b;
      border: 2px solid #8b8b8b;
      padding: 0;
      height: 1.75rem;
      width: 1.75rem;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
    }
    @media (max-width: 424px) {
      .close {
        top: 0.5rem;
        right: 0.5rem;
      }
    }
  }
  .modal-title {
    color: #484848;
    font-size: 1.25rem;
    font-weight: 550;
    text-align: center;
    width: 100%;
  }
  .modal_form {
    display: block;
    margin: 0 auto;
    max-width: 27rem;
    width: 100%;
    p {
      color: #9a999a;
      text-align: center;
    }
  }
  .security_verify {
    margin: 0 auto;
    max-width: 27rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    p {
      color: #9a999a;
      text-align: center;
    }
    svg {
      fill: #47a135;
      height: 2rem;
      margin: 1.5rem auto 1rem;
      width: 2rem;
    }
    h4 {
      color: #404041;
      font-size: 1rem;
      font-weight: 400;
      margin: 0 0 0.5rem;
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
    margin: 0 auto;
    max-width: 27rem;
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
      color: #9a999a;
      font-size: 1rem;
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
  .invis {
    .modal-title {
      span {
        visibility: hidden;
      }
    }
  }
  .modal-footer {
    border-top: none;
    justify-content: center;
    padding: 0 1rem 1.5rem;
    button {
      margin: 0 0.5rem;
      min-width: 150px;
    }
    .btn_save {
      background-color: #adadad;
      border: 1px solid #adadad;
    }
    .btn_submit {
      background-color: #47a135;
      border: 1px solid #47a135;
    }
  }
  @media (max-width: 424px) {
    .modal-footer {
      justify-content: space-between;
      button {
        margin: 0;
        min-width: 35%;
      }
    }
  }
}
@media (min-width: 576px) {
  .verification-main {
    width: 100%;
  }
  .modal-dialog {
    margin: 10% auto 5%;
    max-width: 600px !important;
  }
}
@media (max-width: 575px) {
  .dashboard-main {
    width: 100%;
    margin-top: 30px;
    display: inherit;
    flex-wrap: wrap;
    .statistics-cont, .events-cont {
      width:100%;
    }
    .events-cont {
      padding: 20px 20px;
      margin-top: 21px;
      .calendar-cont h3 {
        font-size: 20px;
      }
    }
  }
  .verification-main .email-verification {
    width: 100%;
    button {
      min-width: 64%;
    }
  }
  .modal-dialog {
    margin: 10% auto 5%;
    max-width: 600px !important;
  }
}
@media (max-width: 768px) {
  .registration_page .img_container {
    display: none;
  }
}

.custom_container {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0.5rem 3rem;
}
@media (max-width: 991px) {
  .custom_container {
    margin: 0 auto;
    max-width: 100%;
    padding: 0.5rem 0;
  }
}
.sub_page {
  background-color: #fff;
  padding: 0;
}
@media (min-width: 575px) and (max-width: 992px) { 
  .verification-main .email-verification {
    width: 64%;
  }
}
.form-control {
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  &:focus {
    box-shadow: none;
  }
}
.form-text {
  position: absolute;
  height: 24px;
  .error {
    color: red !important;
    font-size: 0.75rem;
  }
}
.check-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .form-check-input {
    margin: 0 10px 0 -21px;
  }
}
.Head-Link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 1.5rem;
  a {
    background: #46A135;
    color: #ffffff;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0px;
    width: 96px;
    text-decoration: none;
    text-align: center;
    span {
      margin-right: 10px;
      font-size: 16px;
    }
  }
}
`;

export default GlobalStyle;
