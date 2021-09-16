/*
 * Webinars List Component
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import { BiTimeFive, BiCalendar } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import axios from 'axios';
import loaderImg from "../../../../images/loader.svg";
function WebinarsList() {

  const [webinarsList, setwebinarsList] = useState([]),
    [loader, setLoader] = useState(false)
  useEffect(() => {
    getWebinarList()
  }, [])

  const getWebinarList = () => {
    setLoader(true)
    const token = localStorage.getItem('token');
    const authHeaders = token
      ? {
        Authorization: `Bearer${token}`,
      }
      : {};
    axios
      .get(`${API}api/events/getEventsByTypes?type=Webinar`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...authHeaders,
        },
      })
      .then((res) => {
        setwebinarsList(res && res.data && res.data.data)
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  }

  return (
    <Wrapper id="list">
      {loader ? <img className="loader" src={loaderImg} /> :
      <div className="courses">
        <Row>
          <Col lg={12}>
            <h4>
              <FormattedMessage {...messages.WebinarsList} />
            </h4>
            <div className="courses_list">
              {webinarsList.map(item => (
                <div className="single_course" key={item.data.id}>
                  <div className="course_img">
                    <img src={item.eventImage} alt="Course" />
                  </div>
                  <div className="course_info">
                    <h5>{item.data.mainTitle}</h5>
                    <div className="course_short_info">
                      <div className="course_desc">
                        <p>{item.data.subTitle}</p>
                        {/* <div className="course_provider">
                          {item.providedby}
                          &nbsp;
                          <span className="provider">{item.providername}</span>
                        </div> */}
                      </div>
                      <div className="course_price">
                        <h5>${item.data.price}</h5>
                        <del>${item.data.price}</del>
                      </div>
                    </div>
                    <div className="course_outcomes">
                      <div className="outcomes">
                        <div className="time">
                          <div className="timing">
                            <BiTimeFive />
                            <p>Timing</p>
                          </div>
                          <div className="from-to">
                            {item.data.startTime} - {item.data.endTime}
                          </div>
                        </div>
                        <div className="date">
                          <BiCalendar />
                          {item.data.startDate}
                        </div>
                        <div className="viewer">
                          <HiUsers />
                          {20}
                          &nbsp;
                          <FormattedMessage {...messages.Attendees} />
                        </div>
                      </div>
                      <div className="like_enroll">
                        <Button>
                          <AiOutlineHeart />
                          {/* <AiFillHeart /> */}
                        </Button>
                        <Button>
                          <FormattedMessage {...messages.JoinUs} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>}
    </Wrapper>
  );
}

export default WebinarsList;
