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
} from 'reactstrap';
import history from 'utils/history';
import { HiUser } from 'react-icons/hi';
import { RiDashboardFill } from 'react-icons/ri';
import { FiHeart, FiLogOut } from 'react-icons/fi';
import { MdNotificationsActive, MdChat } from 'react-icons/md';
import { IoMdCart, IoIosHelpCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.svg';
import Menubar from './Menubar';
import Img from './Img';
import User from '../../../images/user.jpg';
import messages from './messages';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState({});

  const toggle = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUserObj(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  let token = localStorage.getItem("token")
  const LogOut = () => {
    history.push("/login")
    localStorage.clear()
  }


  return (
    <Menubar>
      <Navbar expand="lg">
        <Container fluid="xl">
          <Link to="/">
            <Img src={Logo} alt="FinLit" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <UncontrolledDropdown nav inNavbar>
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
            </Nav>
            <div className="registration">
              {!token ?

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
                :
                <UncontrolledDropdown nav>
                  <DropdownToggle nav caret>
                    <div className="user_account">
                      <div className="user_icon">
                      <Img src={userObj.image ? userObj.image : User} alt="User" />
                      </div>
                      <div className="user_name">
                    <p>{userObj.firstName} {userObj.lastName}</p>
                    <span>{userObj.email}</span>
                  </div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <div onClick={() => history.push("/dashboard")}>
                        <RiDashboardFill />
                        <FormattedMessage {...messages.MyDashboard} />
                      </div>
                      <div />
                    </DropdownItem>
                    <DropdownItem onClick={ () => { history.push('/my_profile') } }>
                      <div>
                        <HiUser />
                        <FormattedMessage {...messages.AccountSetting} />
                      </div>
                      <div />
                    </DropdownItem>
                    <DropdownItem>
                      <div>
                        <FiHeart />
                        <FormattedMessage {...messages.MyFavorite} />
                      </div>
                      <div />
                    </DropdownItem>
                    <DropdownItem>
                      <div>
                        <MdNotificationsActive />
                        <FormattedMessage {...messages.Notifications} />
                      </div>
                      <div className="notify">200</div>
                    </DropdownItem>
                    <DropdownItem>
                      <div>
                        <MdChat />
                        <FormattedMessage {...messages.Messages} />
                      </div>
                      <div className="notify">200</div>
                    </DropdownItem>
                    {
                      userObj && userObj.roles && userObj.roles[0] && userObj.roles[0].roleName === 'Student'
                      ?
                      <DropdownItem>
                        <Link to="/cart">
                          <div>
                            <IoMdCart />
                            <FormattedMessage {...messages.MyCart} />
                          </div>
                          <div />
                        </Link>
                      </DropdownItem>
                      : <></>
                    }
                    <DropdownItem>
                      <div>
                        <IoIosHelpCircle />
                        <FormattedMessage {...messages.Help} />
                      </div>
                      <div />
                    </DropdownItem>
                    <DropdownItem>
                      <div onClick={() => LogOut()} >
                        <FiLogOut />
                        <FormattedMessage {...messages.LogOut} />
                      </div>
                      <div />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

              }


            </div>
          </Collapse>
        </Container>
      </Navbar>
    </Menubar>
  );
};

export default Header;
