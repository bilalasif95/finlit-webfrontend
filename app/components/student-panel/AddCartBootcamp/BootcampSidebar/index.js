/*
 * Cart Checkout Sidebar Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Input, Label, Button } from 'reactstrap';
// import { IoMdLock } from 'react-icons/io';
// import { BsArrowLeftShort } from 'react-icons/bs';
import { RiStarSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';

function HackathonSidebar() {
  return (
    <Wrapper>
      <div className="top_detail">
        <div className="prices">
          <h4>$20.99</h4>
          <del>$94.99</del>
          <span>|&nbsp;&nbsp;87% off</span>
        </div>
        <div className="rating">
          <p>4.7</p>
          <div className="stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
        </div>
        <Link to="/">
          <FormattedMessage {...messages.AttendEvent} />
        </Link>
        <Button>
          <FormattedMessage {...messages.AddtoCart} />
        </Button>
      </div>
      <p />
      <FormGroup>
        <Label for="email">
          <FormattedMessage {...messages.EmailAddress} />
        </Label>
        <Input type="email" name="email" id="email" placeholder="Enter email" />
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
    </Wrapper>
  );
}

export default HackathonSidebar;
