/*
 * My Profile Page
 *
 */
import React, { useState, useEffect } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  Container,
  Row,
  Col,
  Label,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Collapse,
  Card,
  CardBody,
} from 'reactstrap';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../images/logoS.png';
import Green from '../../images/green-e.png';
import Boy from '../../images/boy.png';
import English from '../../images/english.png';
import Arabic from '../../images/arabic.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
import classnames from 'classnames';
import { RiKeyLine } from 'react-icons/ri';
import { BiUserCircle, BiLock } from 'react-icons/bi';
import { FormattedMessage } from 'react-intl';
import BasicInfo from '../../components/MyProfilePage/BasicInfo';
import ChangePassword from '../../components/MyProfilePage/ChangePassword';
import TwoFAAuthentication from '../../components/MyProfilePage/TwoFAAuthentication';
// import Profile from '../../images/profile.jpg';

export default function ProfileSetting() {
  const [activeTab, setActiveTab] = useState('1');
  const [userObj, setUserObj] = useState({});
  const [language, setLanguage] = useState('english');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="sub_pages profilePages">
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
                              language == 'english'
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
                              language == 'arabic'
                                ? 'checkmark checkmarkCircleActive'
                                : 'checkmark'
                            }
                          />
                        </div>
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
    </>
  );
}
