/*
 * Forgot Password Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Button, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import messages from './messages';
import { API, endpoints } from '../../config/config';
import UseEnterKeyListener from '../../config/useEnterKeyListener';
import Logo from '../../images/logo.svg';
import Img from '../../components/Img';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [btnClick, setBtnClick] = useState(false);
  UseEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });

  const forgotPasswordBtn = () => {
    setError('');
    // if (!email) {
    //   setError('Email is required');
    // } else
    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError('Invalid email address');
    } else {
      setBtnClick(true);
      axios
        .get(`${API + endpoints.forgotPassword}?email=${email}`)
        .then(result => {
          toast.success(
            result.data && result.data.message
              ? result.data.message
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setBtnClick(false);
          }, 5000);
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
    }
  };
  return (
    <>
      <div className="forgot_page">
        <Helmet>
          <title>Forgot Password</title>
          <meta name="description" content="FinLit - Forgot Password Page" />
        </Helmet>
        <Container>
          <div className="form_container">
            <div className="forgot_inner">
              <div className="form_content">
                <Img
                  src={Logo}
                  alt="FinLit"
                  className="logo"
                  height="100%"
                  width="100%"
                />
                <h2>
                  <FormattedMessage {...messages.ForgotPassword} />
                </h2>
                <p>
                  <FormattedMessage {...messages.ForgotPasswordLine} />
                </p>
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
                      {/* <p className="error">
                      <FormattedMessage {...messages.EmailError} />
                    </p> */}
                    </div>
                  </FormGroup>
                  <Button
                    id="submitButton"
                    onClick={() => {
                      forgotPasswordBtn();
                    }}
                    disabled={btnClick || !email}
                  >
                    <FormattedMessage {...messages.ResetPassword} />
                  </Button>
                  <div className="back_link">
                    <Link to="/login">
                      <FormattedMessage {...messages.BackLogin} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <ToastContainer />
    </>
  );
}
