import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as qs from 'query-string';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';
import { ToastContainer, toast } from 'react-toastify';
import { MdMail } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import { endpoints } from '../../config/config';
import messages from './messages';
// import Check from '../../images/checkImg.svg';

export default function EmailVerificationPage() {
  const parsed = qs.parse(window.location.search);
  useEffect(() => {
    if (parsed.token) {
      const authHeaders = parsed
        ? { Authorization: `Bearer ${parsed.token}` }
        : {};
      axios
        .get(endpoints.confirmEmail, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(() => {
          toast.success('Success, Please Login to Continue');
        })
        .catch(err => {
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
        });
    }
  }, []);

  return (
    <>
      <div className="verification_page">
        <Helmet>
          <title>- Email Verification</title>
          <meta name="description" content="FinLit - Email Verification" />
        </Helmet>

        <Container fluid="xl">
          <Row>
            <Col lg={12}>
              <div className="verification-main">
                <div className="email-verification">
                  <div className="verify_icon">
                    <MdMail />
                  </div>
                  <h2>
                    <FormattedMessage {...messages.EmailTitle} />
                  </h2>
                  <p>
                    <FormattedMessage {...messages.Emaildetail} />
                  </p>
                  <Link className="verification-button" to="/login">
                    Go to Login
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
