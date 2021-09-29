/*
 * Cart Checkout Page
 */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import CartCheckoutDescription from '../../../components/student-panel/CartCheckout/CartCheckoutDescription';
import CartCheckoutSidebar from '../../../components/student-panel/CartCheckout/CartCheckoutSidebar';
import { API } from '../../../config/config';
import { axiosHeader } from '../../../utils/axiosHeader';

export default function CartCheckout() {
  const [cartDetails, setCartDetails] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getCartDetails(true);
  }, []);

  const getCartDetails = status => {
    status ? setLoader(true) : '';
    axios
      .get(`${API}api/cart/getCartItems`, axiosHeader)
      .then(res => {
        setCartDetails(res && res.data && res.data);
        status ? setLoader(false) : '';
      })
      .catch(() => {
        status ? setLoader(false) : '';
      });
  };

  const RemoveFromCart = id => {
    axios
      .delete(`${API}api/cart/removeFromCart/${id}`, axiosHeader)
      .then(() => {
        getCartDetails(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  return (
    <div className="sub_pages">
      <Helmet>
        <title>Cart Checkout</title>
        <meta name="description" content="Cart Checkout" />
      </Helmet>
      <Container fluid="xl">
        {loader ? (
          'Loading....'
        ) : (
          <Row>
            <Col lg={8} md={7} sm={12}>
              <CartCheckoutDescription
                details={cartDetails}
                RemoveFromCart={RemoveFromCart}
              />
            </Col>
            <Col lg={4} md={5} sm={12}>
              <CartCheckoutSidebar details={cartDetails} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
