/*
 * Cart Checkout Sidebar Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Input, Button } from 'reactstrap';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { BsTagFill } from 'react-icons/bs';
import { SiAirplayvideo } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import messages from './messages';

function HackathonSidebar() {
  return (
    <Wrapper>
      <div className="top_detail">
        <div className="prices">
          <h4>$20.99</h4>
          <del>$94.99</del>
          <span>|&nbsp;&nbsp;87% off</span>
        </div>
        <div className="rating">
          <p>4.7</p>
          <div className="stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p>(76,876 ratings)</p>
        </div>
        <Link to="/" className="event_link">
          <FormattedMessage {...messages.AttendEvent} />
        </Link>
        <Button>
          <FormattedMessage {...messages.AddtoCart} />
        </Button>
      </div>
      <div className="details">
        <h4>
          <FormattedMessage {...messages.WebinarDetails} />
        </h4>
        <ul clasName="list">
          <li>
            <HiUsers />
            <p>1200 Attendees</p>
          </li>
          <li>
            <BiTimeFive />
            <p>2 hours</p>
          </li>
          <li>
            <GoDeviceCameraVideo />
            <p>8 Lectures</p>
          </li>
          <li>
            <MdDashboard />
            <p>Development</p>
          </li>
          <li>
            <BsTagFill />
            <p>Android, JavaScript</p>
          </li>
          <li>
            <SiAirplayvideo />
            <p>English, French</p>
          </li>
        </ul>
        <FormGroup>
          <Input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter Coupon"
          />
          <Button>
            <FormattedMessage {...messages.Apply} />
          </Button>
        </FormGroup>
      </div>
    </Wrapper>
  );
}

export default HackathonSidebar;
