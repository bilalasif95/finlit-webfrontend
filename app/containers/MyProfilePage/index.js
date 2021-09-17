/*
 * My Profile Page
 *
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormText,
} from 'reactstrap';
import Switch from '@material-ui/core/Switch';
import { BsPencil } from 'react-icons/bs';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import QRCode from 'qrcode.react';
import messages from './messages';
import Wrapper from './Wrapper';
import Img from '../../components/Img';
import Profile from '../../images/profile.jpg';
import GooglePlay from '../../images/GooglePlay.png';
import AppStore from '../../images/AppStore.png';
import { API } from '../../config/config';

export default function MyProfilePage() {
  // const [state, setState] = React.useState({
  //   checkedA: false,
  //   checkedB: true,
  // });
  const [modal, setModal] = useState(false);
  const [modalSV, setModalSV] = useState(false);
  const [modalGA, setModalGA] = useState(false);
  const [modalQR, setModalQR] = useState(false);
  const [modalEnable, setModalEnable] = useState(false);
  const [modalTY, setModalTY] = useState(false);
  const [errors, setErrors] = useState({});
  const [QrUri, setQrUri] = useState('');
  const [twoFaCode, setTwoFaCode] = useState('');

  const handleChange = () => {
    setModalSV(!modalSV);
    // setState({ ...state, [event.target.name]: event.target.checked });
  };

  const toggle = () => setModal(!modal);
  const toggleSV = () => setModalSV(!modalSV);
  const toggleGA = () => {
    setModalSV(false);
    setModalGA(true);
  };
  const toggleQR = () => {
    setModalGA(false);
    setModalQR(true);
  };
  const toggleEnable = () => {
    setModalQR(false);
    setModalEnable(true);
  };
  const toggleTY = () => {
    setModalEnable(false);
    setModalTY(true);
  };

  const toggleGAClose = () => setModalGA(!modalGA);

  const toggleQRClose = () => setModalQR(!modalQR);

  const toggleEnableClose = () => setModalEnable(!modalEnable);

  const toggleTYClose = () => setModalTY(!modalTY);

  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const clearModalData = () => {
    setChangePassword({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    toggle();
  };
  const handleChangeEvent = event => {
    if (event.target.type === 'password') {
      setChangePassword({
        ...changePassword,
        [event.target.name]: event.target.value,
      });
    }
    if (event.target.type === 'text') {
      if (event.target.name === 'authcode') {
        setTwoFaCode(event.target.value);
      }
    }
  };

  const handleChangePasswordSave = () => {
    if (Object.keys(passwordValidator(changePassword)).length > 0) {
      setErrors(passwordValidator(changePassword));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      const token = localStorage.getItem('token');
      const authHeaders = token
        ? {
          Authorization: `Bearer ${token}`,
        }
        : {};
      const { currentPassword, newPassword } = changePassword;
      const postData = {
        currentPassword,
        password: newPassword,
      };
      axios
        .post(`${API}api/auth/changePassword`, postData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(() => {
          setChangePassword({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          });
          setModal(!modal);
        })
        .catch(err => {
          setModal(!modal);
          setErrors(err.response && err.response.data.message);
        });
    }
  };
  const getQrCodeUri = () => {
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
        Authorization: `Bearer ${token}`,
      }
      : {};
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
        toggleQR();
      })
      .catch(err => {
        toggleGAClose();
        setErrors(err.response && err.response.data.message);
      });
  };
  const verifyTwoFaCode = () => {
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
        Authorization: `Bearer ${token}`,
      }
      : {};
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
      .then(() => {
        setTwoFaCode('');
        toggleTY();
      })
      .catch(err => {
        toggleQRClose();
        setErrors(err.response && err.response.data.message);
      });
  };

  const passwordValidator = values => {
    const error = {};
    if (!values.currentPassword) {
      error.currentPassword = 'Current Password Is required';
    } else if (!values.newPassword) {
      error.newPassword = 'New Password Is required';
    } else if (!values.confirmPassword) {
      error.confirmPassword = 'Password Confirmation Is required';
    }
    if (
      values.confirmPassword &&
      values.newPassword !== values.confirmPassword
    ) {
      error.passwordMatching =
        'New Password and Confirm Password Does Not Match';
    }
    return error;
  };
  return (
    <div className="sub_page">
      <Helmet>
        <title>My Profile</title>
        <meta name="description" content="My Profile Page" />
      </Helmet>
      <Wrapper id="list">
        <Container fluid>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="my_profile">
                <h4>
                  <FormattedMessage {...messages.MyProfile} />
                </h4>
                <div className="pro_img">
                  <Img src={Profile} alt="Profile" />
                </div>
                <h4>Li Jordan</h4>
                <p className="user_type">
                  <FormattedMessage {...messages.UserType} />
                </p>
                <h4>
                  <FormattedMessage {...messages.MyBiography} />
                </h4>
                <p>
                  <FormattedMessage {...messages.MyBio} />
                </p>
                <Button>
                  <FormattedMessage {...messages.EditProfile} />
                </Button>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <div className="basic_info">
                <h4>
                  <FormattedMessage {...messages.BasicInfo} />
                </h4>
                <Row>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="fname">
                        <FormattedMessage {...messages.Fname} />
                      </Label>
                      <Input
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="Enter first name"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="lname">
                        <FormattedMessage {...messages.Lname} />
                      </Label>
                      <Input
                        type="text"
                        name="lname"
                        id="lname"
                        placeholder="Enter last name"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="title">
                        <FormattedMessage {...messages.Title} />
                      </Label>
                      <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter title"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="email">
                        <FormattedMessage {...messages.Email} />
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="changepassword">
                        <FormattedMessage {...messages.ChangePassword} />
                      </Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="changepassword"
                          id="changepassword"
                          value="Change Password"
                        />
                        <InputGroupAddon addonType="append">
                          <Button onClick={clearModalData}>
                            <BsPencil />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="twofa">
                        <FormattedMessage {...messages.TwoFA} />
                      </Label>
                      <InputGroup>
                        <Input
                          type="text"
                          name="twofa"
                          id="twofa"
                          value="Enable 2FA"
                        />
                        <InputGroupAddon addonType="append">
                          <Switch
                            // checked={state.checkedB}
                            onChange={handleChange}
                            color="primary"
                            // name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                          />
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <FormGroup>
                      <Label for="aboutme">
                        <FormattedMessage {...messages.AboutMe} />
                      </Label>
                      <Input
                        type="textarea"
                        name="aboutme"
                        id="aboutme"
                        placeholder="Enter"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <div className="form_footer">
                  <div className="bottom_btns">
                    <Button className="btn_save">
                      <FormattedMessage {...messages.Cancel} />
                    </Button>
                    <Button className="btn_submit">
                      <FormattedMessage {...messages.Save} />
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      {/* Change Password Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <FormattedMessage {...messages.ChangePassword} />
        </ModalHeader>
        <ModalBody>
          <div className="modal_form">
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.YourCurrentPassword} />
              </Label>
              <Input
                type="password"
                name="currentPassword"
                id="password"
                placeholder="**********"
                onChange={e => handleChangeEvent(e)}
              />
              <Label for="password">
                {errors.currentPassword ? errors.currentPassword : ''}
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.NewPassword} />
              </Label>
              <Input
                type="password"
                name="newPassword"
                id="password"
                placeholder="**********"
                onChange={e => handleChangeEvent(e)}
              />
              <Label for="password">
                {errors.newPassword ? errors.newPassword : ''}
              </Label>
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.ConfirmPassword} />
              </Label>
              <Input
                type="password"
                name="confirmPassword"
                id="password"
                placeholder="**********"
                onChange={e => handleChangeEvent(e)}
              />
              <Label for="password">
                {errors.confirmPassword ? errors.confirmPassword : ''}
              </Label>
              <Label for="password">
                {errors.passwordMatching ? errors.passwordMatching : ''}
              </Label>
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggle}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={handleChangePasswordSave}>
            <FormattedMessage {...messages.Confirm} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Security Verification Modal */}
      <Modal isOpen={modalSV} toggle={toggleSV}>
        <ModalHeader toggle={toggleSV}>
          <FormattedMessage {...messages.SecurityVerification} />
        </ModalHeader>
        <ModalBody>
          <div className="security_verify">
            <p>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </p>
            <FaCheckCircle />
            <h4>Enable Google Authenticator</h4>
            <p>Recommended</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggleSV}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={toggleGA}>
            <FormattedMessage {...messages.ContinueVerify} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Download Google Authenticator App Modal */}
      <Modal isOpen={modalGA} toggle={toggleGAClose}>
        <ModalHeader toggle={toggleGAClose}>
          <FormattedMessage {...messages.DownloadGA} />
        </ModalHeader>
        <ModalBody>
          <div className="security_verify">
            <p>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </p>
            <div className="app_store">
              <Img src={GooglePlay} alt="Google Play" />
              <Img src={AppStore} alt="App Store" />
            </div>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.{' '}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggleGAClose}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={getQrCodeUri}>
            <FormattedMessage {...messages.ContinueVerify} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Scan QR Authenticator App Modal */}
      <Modal isOpen={modalQR} toggle={toggleQRClose}>
        <ModalHeader toggle={toggleQRClose}>
          <FormattedMessage {...messages.ScanQR} />
        </ModalHeader>
        <ModalBody>
          <div className="security_verify">
            <p>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </p>
            <div className="app_store">
              <QRCode value={QrUri} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggleQRClose}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={toggleEnable}>
            <FormattedMessage {...messages.ContinueVerify} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Enable Authnticator Modal */}
      <Modal isOpen={modalEnable} toggle={toggleEnableClose}>
        <ModalHeader toggle={toggleEnableClose}>
          <FormattedMessage {...messages.EnableAuth} />
        </ModalHeader>
        <ModalBody>
          <div className="enable_auth">
            <p>
              Enable 2FA Google Authenticator, to increase your account
              security.
            </p>
            <FormGroup>
              <Label for="authcode">
                <FormattedMessage {...messages.AuthenticatorCode} />
              </Label>
              <Input
                type="text"
                name="authcode"
                id="authcode"
                placeholder="Enter code"
                onChange={handleChangeEvent}
              />
              <FormText color="muted">
                Enter the 6 digit code visible on your google authenticator app
              </FormText>
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggleEnableClose}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={verifyTwoFaCode}>
            <FormattedMessage {...messages.ContinueVerify} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Thank you Modal */}
      <Modal isOpen={modalTY} toggle={toggleTYClose}>
        <ModalHeader toggle={toggleTYClose} className="invis">
          <FormattedMessage {...messages.ThankYou} />
        </ModalHeader>
        <ModalBody>
          <div className="thank_you">
            <h1>
              <FormattedMessage {...messages.ThankYou} />
            </h1>
            <p>You have enabled 2FA Authentication.</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
