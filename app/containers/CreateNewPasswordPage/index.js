/*
 * Create New Password Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import messages from './messages';

export default function CreateNewPasswordPage() {
  return (
    <div className="registration_page">
      <Helmet>
        <title>- Create New Password</title>
        <meta name="description" content="FinLit - Create New Password Page" />
      </Helmet>
      <div className="form_container">
        <div className="form_content">
          <h2>
            <FormattedMessage {...messages.CreateNewPassword} />
          </h2>
          <div className="form">
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.NewPassword} />
              </Label>
              <Input
                type="password"
                name="newpassword"
                id="password"
                placeholder="New password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.ConfirmPassword} />
              </Label>
              <Input
                type="password"
                name="confirmpassword"
                id="password"
                placeholder="Confirm password"
              />
            </FormGroup>
            <div className="remember_forgot">
              <p>
                <FormattedMessage {...messages.PasswordMatch} />
              </p>
            </div>
            <Button>
              <FormattedMessage {...messages.ResetPassword} />
            </Button>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
