/*
 * Cart Checkout Description Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BiCalendar, BiTimeFive } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { GrLocation } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';
import addcart from '../../../../images/addcart.png';
import finlit from '../../../../images/finlit.png';
import education from '../../../../images/education.png';

function HackathonDetail() {
  // const PresenterList = [
  //   {
  //     id: 0,
  //     img: finlit,
  //     alt: 'Presenter',
  //     desc: <FormattedMessage {...messages.PresenterDesc} />,
  //     presenter: <FormattedMessage {...messages.Presenter} />,
  //     presentername: <FormattedMessage {...messages.PresenterName} />,
  //     date: <FormattedMessage {...messages.Date} />,
  //     courses: <FormattedMessage {...messages.Courses} />,
  //   },
  // ];
  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        {/* <FormattedMessage {...messages.Subtotal} /> */}
        <div className="main_img">
          <img src={addcart} alt="main" />
        </div>
        <div className="header">
          <h4>
            <FormattedMessage {...messages.Title} />
          </h4>
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
            <p className="value">August 24, 2021</p>
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
            <p className="value">10:00 pm - 12:00 pm</p>
          </div>
          <div className="item">
            <HiUsers />
            <p>
              <FormattedMessage {...messages.Attendees} />{' '}
            </p>
            <p className="value">2362</p>
          </div>
        </div>
        <div className="tabs_cont">
          <h4>About hackathon</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
        <div className="presenters">
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
        </div>
      </div>
    </Wrapper>
  );
}

export default HackathonDetail;
