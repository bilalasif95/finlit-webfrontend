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
import UseEnterKeyListener from "../../config/useEnterKeyListener";

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
const SigninPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [btnClick, setBtnClick] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  UseEnterKeyListener({
    querySelectorToExecuteClick: "#submitButton"
  });
  const [rememberMe, setRememberMe] = useState(false);

  React.useEffect(() => {
    setEmail(localStorage.getItem('remember_me_email') || '');
    setPassword(localStorage.getItem('remember_me_password') || '');
    if (localStorage.getItem('remember_me_email') && localStorage.getItem('remember_me_password')) {
      setRememberMe(true);
    }
  }, [])
  const login = () => {
    setError('');
    debugger;
    if (!email) {
      setError('Please enter email');
      return;
    }
    if (!password) {
      setError('Please enter Password');
      return;
    }
    if (rememberMe) {
      localStorage.setItem('remember_me_email', email);
      localStorage.setItem('remember_me_password', password);
    }
    setBtnClick(true);
    axios
      .post(`${API}api/auth/login`, { email, password })
      .then(res => {
        if (res.data.status === 200) {
          localStorage.setItem('token', res.data.data.accessToken);
          localStorage.setItem(
            'userInfo',
            JSON.stringify(res.data.data.user && res.data.data.user),
          );
          props.Login(res.data.data.user);
          history.push('/');
        } else {
          localStorage.setItem('email', email);
          history.push('/two_fa');
        }
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
          <title>- Sign In</title>
          <meta name="description" content="FinLit - Sign in Page" />
        </Helmet>
        <div className="form_container Login-form">
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
                  defaultValue={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                />
              </FormGroup>
              <FormGroup className="form_err">
                <Label for="password">
                  <FormattedMessage {...messages.Password} />
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown = {(e) => {
                    if (e.code === "Enter" || e.code === "NumpadEnter") {
                      console.log("Enter key was pressed. Run your function.");
                      e.preventDefault();
                      login()
                    }
                  }}
                  placeholder="******"
                />
                <div className="error-box">
                  {error && <p className="error">{error}</p>}
                </div>
              </FormGroup>
              <div className="remember_forgot">
                <FormGroup check>
                  <Label check className="check-box">
                    <Input defaultValue={rememberMe} value={rememberMe} type="checkbox" onChange={(e) => {
                      setRememberMe(e.target.value);
                    }} />
                    <FormattedMessage {...messages.RememberMe} />
                  </Label>
                </FormGroup>
                <Link to="/forgot_password">
                  <FormattedMessage {...messages.ForgotPassword} />
                </Link>
              </div>
              <Button id="submitButton" onClick={login} disabled={btnClick || !email || !password}>
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
      <ToastContainer />
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SigninPage)
);
