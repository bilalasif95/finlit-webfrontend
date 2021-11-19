/*
 * Sign In Page
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import history from 'utils/history';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
// BsEyeSlashFill
// import { IoIosCheckmarkCircle } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import UseEnterKeyListener from '../../config/useEnterKeyListener';
import { endpoints } from '../../config/config';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../reduxSetup/actions/registeration';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../images/logo.svg';
import loginImg from '../../images/loginImg.png';
import Img from '../../components/Img';

// import { response } from 'express';
const SigninPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ type: '', error: '' });
  const [btnClick, setBtnClick] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState('');
  // const [isDisabled, setDisabled] = useState(false);
  UseEnterKeyListener({
    querySelectorToExecuteClick: '#submitButton',
  });
  // const [rememberMe, setRememberMe] = useState(false);

  // React.useEffect(() => {
  //   setEmail(localStorage.getItem('remember_me_email') || '');
  //   setPassword(localStorage.getItem('remember_me_password') || '');
  //   if (
  //     localStorage.getItem('remember_me_email') &&
  //     localStorage.getItem('remember_me_password')
  //   ) {
  //     setRememberMe(true);
  //   }
  // }, []);
  const login = () => {
    setError({ type: '', error: '' });
    // debugger;
    if (!email) {
      setError({ type: 'email', error: 'Email is required' });
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/.test(email)) {
      setError({ type: 'email', error: 'Invalid email address' });
    } else if (!password) {
      setError({ type: 'password', error: 'Password is required' });
      // setError('Please enter Password');
      // return;
    }
    // if (rememberMe) {
    //   localStorage.setItem('remember_me_email', email);
    //   localStorage.setItem('remember_me_password', password);
    // }
    else {
      setBtnClick(true);
      axios
        .post(endpoints.login, { email, password })
        .then(res => {
          if (res.data.status === 200) {
            localStorage.setItem('token', res.data.data.accessToken);
            localStorage.setItem(
              'userInfo',
              JSON.stringify(res.data.data.user && res.data.data.user),
            );
            props.Login(res.data.data.user);
            if (
              res &&
              res.data &&
              res.data.data &&
              res.data.data.user &&
              res.data.data.user.roles[0] &&
              res.data.data.user.roles[0].roleName === 'Instructor'
            ) {
              history.push('/dashboard');
            } else {
              history.push('/');
            }
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
    }
    setTimeout(() => {
      setError({ type: '', error: '' });
    }, 5000);
  };

  const onCaptchaHandler = val => {
    setValue(val);
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
            <Link to="/dashboard">
              <img
                src={Logo}
                alt="FinLit"
                className="logo"
                height="100%"
                width="100%"
              />
            </Link>
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
                <p className="error">
                  {error.type === 'email' ? error.error : ''}
                </p>
              </FormGroup>
              <FormGroup className="form_err">
                <Label for="password">
                  <FormattedMessage {...messages.Password} />
                </Label>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    defaultValue={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => {
                      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                        e.preventDefault();
                        login();
                      }
                    }}
                    placeholder="******"
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn_eye"
                    >
                      {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                    </Button>
                    {/* <BsEyeSlashFill /> */}
                  </InputGroupAddon>
                </InputGroup>
                <p className="error">
                  {error.type === 'password' ? error.error : ''}
                </p>
                {/* <Input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => {
                    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                      e.preventDefault();
                      login();
                    }
                  }}
                  placeholder="******"
                /> */}
                {/* <div className="error-box">
                  {error && <p className="error">{error}</p>}
                </div> */}
              </FormGroup>
              <div className="remember_forgot">
                {/* <FormGroup check>
                  <Label check className="check-box">
                    <Input
                      defaultValue={rememberMe}
                      value={rememberMe}
                      type="checkbox"
                      onChange={e => {
                        setRememberMe(e.target.value);
                      }}
                    />
                    <FormattedMessage {...messages.RememberMe} />
                  </Label>
                </FormGroup> */}
                <div />
                <Link to="/forgot_password">
                  <FormattedMessage {...messages.ForgotPassword} />
                </Link>
              </div>
              <div className="recaptcha">
                <ReCAPTCHA
                  style={{
                    transform: 'scale(0.77)',
                    transformOrigin: '0 0',
                  }}
                  className="g-recaptcha"
                  data-theme="light"
                  sitekey="6LfRcUQdAAAAANsH6WSa--gOTPYuPu-VKYd89S7q"
                  onChange={onCaptchaHandler}
                  height="100px"
                  width="100%"
                />
              </div>
              <Button
                id="submitButton"
                onClick={login}
                disabled={btnClick || !value}
              >
                <FormattedMessage {...messages.Login} />
              </Button>
              <div className="reg_footer">
                <p>
                  <FormattedMessage {...messages.DontHaveAccount} />
                  &nbsp; &nbsp;
                  <Link to="/signup">
                    <FormattedMessage {...messages.CreateAnAccount} />
                  </Link>
                </p>
                {/* <div className="well_done">
                  <p>
                    <FormattedMessage {...messages.WellDone} />
                  </p>
                  <IoIosCheckmarkCircle />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="img_container">
          <Img src={loginImg} alt="instrutor" height="100%" width="100%" />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

SigninPage.propTypes = {
  Login: PropTypes.any,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SigninPage),
);
