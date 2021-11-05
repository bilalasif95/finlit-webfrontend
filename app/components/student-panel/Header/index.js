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
// import { RiDashboardFill } from 'react-icons/ri';
import { FaRegListAlt, FaLongArrowAltRight } from 'react-icons/fa';
//  FaRegUserCircle, , FaUserCog
import { FiLogOut } from 'react-icons/fi';
// import { BsCart3 } from 'react-icons/bs';
// import { MdLogout } from 'react-icons/md';
// import { MdNotificationsActive, MdChat } from 'react-icons/md';
// IoIosHelpCircle
import { IoMdCart, IoMdNotificationsOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../../images/logo.svg';
import Menubar from './Menubar';
// import Img from './Img';
import messages from './messages';
import { API } from '../../../config/config';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [toggleMenu, setToggleMenu] = useState(false);

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
          <NavbarToggler onClick={toggle} />
          <nav>
            <div
              role="button"
              tabIndex={0}
              className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
              onClick={() => setToggleMenu(!toggleMenu)}
              onKeyDown={() => setToggleMenu(!toggleMenu)}
            >
              <span className="toggle-bar" />
              Categories
            </div>
          </nav>

          <aside className={toggleMenu ? 'active' : ''}>
            <div className="asideCont">
              <div className="profileNav">
                <div
                  role="button"
                  tabIndex={0}
                  className={toggleMenu ? 'toggle-wrap active' : 'toggle-wrap'}
                  onClick={() => setToggleMenu(!toggleMenu)}
                  onKeyDown={() => setToggleMenu(!toggleMenu)}
                >
                  <span className="toggle-bar" />
                </div>
                <ul className="list-unstyled sideBarList">
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Goal Based Education</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>One-on-One Private Sessions</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Interactive Learning Tools</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Bootcamp</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Hackathons</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Live Webinars</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Case Studies & Stories</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Short Videos</Link>
                  </li>
                  <li>
                    <FaLongArrowAltRight />
                    <Link>Chat Bot</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

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
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.AccreditedEducation} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/accredited_education_list">
                    <FormattedMessage {...messages.AccreditedEducation} />
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.Budgeting} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.GoalBasedEducation} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FormattedMessage {...messages.LoansDebt} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> 
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.ShortVideos} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FormattedMessage {...messages.AccreditedEducation} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.Budgeting} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.GoalBasedEducation} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FormattedMessage {...messages.LoansDebt} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.LiveWebinars} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FormattedMessage {...messages.AccreditedEducation} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.Budgeting} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.GoalBasedEducation} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FormattedMessage {...messages.LoansDebt} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.GoalBasedEducation} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FormattedMessage {...messages.AccreditedEducation} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.Budgeting} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.GoalBasedEducation} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FormattedMessage {...messages.LoansDebt} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage {...messages.FreeGiftsRewards} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FormattedMessage {...messages.AccreditedEducation} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.Budgeting} />
                  </DropdownItem>
                  <DropdownItem>
                    <FormattedMessage {...messages.GoalBasedEducation} />
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <FormattedMessage {...messages.LoansDebt} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            */}
            </Nav>
            <div className="nav_right">
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  <IoMdCart />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>1</DropdownItem>
                  <DropdownItem>2</DropdownItem>
                  <DropdownItem>3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle nav caret>
                  <IoMdNotificationsOutline />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>1</DropdownItem>
                  <DropdownItem>2</DropdownItem>
                  <DropdownItem>3</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
                      <DropdownItem
                      // onClick={() => {
                      //   history.push('/course');
                      // }}
                      >
                        <div>
                          {/* <FaUserCog /> */}
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
