/*
 * Sign Up Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function EmailVerificationPage() {
  return (
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
                  Your jhon@example.com email has been verified successfully.
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
  );
}
