/*
 * TwoFA Authentication Component
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Label, Button, Input, FormText } from 'reactstrap';
// ToastContainer,
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import InputBase from '@material-ui/core/InputBase';
// import { withStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
// import { BsPencil } from 'react-icons/bs';
// import { BiCheck } from 'react-icons/bi';
import axios from 'axios';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';
// import { FiCamera } from 'react-icons/fi';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../config/config';
import Img from '../../Img';
// import Profile from '../../../images/profile.jpg';
import GoogleAuth from '../../../images/GoogleAuth.png';
import Check from '../../../images/check.png';
// import AppStore from '../../../images/AppStore.png';

function TwoFAAuthentication(props) {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);
  const [stepFour, setStepFour] = useState(false);
  const [stepFive, setStepFive] = useState(false);
  const [error, setError] = useState(false);

  const [QrUri, setQrUri] = useState('');
  const [twoFaCode, setTwoFaCode] = useState('');
  const getQrCodeUri = () => {
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .post(
        `${API}api/user/getToTpURI`,
        {},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        },
      )
      .then(response => {
        setQrUri(response.data.toTpURI);
        handleStepTwo();
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };
  const verifyTwoFaCode = () => {
    if (!twoFaCode) {
      setError('Code is Required');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    if (twoFaCode.length !== 6) {
      setError(
        'Code format is invalid. Code Should be Only 6 digits on your authenticator app.',
      );
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .post(
        `${API}api/user/toggleTwoFA`,
        { code: twoFaCode },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        },
      )
      .then(res => {
        setTwoFaCode('');
        toast.success(
          res && res.data ? res.data.message : 'Message Not Readable',
        );
        handleStepFour();
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };

  const handleStepOne = () => {
    setStepOne(false);
    setStepTwo(true);
    setStepThree(false);
    setStepFour(false);
    setStepFive(false);
  };
  const handleStepTwo = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
    setStepFour(false);
    setStepFive(false);
  };
  // const handleStepThree = () => {
  //   setStepOne(false);
  //   setStepTwo(false);
  //   setStepThree(false);
  //   setStepFour(true);
  //   setStepFive(false);
  // };
  const handleStepFour = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(false);
    setStepFour(false);
    setStepFive(true);
  };
  // const handleStepOneClose = () => {
  //   setStepOne(true);
  //   setStepTwo(false);
  //   setStepThree(false);
  //   setStepFour(false);
  //   setStepFive(false);
  // };
  // const handleStepTwoClose = () => {
  //   setStepOne(false);
  //   setStepTwo(true);
  //   setStepThree(false);
  //   setStepFour(false);
  //   setStepFive(false);
  // };
  // const handleStepThreeClose = () => {
  //   setStepOne(false);
  //   setStepTwo(false);
  //   setStepThree(true);
  //   setStepFour(false);
  //   setStepFive(false);
  // };
  useEffect(() => {
    if (props.userData.twoFA === true) {
      setStepOne(false);
      setStepTwo(false);
      setStepThree(false);
      setStepFour(true);
      setStepFive(false);
    } else {
      setStepOne(true);
      setStepTwo(false);
      setStepThree(false);
      setStepFour(false);
      setStepFive(false);
    }
  }, [props]);
  return (
    <Wrapper>
      {stepOne && (
        <div className="step_one">
          <div className="security_verify">
            <div className="app_store">
              <img src={Check} alt="Check" />
            </div>
            <h4>
              <FormattedMessage {...messages.SecurityVerification} />
            </h4>
            <h5>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </h5>
            {/*           
            <h4>Enable Google Authenticator</h4>
            <p>Recommended</p> */}
          </div>
          <div className="form_footer TwofaBtns">
            <div className="bottom_btns">
              <Button className="btn_submit" onClick={handleStepOne}>
                <FormattedMessage {...messages.Continue} />
              </Button>
            </div>
          </div>
        </div>
      )}
      {stepTwo && (
        <div className="step_two">
          <div className="security_verify">
            <div className="app_store">
              <Img
                src={GoogleAuth}
                alt="google Auth."
                height="100%"
                width="100%"
              />
              {/* <Img src={AppStore} alt="App Store" height="100%" width="100%" /> */}
            </div>
            <h4>
              <FormattedMessage {...messages.DownloadGA} />
            </h4>
            <h5>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </h5>
          </div>
          <div className="form_footer TwofaBtns">
            <div className="bottom_btns">
              <Button className="btn_submit" onClick={handleStepTwo}>
                <FormattedMessage {...messages.Continue} />
              </Button>
            </div>
          </div>
        </div>
      )}
      {stepThree && (
        <div className="step_three">
          <div className="security_verify">
            <div className="app_store">
              <QRCode className="customQR" value={QrUri} />
            </div>
            <h4 className="left">
              <FormattedMessage {...messages.EnableAuth} />
            </h4>
            <FormGroup className="mb-5">
              {/* <Label for="authcode">
              <FormattedMessage {...messages.AuthenticatorCode} />
            </Label> */}
              <FormText color="muted">
                Enter the 6 digit code that you see in the app
              </FormText>
              <Input
                type="text"
                name="authcode"
                id="authcode"
                placeholder="Enter 6 Digit Code"
                value={twoFaCode}
                onChange={e => {
                  setTwoFaCode(e.target.value);
                }}
              />
              <Label for="authcode">
                {error ? <p className="error">{error}</p> : ''}
              </Label>
            </FormGroup>
          </div>
          <div className="form_footer TwofaBtns">
            <div className="bottom_btns">
              <Button className="btn_submit" onClick={verifyTwoFaCode}>
                Verify
              </Button>
              {/* <Button className="btn_submit" onClick={handleStepThree}>
              <FormattedMessage {...messages.Continue} />
            </Button> */}
            </div>
          </div>
        </div>
      )}
      {stepFour && (
        <div className="step_four">
          <div className="enable_auth security_verify">
            {props.userData.twoFA ? (
              <>
                <h4>
                  <FormattedMessage {...messages.DisableAuth} />
                </h4>
              </>
            ) : (
              <>
                <h4>
                  <FormattedMessage {...messages.EnableAuth} />
                </h4>
                {/* <p>
                  Enable 2FA Google Authenticator, to increase your account
                  security.
                </p> */}
              </>
            )}
            <FormGroup>
              {/* <Label for="authcode">
                <FormattedMessage {...messages.AuthenticatorCode} />
              </Label> */}
              <FormText color="muted">
                Enter the 6 digit code that you see in the app
              </FormText>
              <Input
                type="text"
                name="authcode"
                id="authcode"
                placeholder="Enter code"
                value={twoFaCode}
                onChange={e => {
                  setTwoFaCode(e.target.value);
                }}
              />
              <Label for="authcode">
                {error ? <p className="error">{error}</p> : ''}
              </Label>
            </FormGroup>
          </div>
          <div className="form_footer TwofaBtns">
            <div className="bottom_btns">
              {props.userData.twoFA ? (
                <Button
                  className="btn_cancel"
                  onClick={() => {
                    setTwoFaCode('');
                  }}
                >
                  <FormattedMessage {...messages.Cancel} />
                </Button>
              ) : (
                <Button className="btn_cancel" onClick={getQrCodeUri}>
                  <FormattedMessage {...messages.Cancel} />
                </Button>
              )}
              {/* <Button className="btn_submit" onClick={verifyTwoFaCode}>
                <FormattedMessage {...messages.Continue} />
              </Button> */}
            </div>
          </div>
        </div>
      )}
      {stepFive && (
        <div className="step_five">
          <div className="thank_you">
            <h1>
              <FormattedMessage {...messages.ThankYou} />
            </h1>
            <p>Your Verification is done by Google Authenticator</p>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

TwoFAAuthentication.propTypes = {
  userData: PropTypes.any,
};

export default TwoFAAuthentication;
