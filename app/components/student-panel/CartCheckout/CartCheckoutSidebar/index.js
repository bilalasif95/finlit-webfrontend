/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import CheckoutSidebar from '../../../CheckoutSidebar';
function CartCheckoutSidebar(props) {

  return (
    <Row>
      <Col lg={12}>
        <CheckoutSidebar />
      </Col>
    </Row>
  );
}

export default CartCheckoutSidebar;
