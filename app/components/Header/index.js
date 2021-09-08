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
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import Menubar from './Menubar';
import Img from './Img';
import messages from './messages';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            </div>
          </Collapse>
        </Container>
      </Navbar>
    </Menubar>
  );
};

export default Header;
