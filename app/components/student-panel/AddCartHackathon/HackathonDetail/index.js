/*
 * Cart Checkout Description Component
 */
import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { BiCalendar } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import moment from 'moment';
import JoditEditor from 'jodit-react';
import classnames from 'classnames';
import messages from './messages';
import Wrapper from './Wrapper';

function HackathonDetail(props) {
  const editor = useRef(null);
  const config = {
    readonly: true,
  };
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { detail } = props;
  const dataDetails = detail.data;

  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        {/* <FormattedMessage {...messages.Subtotal} /> */}
        <div className="main_img">
          <img src={detail.eventImage} alt="main" height="100%" width="100%" />
        </div>
        <div className="header">
          <h4>{dataDetails && dataDetails.mainTitle}</h4>
          <div className="like_share">
            <Button>
              <FaRegHeart />
            </Button>
            <Button>
              <IoMdShare />
            </Button>
          </div>
        </div>
        <div className="date_location">
          <div className="item">
            <BiCalendar />{' '}
            <p>
              <FormattedMessage {...messages.Date} />
            </p>
            <p className="value">
              {moment(detail.updatedAt).format('MMM DD ,YYYY')}
            </p>
          </div>
          <div className="item time-item">
            <GrLocation />
            <p>
              <FormattedMessage {...messages.Location} />{' '}
            </p>
            <p className="value">Online</p>
          </div>
        </div>
        <div className="tabs_cont">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                About
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Flow
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                FAQs
              </NavLink>
            </NavItem> */}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {/* <h4>About hackathon</h4> */}
              <p>
                <JoditEditor
                  ref={editor}
                  value={dataDetails && dataDetails.description}
                  config={config}
                  tabIndex={0} // tabIndex of textarea
                />
              </p>
            </TabPane>
            <TabPane tabId="2">
              <h4>About Flow</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </TabPane>
            <TabPane tabId="3">
              <h4>FAQs</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </TabPane>
          </TabContent>
        </div>
        {/* <div className="requirement">
          <h4>Registration Requirements:</h4>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
        </div> */}
      </div>
    </Wrapper>
  );
}

HackathonDetail.propTypes = {
  detail: PropTypes.any,
};
export default HackathonDetail;
