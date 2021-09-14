/*
 * Forgot Password Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import messages from './messages';

export default function ForgotPasswordPage() {
  return (
    <div className="registration_page">
      <Helmet>
        <title>- Forgot Password</title>
        <meta name="description" content="FinLit - Forgot Password Page" />
      </Helmet>
      <div className="form_container">
        <div className="form_content">
          <h2>
            <FormattedMessage {...messages.ForgotPassword} />
          </h2>
          <div className="form">
            <FormGroup>
              <Label for="email">
                <FormattedMessage {...messages.EmailAddress} />
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </FormGroup>
            <Button>
              <FormattedMessage {...messages.SendRecoveryCode} />
            </Button>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
