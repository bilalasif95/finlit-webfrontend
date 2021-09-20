/*
 * Sign Up Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as qs from 'query-string';
import axios from 'axios';
import { API } from '../../config/config';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Check from '../../images/checkImg.svg';

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
    .then(res => {
      console.log(res);
      setError(res.data.message);
    })
    .catch(err => {
      setError(err.response && err.response.data.message);
    });
  return (
    <div className="verification_page">
      <Helmet>
        <title>- Email Verification</title>
        <meta name="description" content="FinLit - Email Verification" />
      </Helmet>

      <Container>
        <Row>
          <Col lg={12}>
            <div className="verification-main">
              <div className="email-verification">
                <img src={Check} />
                <h4>
                  <FormattedMessage {...messages.EmailTitle} />
                </h4>
                <p>
                  <FormattedMessage {...messages.Emaildetail} />
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
  );
}
