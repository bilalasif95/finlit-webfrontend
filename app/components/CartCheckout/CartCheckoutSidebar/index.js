/*
 * Cart Checkout Sidebar Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, FormGroup, Input, Label, Button } from 'reactstrap';
import { IoMdLock } from 'react-icons/io';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';
import mastercard from '../../../images/mastercard.svg';
import paypal from '../../../images/paypal.svg';

function CartCheckoutSidebar() {
  return (
    <Row>
      <Col lg={12}>
        <Wrapper>
          <div className="heading">
            <h4>
              <FormattedMessage {...messages.PaymentDetails} />
            </h4>
            <Link to="/">
              <BsArrowLeftShort />
            </Link>
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
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />
                <FormattedMessage {...messages.CreditCard} />
              </Label>
              <div className="icon">
                <img src={mastercard} alt="Master card" />
              </div>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />
                <FormattedMessage {...messages.PayPal} />
              </Label>
              <div className="icon">
                <img src={paypal} alt="Paypal" />
              </div>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="cardholdername">
              <FormattedMessage {...messages.CardholderName} />
            </Label>
            <Input
              type="text"
              name="cardholdername"
              id="cardholdername"
              placeholder="Enter name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="cardnumber">
              <FormattedMessage {...messages.CardNumber} />
            </Label>
            <Input
              type="text"
              name="cardnumber"
              id="cardnumber"
              placeholder="Enter number"
            />
          </FormGroup>
          <FormGroup>
            <Label for="cvc">
              <FormattedMessage {...messages.MMYYCVC} />
            </Label>
            <Input
              type="text"
              name="cvc"
              id="cvc"
              placeholder="mm - yy - CVC"
            />
          </FormGroup>
          <FormGroup check>
            <Label check className="check_label">
              <Input type="checkbox" />
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
                <p>$94.99</p>
              </li>
              <li>
                <p>
                  <FormattedMessage {...messages.CouponDiscounts} />
                </p>
                <p>-$74.00</p>
              </li>
              <li>
                <p>
                  <FormattedMessage {...messages.Total} />
                </p>
                <h4>$20.99</h4>
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
          <Button>
            <FormattedMessage {...messages.Pay} />
            &nbsp;$20.00
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
