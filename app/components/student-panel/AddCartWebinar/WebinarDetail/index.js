/*
 * Cart Checkout Description Component
 */
import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { trim } from 'lodash';
import { BiCalendar, BiTimeFive } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
// import { RiStarSFill } from 'react-icons/ri';
import JoditEditor from 'jodit-react';
import { HiUsers } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
// import finlit from '../../../../images/finlit.png';
// import education from '../../../../images/education.png';

function WebinarDetail(props) {
  const editor = useRef(null);
  const config = {
    readonly: true,
  };
  // const [activeTab, setActiveTab] = useState('1');

  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  let detail = props.detail;
  let dataDetails = detail.data;

  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        {/* <FormattedMessage {...messages.Subtotal} /> */}
        <div className="main_img">
          <img src={detail.eventImage} alt="main" />
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
              {moment(detail.updatedAt).format("MMM DD ,YYYY")}
            </p>
          </div>
          <div className="item">
            <GrLocation />
            <p>
              <FormattedMessage {...messages.Location} />{' '}
            </p>
            <p className="value">Online</p>
          </div>
          <div className="item">
            <BiTimeFive />
            <p>
              <FormattedMessage {...messages.Timings} />
            </p>
            <p className="value">
              {dataDetails && dataDetails.startTime} - {dataDetails && dataDetails.endTime}
            </p>
          </div>
          <div className="item">
            <HiUsers />
            <p>
              <FormattedMessage {...messages.Attendees} />
            </p>
            <p className="value">2362</p>
          </div>
        </div>
        <div className="tabs_cont">
          {/* <h4>About hackathon</h4> */}
          <p>
            <JoditEditor
              ref={editor}
              value={dataDetails && dataDetails.description}
              config={config}
              tabIndex={0} // tabIndex of textarea
            />
          </p>
        </div>
        {/* <div className="presenters">
          <h4>Registration Requirements:</h4>
          <div className="presenter_list">
            <div className="item">
              <div className="icon">
                <img src={finlit} alt="View" />
              </div>
              <div className="details">
                <p> desc here </p>
                <div className="outcomers">
                  <div className="presenter_name">
                    <p>Presenter |&nbsp;&nbsp;</p>
                    <p className="name">Joeel & Natalie Rivera</p>
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
                  </div>
                  <div className="courses">
                    <img src={education} alt="Courses" />
                    <p>68 Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Wrapper>
  );
}

export default WebinarDetail;
