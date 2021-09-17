/*
 * Create New Password Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import messages from './messages';
import * as qs from 'query-string';
import axios from 'axios';
import { API } from '../../config/config';

export default function CreateNewPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const ChangePasswordBtn = () => {
    setError('');
    if (password === '') {
      setError('Please enter password');
      return;
    }
    if (!/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password)) {
      setError('Weak Password . It must contain at least one special character , one number and one capital alphabet');
      return;
    }
    if (confirmPassword === '') {
      setError('Please enter Confirm Password');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password & Confirm Password are not same');
      return;
    }
    const parsed = qs.parse(location.search);
    console.log(parsed);
    const authHeaders = parsed
      ? {
        Authorization: `Bearer ${parsed.token}`,
      }
      : {};
    axios
      .post(`${API}api/auth/forgotConfirmPassword`, { password, confirmPassword }, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        console.log(res);
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000)
        setError(res.data.message);
      })
      .catch(err => {
        setError(err.response && err.response.data.message);
      });
  }


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
                onChange={(e) => { setPassword(e.target.value) }}
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
                onChange={(e) => { setConfirmPassword(e.target.value) }}
              />
            </FormGroup>
            <p style={{color: 'red'}}>{error}</p>
            <Button onClick={() => { ChangePasswordBtn() }}>
              <FormattedMessage {...messages.ResetPassword} />
            </Button>
          </div>
        </div>
      </div>
      <div className="img_container" />
    </div>
  );
}
