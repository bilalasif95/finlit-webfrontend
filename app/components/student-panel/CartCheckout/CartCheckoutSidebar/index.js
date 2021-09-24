/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import { IoMdLock } from 'react-icons/io';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';
import mastercard from '../../../../images/mastercard.svg';
import paypalicon from '../../../../images/paypal.svg';
import axios from 'axios';
import { axiosHeader } from "../../../../utils/axiosHeader"
import { API } from '../../../../config/config';
import history from 'utils/history';


function CartCheckoutSidebar(props) {
  const [paymentType, setPaymentType] = useState({ card: true, paypal: false }),
    [loader, setLoader] = useState(false),
    [checkoutInfo, setCheckoutInfo] = useState({
      email: '',
      cardHolderName: '',
      cardNumber: '',
      MMYYCVC: '',
      rememberCard: false
    }),
    [errors, setErrors] = useState({});

  const handleChange = (type) => {

    if (type == "card") {
      setPaymentType({ card: true, paypal: false })
    }
    else {
      setPaymentType({ card: false, paypal: true })

    }
  };


  const handleChangeEvent = event => {
    if (event.target.type === 'checkbox') {
      setCheckoutInfo({
        ...checkoutInfo,
        [event.target.name]: event.target.checked,
      });
    } else if (event.target.type === 'file') {
      setCheckoutInfo({
        ...checkoutInfo,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setCheckoutInfo({
        ...checkoutInfo,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleCheckout = () => {
    if (Object.keys(validator(checkoutInfo)).length > 0) {
      setErrors(validator(checkoutInfo));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      setLoader(true);
      axios
        .get(`${API}api/cart/checkout`, axiosHeader)
        .then(() => {
          setLoader(false);
          history.push("/")

        })
        .catch(err => {
          setLoader(false);
          setErrors(err.response && err.response.data.message);
        });
    }
  };

  const validator = values => {
    const error = {};
    if (!values.email) {
      error.email = 'Email is required';
    }
    else {

      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validEmail = regex.test(String(values.email).toLowerCase());
      if (!validEmail) {
        error.email = 'Invalid email';
      }
      else if (!values.cardHolderName) {
        error.cardHolderName = 'Card name is required';
      } else if (!values.cardNumber) {
        error.cardNumber = 'Card number is required';
      } else if (!values.MMYYCVC) {
        error.MMYYCVC = 'MM / YY CVC  is required';
      }

    }

    return error;
  };


  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <div className="heading">
            <h4>
              <FormattedMessage {...messages.PaymentDetails} />
            </h4>
            {/* <Link to="/">
              <BsArrowLeftShort />
            </Link> */}
          </div>
          <p>
            <FormattedMessage {...messages.CompletePurchase} />
          </p>
          <FormGroup>
            <Label for="email">
              <FormattedMessage {...messages.EmailAddress} />
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={checkoutInfo.email}
              onChange={(e) => handleChangeEvent(e)}
              placeholder="Enter email"
              required
            />
            <Label for="email">
              {errors.email ? (
                <p className="error"> {errors.email} </p>
              ) : (
                ''
              )}
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="paymentType" onChange={() => handleChange("card")} checked={paymentType.card} />
                <FormattedMessage {...messages.CreditCard} />
              </Label>
              <div className="icon">
                <img src={mastercard} alt="Master card" />
              </div>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="paymentType" onChange={() => handleChange("Paypal")} checked={paymentType.paypal} disabled={true} />
                <FormattedMessage {...messages.PayPal} />
              </Label>
              <div className="icon">
                <img src={paypalicon} alt="Paypal" />
              </div>
            </FormGroup>
          </FormGroup>
          {/* <div className="paypal">
            <p>
              <FormattedMessage {...messages.PayPalInfo} />
            </p>
          </div> */}
          <FormGroup>
            <Label for="cardholdername">
              <FormattedMessage {...messages.CardholderName} />
            </Label>
            <Input
              type="text"
              name="cardHolderName"
              id="cardholdername"
              value={checkoutInfo.cardHolderName}
              onChange={(e) => handleChangeEvent(e)}
              placeholder="Enter name"
            />
            <Label for="cardholdername">
              {errors.cardHolderName ? (
                <p className="error"> {errors.cardHolderName} </p>
              ) : (
                ''
              )}
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="cardnumber">
              <FormattedMessage {...messages.CardNumber} />
            </Label>
            <Input
              type="text"
              name="cardNumber"
              id="cardnumber"
              value={checkoutInfo.cardNumber}
              onChange={(e) => handleChangeEvent(e)}
              placeholder="Enter number"
            />
            <Label for="cardnumber">
              {errors.cardNumber ? (
                <p className="error"> {errors.cardNumber} </p>
              ) : (
                ''
              )}
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="cvc">
              <FormattedMessage {...messages.MMYYCVC} />
            </Label>
            <Input
              type="text"
              name="MMYYCVC"
              id="cvc"
              value={checkoutInfo.MMYYCVC}
              placeholder="mm - yy - CVC"
              onChange={(e) => handleChangeEvent(e)}

            />
            <Label for="cvc">
              {errors.MMYYCVC ? (
                <p className="error"> {errors.MMYYCVC} </p>
              ) : (
                ''
              )}
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check className="check_label">
              <Input type="checkbox" name="rememberCard" checked={checkoutInfo.rememberCard}
                onChange={(e) => handleChangeEvent(e)}
              />
              <FormattedMessage {...messages.RememberCard} />
            </Label>
          </FormGroup>
          <div className="summary">
            <h4>
              <FormattedMessage {...messages.Summary} />
            </h4>
            <ul clasName="list">
              <li>
                <p>
                  <FormattedMessage {...messages.OriginalPrice} />
                </p>
                <p>${props.details.total}</p>
              </li>
              <li>
                <p>
                  <FormattedMessage {...messages.CouponDiscounts} />
                </p>
                <p>-$000</p>
              </li>
              <li>
                <p>
                  <FormattedMessage {...messages.Total} />
                </p>
                <h4>${props.details.total}</h4>
              </li>
            </ul>
          </div>
          <div className="term_service">
            <p>
              <FormattedMessage {...messages.YouAgree} />
              &nbsp;
              <Link to="/">
                <FormattedMessage {...messages.TermsService} />
              </Link>
            </p>
          </div>
          <Button onClick={() => handleCheckout()}>
            {loader ? `loading...` : `Pay$${props.details.total}`}

          </Button>
          <div className="secure_payment">
            <IoMdLock />
            <p>
              <FormattedMessage {...messages.PaymentsEncrypted} />
            </p>
          </div>
        </Wrapper>
      </Col>
    </Row>
  );
}

export default CartCheckoutSidebar;
