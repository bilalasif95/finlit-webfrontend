/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'utils/history';
import mastercard from '../../../../images/mastercard.svg';
import paypalicon from '../../../../images/paypal.svg';
import { axiosHeader } from '../../../../utils/axiosHeader';
import { API } from '../../../../config/config';
import Wrapper from './Wrapper';
import messages from './messages';
function CartCheckoutSidebar(props) {
  const [paymentType, setPaymentType] = useState({ card: true, paypal: false });
  const [loader, setLoader] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    email: '',
    cardHolderName: '',
    cardNumber: '',
    MMYY: '',
    CVC: '',
    rememberCard: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = type => {
    if (type === 'card') {
      setPaymentType({ card: true, paypal: false });
    } else {
      setPaymentType({ card: false, paypal: true });
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
          toast.success(`Checkout successful. You will get an email shortly`);
          setLoader(false);
          setTimeout(() => {
            history.push('/');
          }, 5000);
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
    } else {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validEmail = regex.test(String(values.email).toLowerCase());
      if (!validEmail) {
        error.email = 'Invalid email';
      } else if (!values.cardHolderName) {
        error.cardHolderName = 'Card name is required';
      } else if (!values.cardNumber) {
        error.cardNumber = 'Card number is required';
      } else {
        const validateCard = values.cardNumber.toString().search('_');
        if (validateCard >= 0) {
          error.cardNumber = 'Invalid card number format';
        } else if (!values.MMYY) {
          error.MMYY = 'MM / YY  is required';
        } else {
          const validateMM = values.MMYY.toString().search('M');
          if (validateMM >= 0) {
            error.MMYY = 'Invalid format mm/yy';
          } else {
            const validateyy = values.MMYY.toString().search('Y');
            if (validateyy >= 0) {
              error.MMYY = 'Invalid format mm/yy';
            } else if (!values.CVC) {
              error.CVC = 'CVC is required';
            }
            // else if (isNaN(values.CVC)) {
            //   error.CVC = 'Invalid CVC format';
            // }
          }
        }
      }
    }
    return error;
  };
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <div className="payment-box">
            <div className="heading">
              <h4>
                <FormattedMessage {...messages.PaymentDetails} />
              </h4>
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
                onChange={e => handleChangeEvent(e)}
                placeholder="Enter email"
                required
              />
              <Label for="email">
                {errors.email ? <p className="error"> {errors.email} </p> : ''}
              </Label>
            </FormGroup>
            <FormGroup tag="fieldset">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="paymentType"
                    onChange={() => handleChange('card')}
                    checked={paymentType.card}
                  />
                  <FormattedMessage {...messages.CreditCard} />
                </Label>
                <div className="icon">
                  <img
                    src={mastercard}
                    alt="Master card"
                    height="100%"
                    width="100%"
                  />
                </div>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input
                    type="radio"
                    name="paymentType"
                    onChange={() => handleChange('Paypal')}
                    checked={paymentType.paypal}
                    disabled
                  />
                  <FormattedMessage {...messages.PayPal} />
                </Label>
                <div className="icon">
                  <img
                    src={paypalicon}
                    alt="Paypal"
                    height="100%"
                    width="100%"
                  />
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
                onChange={e => handleChangeEvent(e)}
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
              <NumberFormat
                format="#### #### #### ####"
                mask="_"
                name="cardNumber"
                value={checkoutInfo.cardNumber}
                onChange={e => handleChangeEvent(e)}
                placeholder="Enter number"
                className="form-control"
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
              <Label for="mmyy">
                <FormattedMessage {...messages.MMYY} />
              </Label>
              <NumberFormat
                format="##/##"
                mask={['M', 'M', 'Y', 'Y']}
                id="mmyy"
                name="MMYY"
                value={checkoutInfo.MMYY}
                onChange={e => handleChangeEvent(e)}
                placeholder="mm - yy "
                className="form-control"
              />
              <Label for="mmyy">
                {errors.MMYY ? <p className="error"> {errors.MMYY} </p> : ''}
              </Label>
            </FormGroup>

            <FormGroup>
              <Label for="cvc">
                <FormattedMessage {...messages.CVC} />
              </Label>
              <NumberFormat
                format="###"
                placeholder="Enter CVC"
                name="CVC"
                value={checkoutInfo.CVC}
                onChange={e => handleChangeEvent(e)}
                className="form-control"
              />
              <Label for="cvc">
                {errors.CVC ? <p className="error">{errors.CVC}</p> : ''}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check className="check_label">
                <Input
                  type="checkbox"
                  name="rememberCard"
                  checked={checkoutInfo.rememberCard}
                  onChange={e => handleChangeEvent(e)}
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
          </div>
        </Wrapper>
      </Col>
      <ToastContainer />
    </Row>
  );
}
CartCheckoutSidebar.propTypes = {
  props: PropTypes.any,
  details: PropTypes.any,
};

export default CartCheckoutSidebar;
