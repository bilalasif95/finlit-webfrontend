/*
 * Sign In Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import messages from './messages';
import { API } from '../../config/config';
// import { response } from 'express';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    setError('');
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    ) {
      setError('Please enter valid password');
    }
    axios
      .post(`${API}api/auth/login`, { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.accessToken);
      })
      .catch(err => {
        setError(err.response && err.response.data.message);
      });
  };
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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
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
            <div className="error-box">
              {error && <p className="error">{error}</p>}
            </div>
            <Button onClick={login}>
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
