/*
 * Forgot Password Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import messages from './messages';
import { API } from '../../config/config';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const forgotPasswordBtn = () => {
    setError('');
    if (email === '') {
      setError('Please enter email');
      return;
    }
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
      return;
    }
    axios
      .get(`${API}api/auth/forgotPassword?email=${email}`)
      .then(res => {
        // console.log(res);
        setError(res.data.message);
      })
      .catch(err => {
        setError(err.response && err.response.data.message);
      });
  };
  return (
    <div className="registration_page">
      <Helmet>
        <title>Forgot Password</title>
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
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
              <div className="error-box">
                {error && <p className="error">{error}</p>}
              </div>
            </FormGroup>
            <Button
              onClick={() => {
                forgotPasswordBtn();
              }}
            >
              <FormattedMessage {...messages.SendRecoveryCode} />
            </Button>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
