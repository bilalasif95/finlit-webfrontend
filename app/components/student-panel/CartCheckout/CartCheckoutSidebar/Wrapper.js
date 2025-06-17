import styled from 'styled-components';

const Wrapper = styled.div`
  .error {
    color: red;
  }
  margin-top: 31px;
  .heading {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 0 1rem;
    img {
      margin-right: 14px;
    }
    h4 {
      color: #404041;
      font-size: 1.25rem;
      margin: 0;
      position: relative;
    }
    svg {
      color: #8b8b8b;
      font-size: 1.5rem;
    }
  }
  p {
    color: #8b8b8b;
    font-size: 0.875rem;
    margin: 0 0 1rem;
  }
  .cardSelect {
    padding: 1.5rem 2rem;
    .form-check {
      align-items: center;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      margin: 0;
      label {
        color: #484848;
        font-size: 0.875rem;
        margin: 0;
      }
    }
    .form-check-input:focus {
      box-shadow: none;
    }
    .form-check-input:checked {
      background-color: transparent;
      border-color: #255f2b;
    }
    .form-check-input:checked[type='radio'] {
      background-image: url(https://cdn.discordapp.com/attachments/548125906472796170/887240829683507240/checkdot.png);
      background-size: 6px;
      background-position: center;
    }
  }
  .card_payment {
    margin: 1rem 0 0;
  }
  .paypal {
    border: 1px solid #276F86;
    border-radius: 5px;
    background-color: #F8FFFF;
    padding: 1rem;
    margin: 1.5rem 0 0; 
    p {
      margin-bottom: 0px;
      position: relative;
      padding-left: 30px;
      color: #276F86;
      font-weight: 700;
      font-size: 14px;
      img {
        position: absolute;
        left: 0;
        top: 3px;
      }
    }
  }
  // .paypal {
  //   background-color: #fbfbfb;
  //   padding: 1rem;
  //   p {
  //     color: #484848;
  //     font-size: 0.875rem;
  //     margin: 0;
  //   }
  // }
  .form-group {
    margin: 0 0 1rem;
    label {
      color: #484848;
      font-size: 0.875rem;
    }
    .form-control {
      border-top-right-radius: 0.25rem !important;
      border-bottom-right-radius: 0.25rem !important;
      &:focus {
        box-shadow: none;
      }
      &::placeholder {
        color: #e6e6e6;
      }
    }
  }
  .form-check {
    label {
      color: #8b8b8b;
    }
    .form-check-input:checked {
      background-color: transparent;
      border-color: #47a135;
    }
    .form-check-input:focus {
      box-shadow: none;
    }
  }
  ul {
    margin: 1rem 0 0;
    padding: 0;
    li {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0 0 1rem;
      p {
        color: #484848;
        font-size: 0.875rem;
        line-height: 16px;
        margin: 0;
        width: 50%;
        &:last-child {
          text-align: right;
        }
      }
      h4 {
        color: #ec5252;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 24px;
        margin: 0;
        text-align: right;
        width: 50%;
      }
    }
  }
  .term_service {
    p {
      color: #8b8b8b;
      font-size: 0.625rem;
      line-height: 12px;
      margin-bottom: 40px;
    }
    a {
      color: #46a135;
      font-size: 0.625rem;
      line-height: 12px;
      text-decoration: none;
    }
  }
  button {
    background-color: #46a135;
    border: 1px solid #46a135;
    border-radius: 0.313rem;
    color: #fff;
    font-size: 0.875rem;
    font-weight: 550;
    line-height: 17px;
    margin: 0 0 1.25rem;
    padding: 1rem 0.85rem;
    width: 100%;
    &:hover {
      background-color: #46a135;
      border: 1px solid #46a135;
    }
    &:focus {
      background-color: #46a135;
      border: 1px solid #46a135;
      box-shadow: none;
    }
  }
  .secure_payment {
    align-items: center;
    display: flex;
    margin: 1rem 0 0;
    width: 100%;
    svg {
      color: #8b8b8b;
      width: 1.25rem;
      height: 1.25rem;
    }
    p {
      margin: 0;
    }
  }
  @media (max-width: 960px) and (min-width: 768px) {
    margin: 0 0 1.5rem;
    padding: 1.25rem;
  }
  @media (max-width: 767px) {
    margin: 1rem 0;
    padding: 1.25rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    .payment-box {
      .heading {
        h4 {
          font-size: 16px;
          img {
            margin-right: 6px;
          }
        }
      }
      .innerBox {
       .paypalBox {
          padding: 10px 10px;
          margin-bottom: 20px;
        }
      }
      .innerBox, .cardSelect {
        padding: 1rem;
      }
      .summary {
        h4 {
          font-size 16px;
        }
        .list {
          li {
            padding: 15px 0px;
            p {
              span {
                width: 162px;
                font-size: 12px;
              }
            } 
          } 
        } 
      } 
      .secure_payment {
        p {
          font-size: 12px;
        }
      }
      .term_service {
        p {
          font-size: 12px;
          margin-bottom: 20px;
        }
      }
    }
  }
  
`;

export default Wrapper;
