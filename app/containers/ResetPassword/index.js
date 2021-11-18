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
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import messages from './messages';
// import { API } from '../../config/config';
import UseEnterKeyListener from '../../config/useEnterKeyListener';
import Logo from '../../images/logo.svg';

export default function ResetPassword() {
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState('');
  // const [btnClick, setBtnClick] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmpasswordShown, setConfirmPasswordShown] = useState(false);
  const confirmtogglePasswordVisiblity = () => {
    setConfirmPasswordShown(!confirmpasswordShown);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  UseEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });

  // const forgotPasswordBtn = () => {
  //   setError('');
  //   if (email === '') {
  //     setError('Please enter email');
  //     return;
  //   }
  //   if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
  //     setError('Please enter valid email');
  //     return;
  //   }
  //   setBtnClick(true);
  //   axios
  //     .get(`${API}api/auth/forgotPassword?email=${email}`)
  //     .then(result => {
  //       toast.success(
  //         result.data && result.data.message
  //           ? result.data.message
  //           : 'Message Not Readable',
  //       );
  //       setTimeout(() => {
  //         setBtnClick(false);
  //       }, 5000);
  //     })
  //     .catch(err => {
  //       toast.error(
  //         err.response && err.response.data.message
  //           ? err.response.data.message.toString()
  //           : 'Message Not Readable',
  //       );
  //       setTimeout(() => {
  //         setBtnClick(false);
  //       }, 5000);
  //     });
  // };
  return (
    <>
      <div className="registration_page forgot_page">
        <Helmet>
          <title>Reset Password</title>
          <meta name="description" content="FinLit - Reset Password Page" />
        </Helmet>
        <Container>
          <div className="form_container">
            <div className="form_content">
              <img className="mx-auto d-block" src={Logo} alt="Logo" />
              <h2 className="resetHeading">
                <FormattedMessage {...messages.ResetPassword} />
              </h2>
              <div className="form">
                <FormGroup>
                  <Label for="email">
                    <FormattedMessage {...messages.NewPassword} />
                  </Label>
                  <InputGroup>
                    <Input
                      type={passwordShown ? 'text' : 'password'}
                      name="email"
                      id="email"
                      placeholder="Enter Password"
                      onChange={e => {
                        setPasswordShown(e.target.value);
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
                    {/* <p className="error">
                      <FormattedMessage {...messages.EmailError} />
                    </p> */}
                  </div>
                </FormGroup>
                <FormGroup className="resetField">
                  <Label for="email">
                    <FormattedMessage {...messages.ConfirmPassword} />
                  </Label>
                  <InputGroup>
                    <Input
                      type={confirmpasswordShown ? 'text' : 'password'}
                      name="email"
                      id="email"
                      placeholder="Confirm Password"
                      onChange={e => {
                        setConfirmPasswordShown(e.target.value);
                      }}
                    />
                    <InputGroupAddon addonType="append">
                      <Button
                        type="button"
                        className="btn_eye"
                        onClick={confirmtogglePasswordVisiblity}
                      >
                        {confirmpasswordShown ? (
                          <BsEyeFill />
                        ) : (
                          <BsEyeSlashFill />
                        )}
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                  <div className="error-box">
                    {/* {error && <p className="error">{error}</p>} */}
                    {/* <p className="error">
                      <FormattedMessage {...messages.EmailError} />
                    </p> */}
                  </div>
                </FormGroup>
                <Button
                  id="submitButton"
                  // onClick={() => {
                  //   forgotPasswordBtn();
                  // }}
                  // disabled={btnClick || !email}
                >
                  <FormattedMessage {...messages.ResetPassword} />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <ToastContainer /> */}
    </>
  );
}
