/*
 * Cart Checkout Sidebar Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, InputGroup, Input, Button } from 'reactstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';

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
              <BsArrowLeft />
            </Link>
          </div>
          <InputGroup>
            <Input type="text" name="search" id="seach" placeholder="Search" />
            <Button>
              <BiSearchAlt2 />
            </Button>
          </InputGroup>
        </Wrapper>
        <Wrapper>
          <ul>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FormattedMessage {...messages.Article} />
              </Link>
            </li>
          </ul>
        </Wrapper>
      </Col>
    </Row>
  );
}

export default CartCheckoutSidebar;
