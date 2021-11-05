/*
 * Cart Checkout Sidebar Component
 */
import React from 'react';
import { Row, Col } from 'reactstrap';
import CheckoutSidebar from '../../../CheckoutSidebar';

function CartCheckoutSidebar() {
  return (
    <Row>
      <Col lg={12}>
        <CheckoutSidebar />
      </Col>
    </Row>
  );
}

export default CartCheckoutSidebar;
