/*
 * Sign In Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import history from 'utils/history';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../reduxSetup/actions/registeration';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../config/config';
// import { response } from 'express';
const TwoFAPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [btnClick, setBtnClick] = useState(false);
  const login = () => {
    setError('');
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
      return;
    }
    setBtnClick(true);
    axios
      .post(`${API}api/auth/login`, { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem(
          'userInfo',
          JSON.stringify(res.data.user && res.data.user),
        );
        props.Login(res.data.user);
        history.push('/');
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
        setTimeout(() => {
          setBtnClick(false);
        }, 5000);
      });
  };
  return (
    <>
      <div className="registration_page">
        <Helmet>
          <title>Two FA Verification</title>
          <meta name="description" content="Two FA Verification" />
        </Helmet>
        <div className="form_container Login-form">
          <div className="form_content">
            <h2>
              <FormattedMessage {...messages.TwoFA} />
            </h2>
            <div className="form">
              <FormGroup>
                <Label for="email">
                  <FormattedMessage {...messages.Code} />
                </Label>
                <Input
                  type="text"
                  name="code"
                  id="code"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter code"
                />
              </FormGroup>
              <Button onClick={login} disabled={btnClick}>
                <FormattedMessage {...messages.Verify} />
              </Button>
            </div>
          </div>
        </div>
        <div className="img_container" />
      </div>
      <ToastContainer />
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TwoFAPage)
);
