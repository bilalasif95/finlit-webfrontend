/*
 * Menu Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaRegListAlt } from 'react-icons/fa';
import { HiUser } from 'react-icons/hi';
import { BiHeart } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import history from 'utils/history';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import axios from 'axios';
import { API } from '../../config/config';
import messages from './messages';

function MenuSidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userObj, setUserObj] = useState({});

  const token = localStorage.getItem('token');
  React.useEffect(() => {
    if (token) {
      getMe();
    }
  }, []);
  const getMe = () => {
    const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
    axios
      .get(`${API}api/auth/me`, {
        headers: {
          Accept: 'application/json',
          ...authHeaders,
        },
      })
      .then(result => {
        setUserObj(result.data);
      })
      .catch(() => {
        history.push('/');
      });
  };
  const LogOut = () => {
    history.push('/login');
    localStorage.clear();
  };
  return (
    <>
      <nav>
        <div
          role="button"
          tabIndex={0}
          className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
          onClick={() => setToggleMenu(!toggleMenu)}
          onKeyDown={() => setToggleMenu(!toggleMenu)}
        >
          <span className="toggle-bar" />
          <span className="cat_text">Categories</span>
        </div>
      </nav>

      <aside className={toggleMenu ? 'active' : ''}>
        <div className="asideCont">
          <div className="profileNav">
            <div className="side_top">
              <div
                role="button"
                tabIndex={0}
                className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
                onClick={() => setToggleMenu(!toggleMenu)}
                onKeyDown={() => setToggleMenu(!toggleMenu)}
              >
                <span className="toggle-bar" />
              </div>
              <div className="reg_account">
                {!token ? (
                  <div className="sign_in_up">
                    <Link to="/login">
                      <FormattedMessage {...messages.Login} />
                    </Link>
                    <Link to="/signup">
                      <FormattedMessage {...messages.Signup} />
                    </Link>
                  </div>
                ) : (
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav caret>
                      <div className="user_account">
                        <div className="user_icon">
                          <img
                            src={
                              userObj.image
                                ? userObj.image
                                : 'https://i.imgur.com/qUzPHy4.jpg'
                            }
                            alt="User"
                            height="100%"
                            width="100%"
                          />
                        </div>
                        <div className="user_name">
                          <p>
                            {userObj.firstName} {userObj.lastName}
                          </p>
                          <span>{userObj.email}</span>
                        </div>
                      </div>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem
                        onClick={() => {
                          history.push('/my_profile');
                        }}
                      >
                        <div>
                          <HiUser />
                          <FormattedMessage {...messages.Profile} />
                        </div>
                        <div />
                      </DropdownItem>
                      {/* <DropdownItem onClick={() => history.push('/dashboard')}>
                    <div>
                      <RiDashboardFill />
                      <FormattedMessage {...messages.MyDashboard} />
                    </div>
                    <div />
                  </DropdownItem> */}
                      <DropdownItem
                      // onClick={() => {
                      //   history.push('/course');
                      // }}
                      >
                        <div>
                          <FaRegListAlt />
                          <FormattedMessage {...messages.MyCourses} />
                        </div>
                        <div />
                      </DropdownItem>
                      {/* <DropdownItem>
                      <div>
                        <IoLanguage />
                        <FormattedMessage {...messages.MyCourses} />
                      </div>
                      <div />
                    </DropdownItem> */}
                      <DropdownItem
                      // onClick={() => {
                      //   history.push('/course');
                      // }}
                      >
                        <div>
                          {/* <FaUserCog /> */}
                          <RiUserSettingsLine />
                          <FormattedMessage {...messages.Settings} />
                        </div>
                        <div />
                      </DropdownItem>
                      <DropdownItem
                      // onClick={() => {
                      //   history.push('/course');
                      // }}
                      >
                        <div>
                          <BiHeart />
                          <FormattedMessage {...messages.Wishlist} />
                        </div>
                        <div />
                      </DropdownItem>
                      {/* {userObj &&
                    userObj.role &&
                    userObj.role.roleName === 'Student' ? (
                    <DropdownItem>
                      <Link to="/cart">
                        <div>
                          <IoMdCart />
                          <FormattedMessage {...messages.MyCart} />
                        </div>
                        <div />
                      </Link>
                    </DropdownItem>
                  ) : (
                    <></>
                  )} */}
                      <DropdownItem onClick={() => LogOut()}>
                        <div>
                          {/* <MdLogout /> */}
                          <FiLogOut />
                          <FormattedMessage {...messages.LogOut} />
                        </div>
                        <div />
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
              </div>
            </div>
            <ul className="list-unstyled sideBarList">
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Goal Based Education</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">One-on-One Private Sessions</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Interactive Learning Tools</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Bootcamp</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Hackathons</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Live Webinars</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Case Studies & Stories</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Short Videos</Link>
              </li>
              <li>
                <FaLongArrowAltRight />
                <Link to="/">Chat Bot</Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default MenuSidebar;
