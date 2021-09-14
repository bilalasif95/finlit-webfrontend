/*
 * Cart Checkout Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import CartCheckoutDescription from '../../components/CartCheckout/CartCheckoutDescription';
import CartCheckoutSidebar from '../../components/CartCheckout/CartCheckoutSidebar';

export default function CartCheckout() {
  return (
    <div className="sub_pages">
      <Helmet>
        <title>Cart Checkout</title>
        <meta name="description" content="Cart Checkout" />
      </Helmet>
      <Container fluid="xl">
        <Row>
          <Col lg={8} md={8} sm={12}>
            <CartCheckoutDescription />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <CartCheckoutSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
