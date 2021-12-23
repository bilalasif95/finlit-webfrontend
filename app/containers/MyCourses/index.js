/*
 * My Profile Page
 *
 */
import React, { useEffect, useState } from 'react';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
import history from 'utils/history';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
} from 'reactstrap';
import classnames from 'classnames';
import { HiSearch } from 'react-icons/hi';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
// import English from '../../images/english.png';
// import Arabic from '../../images/arabic.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import ChangePassword from '../../components/MyProfilePage/ChangePassword';
import CoursesTable from '../../components/instructor-panel/CoursesTable';
import { redirectToLogin } from '../../utils/redirectToLogin';
// import Profile from '../../images/profile.jpg';

export default function MyCourses() {
  const [activeTab, setActiveTab] = useState('1');
  // const [userObj, setUserObj] = useState({});
  // const [language, setLanguage] = useState('english');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const goToCreateCourse = () => {
    history.push('/create_course');
  };

  useEffect(() => {
    redirectToLogin();
  }, []);

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="profilePages">
        <Helmet>
          <title>My Courses</title>
          <meta name="description" content="My Courses Page" />
        </Helmet>
        <div className="profileMain">
          <Sidebar />
          {/* Profile Content */}
          <div className="profileContent">
            <div className="mainCont profileSettingCont">
              {/* Create Course */}
              <div className="profileHeader">
                <h4>My Courses</h4>
                <button
                  type="button"
                  className="btn btn-default createBtn"
                  onClick={goToCreateCourse}
                >
                  <span>+</span> Create Course
                </button>
              </div>
              <div className="customTabs coursesTabs">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      <FormattedMessage {...messages.Published} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      <FormattedMessage {...messages.Pending} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '3' })}
                      onClick={() => {
                        toggle('3');
                      }}
                    >
                      <FormattedMessage {...messages.Expired} />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '4' })}
                      onClick={() => {
                        toggle('4');
                      }}
                    >
                      <FormattedMessage {...messages.Draft} />
                    </NavLink>
                  </NavItem>
                </Nav>
                <div className="searchBox">
                  <InputGroup>
                    <InputGroupAddon addonType="append">
                      <Button>
                        <HiSearch />
                      </Button>
                    </InputGroupAddon>
                    <Input
                      type="text"
                      placeholder="Search"
                      name="search"
                      id="searches"
                    />
                  </InputGroup>
                </div>
              </div>

              <div className="customTabsCont">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <CoursesTable />
                  </TabPane>
                  <TabPane tabId="2">
                    <CoursesTable />
                  </TabPane>
                  <TabPane tabId="3">
                    <CoursesTable />
                  </TabPane>
                  <TabPane tabId="4">
                    <CoursesTable />
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
