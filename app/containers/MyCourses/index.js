/*
 * My Profile Page
 *
 */
import React, { useState } from 'react';
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
  FormGroup,
  Label,
} from 'reactstrap';
import classnames from 'classnames';
import { HiSearch } from 'react-icons/hi';
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
// import English from '../../images/english.png';
// import Arabic from '../../images/arabic.png';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import ChangePassword from '../../components/MyProfilePage/ChangePassword';
import CoursesTable from '../../components/instructor-panel/CoursesTable';
import TagsComponent from '../../components/CourseTag/TagsComponent';
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
  }

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="sub_pages profilePages">
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
                <h3>Courses Details</h3>
                <button type="button" className="btn btn-default detailsBtn">
                  <span>+</span> Add More Details
                </button>
              </div>
              <div className="createCourseCont">
                <div className="card">
                  <div className="card-header">
                    Course Details
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Heading</label>
                      <input type="email" className="form-control" placeholder="Enter Title" />
                    </div>
                    <div className="form-group mt-4">
                      <label>Description</label>
                      <textarea className="form-control" rows="6" placeholder="Enter Description"></textarea>
                    </div>
                  </div>
                  <div className="card_Divider">
                    <div className="card-body">
                      <div className="form-group">
                        <label>Heading</label>
                        <input type="email" className="form-control" placeholder="Enter Title" />
                      </div>
                      <div className="form-group mt-4">
                        <label>Description</label>
                        <textarea className="form-control" rows="6" placeholder="Enter Description"></textarea>
                      </div>
                      <div className="delete">
                        <RiDeleteBin7Line />
                        <span>Delete Section</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-4">
                  <div className="card-header">
                    Course Tags
                  </div>
                  <div className="card-body">
                    <FormGroup>
                      <Label for="price">
                        <FormattedMessage {...messages.AddTag} />
                      </Label>
                      <TagsComponent data={{ tags: [] }} tags={[]} />
                    </FormGroup>
                  </div>
                </div>
                <div className="form_footer">
                  <div className="bottom_btns">
                    <Button className="btn_save">
                      Back
                    </Button>
                    <Button className="btn_submit">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
              {/* Create Course */}
              <div className="profileHeader">
                <h3>My Courses</h3>
                <button type="button" className="btn btn-default createBtn" onClick={goToCreateCourse}>
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
