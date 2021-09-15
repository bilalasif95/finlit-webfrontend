import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
      background-color: #47a135;
      border: 1px solid #47a135;
    }
    @media (max-width: 480px) {
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
          width: 40%;
          &:last-child {
            min-width: 100px;
            width: 56%;
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
      color: #8B8B8B;
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
  height: 100vh;
  .error {
    color: red;
    margin-bottom: 20px;
  }
  .form_container {
      width: 50%;
      display: flex;
      align-items: center;
      padding: 5rem;
      .form_content {
          padding: 2rem;
          margin: 0 auto;
          max-width: 670px;
          width: 100%;
          h2 {
              color: #484848;
              margin: 0 0 1.5rem;
          }
          .form-group {
              margin: 0 0 1rem;
          }
          .form-control {
              &:focus {
                  border: 1px solid #9dca5c;
                  box-shadow: none;
              }
              &::placeholder {
                  color: #d4d4d4;
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
.sub_pages {
  background-color: #fff;
  padding: 2rem 0;
  @media (max-width: 991px) {
    padding: 1rem 0;
  }
}

.error-box {
  position: relative;
  height: 20px;
  margin: 0px 0px 10px;
  .error {
    position: absolute;
    color: red;
  }
}

`;

export default GlobalStyle;
