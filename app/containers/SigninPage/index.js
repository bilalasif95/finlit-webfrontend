/*
 * Sign In Page
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import messages from './messages';

export default function SigninPage() {
  return (
    <div className="registration_page">
      <Helmet>
        <title>- Sign In</title>
        <meta name="description" content="FinLit - Sign in Page" />
      </Helmet>
      <div className="form_container">
        <div className="form_content">
          <h2>
            <FormattedMessage {...messages.WelcomeBack} />
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
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.Password} />
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
            </FormGroup>
            <div className="remember_forgot">
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  <FormattedMessage {...messages.RememberMe} />
                </Label>
              </FormGroup>
              <Link to="/forgot_password">
                <FormattedMessage {...messages.ForgotPassword} />
              </Link>
            </div>
            <Button>
              <FormattedMessage {...messages.Login} />
            </Button>
            <div className="reg_footer">
              <p>
                <FormattedMessage {...messages.DontHaveAccount} />
                &nbsp;
                <Link to="/signup">
                  <FormattedMessage {...messages.CreateAnAccount} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
