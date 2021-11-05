/*
 * My Profile Page
 *
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
// import InputBase from '@material-ui/core/InputBase';
import { Helmet } from 'react-helmet';
// import { Link } from 'react-router-dom';
import '../../components/student-panel/Header/profile.css';
// import { withStyles } from '@material-ui/core/styles';
import {
  // Container,
  // Row,
  // Col,
  Label,
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  // Button,
  // Collapse,
  // Card,
  // CardBody,
} from 'reactstrap';
// import { BiUserCircle, } from 'react-icons/bi';
// import { BsChatSquare } from 'react-icons/bs';
// import { FaChevronDown } from 'react-icons/fa';
// import { RiUserSettingsLine } from 'react-icons/ri';
// import Bell from '../../images/bell.svg';
// import { RiKeyLine } from 'react-icons/ri';
// import classnames from 'classnames';
import { toast } from 'react-toastify';
import axios from 'axios';
import messages from './messages';
import 'react-toastify/dist/ReactToastify.css';
// import Wrapper from './Wrapper';
import Img from '../../components/Img';
// import Logo from '../../images/logoS.png';
import Cam from '../../images/cam.png';
import { API } from '../../config/config';
import BasicInfo from '../../components/MyProfilePage/BasicInfo';
import Sidebar from '../../components/student-panel/Sidebar/index';
// import ChangePassword from '../../components/MyProfilePage/ChangePassword';
// import TwoFAAuthentication from '../../components/MyProfilePage/TwoFAAuthentication';
// import Profile from '../../images/profile.jpg';

export default function MyProfilePage() {
  // const [activeTab, setActiveTab] = useState('1');
  const [userObj, setUserObj] = useState({});
  // const [collapse, setCollapse] = useState(false);
  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };
  const getCurrentUser = () => {
    const token = localStorage.getItem('token');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/user/${userInfo && userInfo.id}`, {
        headers: {
          Accept: 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        setUserObj(res.data);
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };
  const updateProfileImg = e => {
    // setNewProfileImg(e.target.files[0]);
    const token = localStorage.getItem('token');
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    const bodyFormData = new FormData();
    bodyFormData.append('profileImage', e.target.files[0]);
    axios
      .put(`${API}api/user/updateProfilePic`, bodyFormData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then(res => {
        toast.success(
          res && res.data ? res.data.message : 'Message Not Readable',
        );
        // setNewProfileImg({});
        getCurrentUser();
      })
      .catch(err => {
        toast.error(
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
        // setNewProfileImg({});
      });
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
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
          <div className="profileContent">
            <div className="mainCont">
              <h2>My Personal</h2>
              {/* <div className="profileHeader">
                <h3>Create New Course</h3>
                <button className="btn btn-default createBtn"><span>+</span> Create Course</button>
              </div> */}
              <div className="uploadImg">
                <div className="inner">
                  <Img
                    src={userObj.image || 'https://i.imgur.com/qUzPHy4.jpg'}
                    alt="Profile"
                  />
                  <Label className="edit">
                    <img src={Cam} alt="Cam" />
                    <input
                      type="file"
                      name="image"
                      id="uploadimage"
                      placeholder="Upload Profile Image"
                      onChange={e => updateProfileImg(e)}
                    />
                  </Label>
                </div>
                <div className="uploadBtns">
                  <Label className="upload">
                    {' '}
                    <FormattedMessage {...messages.ChangeProfile} />
                    <input
                      type="file"
                      name="image"
                      id="uploadimage"
                      placeholder="Upload Profile Image"
                      onChange={e => updateProfileImg(e)}
                    />
                  </Label>
                  <button type="button" className="btn btn-default">
                    Delete Photo
                  </button>
                </div>
              </div>
              <BasicInfo />
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
}
