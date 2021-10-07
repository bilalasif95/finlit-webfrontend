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
import messages from './messages';
import Wrapper from './Wrapper';
import Img from '../../../components/Img';
import Profile from '../../../images/profile.jpg';
import GooglePlay from '../../../images/GooglePlay.png';
import AppStore from '../../../images/AppStore.png';
import QR from '../../../images/QR.png';

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

  return (
    <div className="sub_pages">
      <Helmet>
        <title>My Profile</title>
        <meta name="description" content="My Profile Page" />
      </Helmet>
      <Wrapper id="list">
        <Container fluid="xl">
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="my_profile">
                <h4>
                  <FormattedMessage {...messages.MyProfile} />
                </h4>
                <div className="pro_img">
                  <Img src={Profile} alt="Profile" height="100%" width="100%" />
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
                          <Button onClick={toggle}>
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
                name="currentpassword"
                id="password"
                placeholder="**********"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.NewPassword} />
              </Label>
              <Input
                type="password"
                name="newpassword"
                id="password"
                placeholder="**********"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                <FormattedMessage {...messages.ConfirmPassword} />
              </Label>
              <Input
                type="password"
                name="confirmpassword"
                id="password"
                placeholder="**********"
              />
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggle}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={toggle}>
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
      {/* Download Google Authnticator App Modal */}
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
              <Img
                src={GooglePlay}
                alt="Google Play"
                height="100%"
                width="100%"
              />
              <Img src={AppStore} alt="App Store" height="100%" width="100%" />
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
          <Button className="btn_submit" onClick={toggleQR}>
            <FormattedMessage {...messages.ContinueVerify} />
          </Button>
        </ModalFooter>
      </Modal>
      {/* Scan QR Authnticator App Modal */}
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
              <Img src={QR} alt="QR" height="100%" width="100%" />
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
                type="test"
                name="authcode"
                id="authcode"
                placeholder="Enter code"
              />
              <FormText color="muted">
                Enter the 6 digit code received by user@finlit.com
              </FormText>
            </FormGroup>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn_save" onClick={toggleEnableClose}>
            <FormattedMessage {...messages.Cancel} />
          </Button>
          <Button className="btn_submit" onClick={toggleTY}>
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
