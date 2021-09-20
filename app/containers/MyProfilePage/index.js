/*
 * My Profile Page
 *
 */
import React, { useEffect, useState } from 'react';
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
import { FiCamera } from 'react-icons/fi';
import messages from './messages';
import Wrapper from './Wrapper';
import Img from '../../components/Img';
// import Profile from '../../images/profile.jpg';
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
  const [profileUpdate, setProfileUpdate] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    image: '',
    gender: '',
    email: '',
    country: '',
    address: '',
    aboutMe: '',
  });
  const [currentProfile, setCurrentProfile] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    image: '',
    email: '',
    description: '',
  });

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
    if (event.target.type === 'file') {
      setProfileUpdate({
        ...profileUpdate,
        [event.target.name]: event.target.files[0],
      });
    }
    if (event.target.type === 'text' || event.target.type === 'textarea') {
      if (event.target.name === 'authcode') {
        setTwoFaCode(event.target.value);
      } else {
        setProfileUpdate({
          ...profileUpdate,
          [event.target.name]: event.target.value,
        });
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
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
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
        toggleQR();
      })
      .catch(err => {
        toggleGAClose();
        setErrors(err.response && err.response.data.message);
      });
  };
  const verifyTwoFaCode = () => {
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

  const handleUpdateProfileSave = () => {
    if (Object.keys(updateProfileValidator(profileUpdate)).length > 0) {
      setErrors(updateProfileValidator(profileUpdate));
      setTimeout(() => {
        setErrors({});
      }, 4000);
    } else {
      const token = localStorage.getItem('token');
      const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
      const bodyFormData = new FormData();
      bodyFormData.append('firstName', profileUpdate.firstName);
      bodyFormData.append('lastName', profileUpdate.lastName);
      bodyFormData.append('profileImage', profileUpdate.image);
      bodyFormData.append('gender', profileUpdate.gender);
      bodyFormData.append('description', profileUpdate.aboutMe);
      bodyFormData.append('profession', profileUpdate.profession);
      bodyFormData.append('country', profileUpdate.country);
      bodyFormData.append('address', profileUpdate.address);
      axios
        .put(`${API}api/user`, bodyFormData, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...authHeaders,
          },
        })
        .then(() => {
          setProfileUpdate({
            firstName: '',
            lastName: '',
            profession: '',
            image: {},
            gender: '',
            email: '',
            country: '',
            address: '',
            aboutMe: '',
          });
          getCurrentUser();
        })
        .catch(err => {
          setErrors(err.response && err.response.data.message);
        });
    }
  };
  const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/user/${userId}`, {
        headers: {
          Accept: 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setCurrentProfile({
          ...currentProfile,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          profession: res.data.profession,
          email: res.data.email,
          image: res.data.image,
          description: res.data.description,
        });
      })
      .catch(err => {
        setErrors(err);
      });
  };
  const updateProfileValidator = values => {
    const error = {};
    if (!values.firstName) {
      error.firstName = 'First Name Is required';
    } else if (!values.lastName) {
      error.lastName = 'Last Name Is required';
    } else if (!values.gender) {
      error.gender = 'Gender is Required';
    } else if (!values.image) {
      error.image = 'Profile Image is Required';
    } else if (!values.aboutMe) {
      error.aboutMe = 'About me description is required';
    }
    return error;
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
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
                  <Img src={currentProfile.image} alt="ProfileImage" />
                </div>
                <h4>
                  {currentProfile.firstName} {currentProfile.lastName}
                </h4>
                <p className="user_type"> {currentProfile.profession}</p>
                <h4>
                  <FormattedMessage {...messages.MyBiography} />
                </h4>
                <p> {currentProfile.description} </p>
                {/* <Button>
                  <FormattedMessage {...messages.EditProfile} />
                </Button> */}
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
                        name="firstName"
                        id="fname"
                        placeholder="Enter first name"
                        value={profileUpdate.firstName}
                        onChange={e => handleChangeEvent(e)}
                      />
                      <Label for="fname">
                        {errors.firstName ? (
                          <p className="error">{errors.firstName}</p>
                        ) : (
                          ''
                        )}
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="lname">
                        <FormattedMessage {...messages.Lname} />
                      </Label>
                      <Input
                        type="text"
                        name="lastName"
                        id="lname"
                        placeholder="Enter last name"
                        value={profileUpdate.lastName}
                        onChange={e => handleChangeEvent(e)}
                      />
                      <Label for="lname">
                        {errors.lastName ? (
                          <p className="error">{errors.lastName}</p>
                        ) : (
                          ''
                        )}
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="gender">
                        <FormattedMessage {...messages.Gender} />
                      </Label>
                      <Input
                        type="text"
                        name="gender"
                        id="gender"
                        placeholder="Enter Gender"
                        value={profileUpdate.gender}
                        onChange={e => handleChangeEvent(e)}
                      />
                      <Label for="gender">
                        {errors.gender ? (
                          <p className="error">{errors.gender}</p>
                        ) : (
                          ''
                        )}
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="profession">
                        <FormattedMessage {...messages.Profession} />
                      </Label>
                      <Input
                        type="text"
                        name="profession"
                        id="profession"
                        placeholder="Enter profession"
                        value={profileUpdate.profession}
                        onChange={e => handleChangeEvent(e)}
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
                        value={currentProfile.email}
                        readOnly="readOnly"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="country">
                        <FormattedMessage {...messages.Country} />
                      </Label>
                      <Input
                        type="country"
                        name="country"
                        id="country"
                        placeholder="Enter Country"
                        value={profileUpdate.country}
                        onChange={e => handleChangeEvent(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="address">
                        <FormattedMessage {...messages.Address} />
                      </Label>
                      <Input
                        type="address"
                        name="address"
                        id="address"
                        placeholder="Enter address"
                        value={profileUpdate.address}
                        onChange={e => handleChangeEvent(e)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={12}>
                    <FormGroup>
                      <Label for="uploadimage">
                        <FormattedMessage {...messages.ProfileImage} />
                      </Label>
                      <div className="camera">
                        <div className="form-control">
                          <p>
                            {profileUpdate.image.name
                              ? profileUpdate.image.name
                              : 'Upload Profile Image'}
                          </p>
                          <div className="input--file">
                            <span>
                              <FiCamera />
                            </span>
                            <input
                              type="file"
                              name="image"
                              id="uploadimage"
                              placeholder="Upload Profile Image"
                              onChange={e => handleChangeEvent(e)}
                            />
                          </div>
                        </div>
                      </div>
                      <Label for="uploadimage">
                        {errors.image ? (
                          <p className="error">{errors.image} </p>
                        ) : (
                          ''
                        )}
                      </Label>
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
                        name="aboutMe"
                        id="aboutme"
                        placeholder="Enter description about yourself"
                        value={profileUpdate.aboutMe}
                        onChange={e => handleChangeEvent(e)}
                      />
                      <Label for="aboutMe">
                        {errors.aboutMe ? (
                          <p className="error">{errors.aboutMe}</p>
                        ) : (
                          ''
                        )}
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="form_footer">
                  <div className="bottom_btns">
                    <Button className="btn_save">
                      <FormattedMessage {...messages.Cancel} />
                    </Button>
                    <Button
                      className="btn_submit"
                      onClick={handleUpdateProfileSave}
                    >
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
                onChange={e => handleChangeEvent(e)}
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
