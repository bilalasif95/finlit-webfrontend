/*
 * Forgot Password Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormGroup,
  Label,
  Input,
  Container,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import * as qs from 'query-string';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import messages from './messages';
import { API, endpoints } from '../../config/config';
import UseEnterKeyListener from '../../config/useEnterKeyListener';
import Logo from '../../images/logo.svg';
import Img from '../../components/Img';

export default function ResetPassword(props) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState({ type: '', error: '' });
  const [btnClick, setBtnClick] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const parsed = qs.parse(window.location.search);
  const confirmtogglePasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  UseEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });

  const forgotPasswordBtn = () => {
    setError({ type: '', error: '' });
    // if (!newPassword) {
    //   setError({ type: 'newPassword', error: 'New Password is required' });
    // } else
    if (
      !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
        newPassword,
      ) ||
      (!newPassword.length >= 8 && !newPassword.length <= 15)
    ) {
      setError({
        type: 'newPassword',
        error: 'Use 8-15 characters with a mix of letters, numbers & symbols',
      });
    }
    // else if (!confirmPassword) {
    //   setError({ type: 'confirmPassword', error: 'New Password is required' });
    // } else if (
    //   !/(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    //     confirmPassword,
    //   ) ||
    //   (!confirmPassword.length >= 8 && !confirmPassword.length <= 15)
    // ) {
    //   setError({
    //     type: 'confirmPassword',
    //     error: 'Use 8-15 characters with a mix of letters, numbers & symbols',
    //   });
    // }
    else if (newPassword !== confirmPassword) {
      setError({ type: 'confirmPassword', error: "Password doesn't match" });
    } else {
      setBtnClick(true);
      const authHeaders = parsed
        ? { Authorization: `Bearer ${parsed.token}` }
        : {};
      axios
        .post(
          API + endpoints.forgotConfirmPassword,
          { password: newPassword },
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              ...authHeaders,
            },
          },
        )
        .then(() => {
          toast.success('Success, Please Login to Continue');
          setTimeout(() => {
            props.history.push('/login');
          }, 3000);
        })
        .catch(err => {
          toast.error(
            err.response && err.response.data.message
              ? err.response.data.message.toString()
              : 'Message Not Readable',
          );
          setTimeout(() => {
            setBtnClick(false);
          }, 3000);
        });
    }
  };
  return (
    <>
      <div className="forgot_page">
        <Helmet>
          <title>Reset Password</title>
          <meta name="description" content="FinLit - Reset Password Page" />
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
                <h2 className="resetHeading">
                  <FormattedMessage {...messages.ResetPassword} />
                </h2>
                <div className="form">
                  <FormGroup>
                    <Label for="newPassword">
                      <FormattedMessage {...messages.NewPassword} />
                    </Label>
                    <InputGroup>
                      <Input
                        type={passwordShown ? 'text' : 'password'}
                        name="newPassword"
                        id="newPassword"
                        defaultValue={newPassword}
                        placeholder="Enter Password"
                        onChange={e => {
                          setNewPassword(e.target.value);
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          type="button"
                          className="btn_eye"
                          onClick={togglePasswordVisiblity}
                        >
                          {passwordShown ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="error-box">
                      {/* {error && <p className="error">{error}</p>} */}
                      <p className="error">
                        {error.type === 'newPassword' ? error.error : ''}
                      </p>
                    </div>
                  </FormGroup>
                  <FormGroup className="resetField">
                    <Label for="confirmPassword">
                      <FormattedMessage {...messages.ConfirmPassword} />
                    </Label>
                    <InputGroup>
                      <Input
                        type={confirmPasswordShown ? 'text' : 'password'}
                        name="confirmPassword"
                        id="confirmPassword"
                        defaultValue={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={e => {
                          setConfirmNewPassword(e.target.value);
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <Button
                          type="button"
                          className="btn_eye"
                          onClick={confirmtogglePasswordVisiblity}
                        >
                          {confirmPasswordShown ? (
                            <BsEyeFill />
                          ) : (
                            <BsEyeSlashFill />
                          )}
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                    <div className="error-box">
                      {/* {error && <p className="error">{error}</p>} */}
                      <p className="error">
                        {error.type === 'confirmPassword' ? error.error : ''}
                      </p>
                    </div>
                  </FormGroup>
                  <Button
                    id="submitButton"
                    onClick={forgotPasswordBtn}
                    disabled={btnClick || !newPassword || !confirmPassword}
                  >
                    <FormattedMessage {...messages.ResetPassword} />
                  </Button>
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

ResetPassword.propTypes = {
  history: PropTypes.any,
};
