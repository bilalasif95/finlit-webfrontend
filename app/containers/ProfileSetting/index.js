/*
 * My Profile Page
 *
 */
import React, { useEffect, useState } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  // Button,
  Modal,
  ModalHeader,
  ModalBody,
  // ModalFooter,
} from 'reactstrap';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import English from '../../images/english.png';
import Arabic from '../../images/arabic.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
import ChangePassword from '../../components/MyProfilePage/ChangePassword';
import TwoFAAuthentication from '../../components/MyProfilePage/TwoFAAuthentication';
// import Profile from '../../images/profile.jpg';
import { redirectToLogin } from '../../utils/redirectToLogin';

export default function ProfileSetting() {
  const [activeTab, setActiveTab] = useState('1');
  const [modal, setModal] = useState(false);

  const toggle2FA = () => setModal(!modal);
  const [switchChecked, setswitchChecked] = useState(false);
  // const [userObj, setUserObj] = useState({});
  const [language, setLanguage] = useState('english');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    redirectToLogin();
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="profilePages">
        <Helmet>
          <title>My Profile</title>
          <meta name="description" content="My Profile Page" />
        </Helmet>
        <div className="profileMain">
          <Sidebar />
          {/* Profile Content */}
          <div className="profileContent settingMain">
            <div className="mainCont profileSettingCont">
              <div className="profileHeader">
                <h3>Setting</h3>
              </div>
              <div className="customTabs">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      <FormattedMessage {...messages.ChangePassword} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      <FormattedMessage {...messages.Language} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        toggle('3');
                      }}
                    >
                      <FormattedMessage {...messages.Authentication} />
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>

              <div className="customTabsCont">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <ChangePassword />
                  </TabPane>
                  <TabPane tabId="2">
                    <div className="EndpointBtns">
                      <label
                        className="Langcontainer"
                        onClick={() => setLanguage('english')}
                      >
                        <div className="box-in">
                          <img alt="" src={Arabic} />
                          <p>English</p>
                          {/* <input type="radio" id="html" name="fav_language" value="HTML" checked="checked"/> */}
                          <span
                            className={
                              language === 'english'
                                ? 'checkmark checkmarkCircleActive'
                                : 'checkmark'
                            }
                          />
                        </div>
                      </label>

                      <label
                        className="Langcontainer"
                        onClick={() => setLanguage('arabic')}
                      >
                        <div className="box-in">
                          <img alt="" src={English} />
                          <p>Arabic</p>
                          {/* <input type="radio" id="css" name="fav_language" value="CSS"/> */}
                          <span
                            className={
                              language === 'arabic'
                                ? 'checkmark checkmarkCircleActive'
                                : 'checkmark'
                            }
                          />
                        </div>
                      </label>
                    </div>
                  </TabPane>
                  <TabPane tabId="3">
                    <h5>2FA Authentication</h5>
                    <div className="toggleSwitch">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={switchChecked}
                          onChange={e => {
                            setswitchChecked(e.target.checked);
                            toggle2FA();
                          }}
                        />
                        <span className="slider round" />
                      </label>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>

        {/* end */}
      </div>
      {/* Modal */}
      <Modal
        isOpen={modal}
        toggle={toggle2FA}
        className="ratingModal deleteModal"
      >
        <ModalHeader toggle={toggle2FA} />
        <ModalBody>
          <TwoFAAuthentication userData={{ twoFA: false }} />
        </ModalBody>
        {/* <ModalFooter>
          <Button className="deleteBtn" onClick={toggle2FA}>
            Delete
          </Button>
        </ModalFooter> */}
      </Modal>
    </>
  );
}
