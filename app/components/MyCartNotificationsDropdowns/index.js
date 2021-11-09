/*
 * My Cart and Notifications Component
 */
import React from 'react';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { GrCart } from 'react-icons/gr';
import { IoMdNotificationsOutline } from 'react-icons/io';
import Notifications from '../Notifications';
import MyCart from '../MyCart';
import Wrapper from './Wrapper';


function MyCartNotificationsDropdowns() {
  return (
    <Wrapper>
      <UncontrolledDropdown nav className="alert_dropdown mycart">
        <DropdownToggle nav caret>
          <GrCart />
          <div className="count">10</div>
        </DropdownToggle>
        <DropdownMenu right>
          <MyCart />
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav className="alert_dropdown notify">
        <DropdownToggle nav caret>
          <IoMdNotificationsOutline />
          <div className="count">10</div>
        </DropdownToggle>
        <DropdownMenu right>
          <Notifications />
        </DropdownMenu>
      </UncontrolledDropdown>
    </Wrapper>
  );
}

export default MyCartNotificationsDropdowns;
