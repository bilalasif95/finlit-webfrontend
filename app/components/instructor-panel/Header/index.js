/*
 * Header Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  Nav,
  // NavItem,
  UncontrolledDropdown,
  DropdownItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { HiSearch, HiUser } from 'react-icons/hi';
import { RiDashboardFill } from 'react-icons/ri';
import { FiHeart, FiLogOut } from 'react-icons/fi';
import { MdNotificationsActive, MdChat } from 'react-icons/md';
import { IoIosHelpCircle } from 'react-icons/io';
import history from 'utils/history';
// IoLanguage
import Img from './Img';
import Logo from '../../../images/logo.svg';
import User from '../../../images/user.jpg';
import messages from './messages';
import Menubar from './Menubar';

function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);
  React.useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      setUserObj(JSON.parse(localStorage.getItem('userInfo')));
    }
  }, []);

  return (
    <Menubar>
      <Navbar>
        <Container fluid="xl">
          <div className="logo_brand">
            <Link to="/">
              <Img src={Logo} alt="Logo" height="100%" width="100%" />
            </Link>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>Explore</DropdownToggle>
              {/* <DropdownMenu>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                </DropdownMenu> */}
            </Dropdown>
          </div>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Nav>
            <div className="desk_view">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Search for Favorite Courses"
                  name="search"
                  id="searches"
                />
                <InputGroupAddon addonType="append">
                  <Button>
                    <HiSearch />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <div className="user_account">
                  <div className="user_icon">
                    <Img
                      src={userObj.image ? userObj.image : User}
                      alt="User"
                    />
                  </div>
                  <div className="user_name">
                    <p>
                      ${userObj.firstName} ${userObj.lastName}
                    </p>
                    <span>${userObj.email}</span>
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <div>
                    <RiDashboardFill />
                    <FormattedMessage {...messages.MyDashboard} />
                  </div>
                  <div />
                </DropdownItem>
                <DropdownItem>
                  <Link to="/my_profile">
                    <div>
                      <HiUser />
                      <FormattedMessage {...messages.AccountSetting} />
                    </div>
                    <div />
                  </Link>
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
                {/* <DropdownItem>
                    <IoLanguage /> Language
                  </DropdownItem> */}
                <DropdownItem>
                  <div>
                    <IoIosHelpCircle />
                    <FormattedMessage {...messages.Help} />
                  </div>
                  <div />
                </DropdownItem>
                <DropdownItem
                  onClick={() => {
                    localStorage.clear();
                    history.push('/login');
                  }}
                >
                  <div>
                    <FiLogOut />
                    <FormattedMessage {...messages.LogOut} />
                  </div>
                  <div />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="res_view">
            <InputGroup>
              <Input
                type="text"
                placeholder="Search for Favorite Courses"
                name="search"
                id="search"
              />
              <InputGroupAddon addonType="append">
                <Button>
                  <HiSearch />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </Container>
      </Navbar>
    </Menubar>
  );
}

export default Header;
