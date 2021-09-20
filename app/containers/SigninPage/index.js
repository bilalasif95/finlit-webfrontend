/*
 * Sign In Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import history from 'utils/history';
import { Link } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from "../reduxSetup/actions/registeration";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../config/config';
// import { response } from 'express';
const  SigninPage=(props) =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = () => {
    setError('');
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Please enter valid email');
      return;
    }
    if (
      !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password) ||
      (!password.length >= 8 && !password.length <= 12)
    ) {
      setError(
        'Password must contains one special character or capital letter and length should be in between 8 to 12 characters.',
      );
      return;
    }
    axios
      .post(`${API}api/auth/login`, { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('userInfo', JSON.stringify(res.data.user && res.data.user));
        props.Login(res.data.user)
        history.push('/')
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
              <FormGroup className="form_err">
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
                <div className="error-box">
                  {error && <p className="error">{error}</p>}
                </div>
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
      <ToastContainer />
    </>
  );
}


export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SigninPage)
);