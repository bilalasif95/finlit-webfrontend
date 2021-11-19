import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { MdMail } from 'react-icons/md';
import 'react-toastify/dist/ReactToastify.css';
import messages from './messages';

export default function VerifyEmailPage(props) {
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
                  <a
                    className="verification-button"
                    target="_blank"
                    href={
                      props.location.state
                        ? `https://${props.location.state.email}`
                        : ''
                    }
                  >
                    Go to Email
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
