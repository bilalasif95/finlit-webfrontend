/*
 * Create New Password Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import * as qs from 'query-string';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import messages from './messages';
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
      setError(
        'Password must contains one special character or capital letter and length should be in between 8 to 12 characters.',
      );
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
    const parsed = qs.parse(window.location.search);
    // console.log(parsed);
    const authHeaders = parsed
      ? {
          Authorization: `Bearer ${parsed.token}`,
        }
      : {};
    axios
      .post(
        `${API}api/auth/forgotConfirmPassword`,
        { password, confirmPassword },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        },
      )
      .then(res => {
        // console.log(res);
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
        toast.success(
          res.data && res.data.message
            ? res.data.message
            : 'Message Not Readable',
        );
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };
  return (
    <>
      <div className="registration_page">
        <Helmet>
          <title>- Create New Password</title>
          <meta
            name="description"
            content="FinLit - Create New Password Page"
          />
        </Helmet>
        <div className="form_container Login-form">
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
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
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
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                  }}
                />
              </FormGroup>
              <p style={{ color: 'red' }}>{error}</p>
              <Button
                onClick={() => {
                  ChangePasswordBtn();
                }}
              >
                <FormattedMessage {...messages.ResetPassword} />
              </Button>
            </div>
          </div>
        </div>
        <div className="img_container" />
      </div>
      <ToastContainer />
    </>
  );
}
