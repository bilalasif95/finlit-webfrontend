/*
 * Notifications Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
// import LocaleToggle from 'containers/LocaleToggle';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
// import {
//   FaFacebookSquare,
//   FaLinkedin,
//   FaYoutube,
//   FaSkype,
// } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import Img from '../Img';
import messages from './messages';
import Wrapper from './Wrapper';
import pro1 from '../../images/cartImg.png';
import Green from '../../images/green-e.png';
import Red from '../../images/red-e.png';

function Notifications() {
  return (
    <Wrapper id="Notifications">
      <div className="title">
        <h4>
          <FormattedMessage {...messages.Notifications} /> (3)
        </h4>
      </div>
      <ul className="notify_list">
        <li>
          <div className="notify_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="notify_desc">
            <div className="left">
              <p>Growth Hacker TV made an announcement:</p>
              <Link to="/">FinLit</Link>
              <span className="time">17 days ago</span>
            </div>
            <div className="right">
              <img src={Red} alt="notification-icon" />
            </div>
          </div>
        </li>
        <li>
          <div className="notify_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="notify_desc">
            <div className="left">
              <p>Growth Hacker TV made an announcement:</p>
              <Link to="/">FinLit</Link>
              <span className="time">17 days ago</span>
            </div>
            <div className="right">
              <img src={Green} alt="notification-icon" />
            </div>
          </div>
        </li>
        <li>
          <div className="notify_img">
            <Img src={pro1} alt="notify" height="100%" width="100%" />
          </div>
          <div className="notify_desc">
            <div className="left">
              <p>Growth Hacker TV made an announcement:</p>
              <Link to="/">FinLit</Link>
              <span className="time">17 days ago</span>
            </div>
            <div className="right">
              <img src={Green} alt="notification-icon" />
            </div>
          </div>
        </li>
        {/* <li>
          <FaLinkedin />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaSkype />
        </li> */}
      </ul>
      <div className="mark_read_all">
        <Button>Mark all as read</Button>
        <Link to="/">See All</Link>
      </div>
    </Wrapper>
  );
}

export default Notifications;
