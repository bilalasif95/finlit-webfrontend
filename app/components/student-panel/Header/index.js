/*
 * Header Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import history from 'utils/history';
import './profile.css';
import { HiSearch, HiUser } from 'react-icons/hi';
import { BiHeart } from 'react-icons/bi';
import { RiUserSettingsLine } from 'react-icons/ri';
import { FaRegListAlt } from 'react-icons/fa';
//  FaRegUserCircle, , FaUserCog
import { FiLogOut } from 'react-icons/fi';
// import { BsCart3 } from 'react-icons/bs';
// import { MdLogout } from 'react-icons/md';
// import { MdNotificationsActive, MdChat } from 'react-icons/md';
// IoIosHelpCircle
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../../images/logo.svg';
import Menubar from './Menubar';
// import Img from './Img';
import messages from './messages';
import { API } from '../../../config/config';
import MyCartNotificationsDropdowns from '../../MyCartNotificationsDropdowns';
import MenuSidebar from '../../MenuSidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState({});

  const toggle = () => setIsOpen(!isOpen);
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
    <Menubar>
      <Navbar expand="lg">
        <Container fluid="xl">
          <div className="d_res">
            <MenuSidebar />
          </div>
          {userObj &&
          userObj.roles &&
          userObj.roles[0] &&
          userObj.roles[0].roleName === 'Instructor' ? (
            <Link to="/dashboard">
              <img
                src={Logo}
                alt="FinLit"
                className="logo"
                height="100%"
                width="100%"
              />
            </Link>
          ) : (
            <Link to="/">
              <img
                src={Logo}
                alt="FinLit"
                className="logo"
                height="100%"
                width="100%"
              />
            </Link>
          )}
          <div className="d_res">
            <MyCartNotificationsDropdowns />
          </div>
          <NavbarToggler onClick={toggle} />
          <div className="d_desk">
            <MenuSidebar />
          </div>
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
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
            </Nav>
            <div className="nav_right">
              <div className="d_desk">
                <MyCartNotificationsDropdowns />
              </div>
              <div className="registration">
                {!token ? (
                  <Nav navbar>
                    <NavItem>
                      <Link className="nav-link" to="/login">
                        <FormattedMessage {...messages.Login} />
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link className="nav-link" to="/signup">
                        <FormattedMessage {...messages.Signup} />
                      </Link>
                    </NavItem>
                  </Nav>
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
                      userObj.roles &&
                      userObj.roles[0] &&
                      userObj.roles[0].roleName === 'Student' ? (
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
          </Collapse>
        </Container>
      </Navbar>
    </Menubar>
  );
};

export default Header;
