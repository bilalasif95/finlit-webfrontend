/*
 * Sign Up Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as qs from 'query-string';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../config/config';

export default function EmailVerificationPage() {
  const [error, setError] = useState('');
  const parsed = qs.parse(location.search);
  console.log(parsed);
  const authHeaders = parsed
    ? {
      Authorization: `Bearer ${parsed.token}`,
    }
    : {};
  axios
    .get(`${API}api/auth/confirmEmail`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...authHeaders,
      },
    })
    .then(result => {
      toast.success('Success, Please Login to Continue');
    })
    .catch(err => {
      toast.error(err.response && err.response.data.message ? err.response.data.message.toString() : 'Message Not Readable')
    });
  return (
    <>
    <div className="verification_page">
      <Helmet>
        <title>- Sign Up</title>
        <meta name="description" content="FinLit - Email Verification" />
      </Helmet>

      <Container>
        <Row>
          <Col lg={12}>
            <div className="verification-main">
              <div className="email-verification">
                <h4>Your email has been verified</h4>
                <p>
                  Your email has been verified successfully.
                  Please login to continue.
                </p>
                <Link className="verification-button" to="/login">
                  Login
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <ToastContainer />
    </>
  );
}
