/*
 * Notifications Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
// import LocaleToggle from 'containers/LocaleToggle';
// import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Img from '../Img';
import messages from './messages';
import Wrapper from './Wrapper';
import pro1 from '../../images/cartImg.png';

function MyCart() {
  return (
    <Wrapper id="my_cart">
      <ul className="item_list">
        <li>
          <div className="item_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="item_desc">
            <div className="left">
              <p>C Programming For Beginners - Master the C Language</p>
              <span className="name">Nick Gibson</span>
              <p>$84:99</p>
            </div>
          </div>
        </li>
        <li>
          <div className="item_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="item_desc">
            <div className="left">
              <p>
                2021 Python for Machine Learning & Data Science Masterclass for
                Machine Learning & Data Science Masterclass
              </p>
              <span className="name">Nick Gibson</span>
              <p>$84:99</p>
            </div>
          </div>
        </li>
        <li>
          <div className="item_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="item_desc">
            <div className="left">
              <p>
                100 Days of Code - The Complete Python Pro Bootcamp for 2021
              </p>
              <span className="name">Nick Gibson</span>
              <p>$84:99</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="total_checkout">
        <p>Total: $425.00</p>
        <Button>
          <FormattedMessage {...messages.Checkout} />
        </Button>
      </div>
    </Wrapper>
  );
}

export default MyCart;
