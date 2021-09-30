/*
 * BootCamp List Component
 */
import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import history from 'utils/history';
import { BiTimeFive, BiCalendar } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import { axiosHeader } from '../../../../utils/axiosHeader';
import { redirectToLogin } from '../../../../utils/redirectToLogin';
import messages from './messages';
import Wrapper from './Wrapper';
import { API } from '../../../../config/config';
import Loader from '../../../Loader';

function BootCampList() {
  const [bootcampList, setBootCampList] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getBootcampLists();
  }, []);

  useEffect(() => {
    redirectToLogin();
  }, []);

  const getBootcampLists = () => {
    setLoader(true);
    axios
      .get(`${API}api/events/getEventsByTypes?type=Bootcamp`, axiosHeader)
      .then(res => {
        setBootCampList(res && res.data && res.data.data);
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };
  const handleBootcampDetails = id => {
    history.push(`/bootcamp_details/${id}`);
  };
  return (
    <Wrapper id="list">
      {loader ? (
        <Loader />
      ) : (
        <div className="courses">
          <Row>
            <Col lg={12}>
              <h4>
                <FormattedMessage {...messages.BootCampList} />
              </h4>
              <div className="courses_list">
                {bootcampList.map(item => (
                  <div
                    role="button"
                    tabIndex={0}
                    className="single_course"
                    key={item.id}
                    onClick={() => handleBootcampDetails(item.id)}
                    onKeyDown={() => handleBootcampDetails(item.id)}
                  >
                    <div className="course_img">
                      <img src={item.eventImage} alt="event" height="100%" width="100%" />
                    </div>
                    <div className="course_info">
                      <h5>{item.data.mainTitle}</h5>
                      <div className="course_short_info">
                        <div className="course_desc">
                          <p>{item.data.subTitle}</p>
                          <div className="outcomes">
                            <div className="time">
                              <div className="timing">
                                <BiTimeFive />
                                <p>
                                  <FormattedMessage {...messages.Timings} />
                                </p>
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
        </div>
      )}
    </Wrapper>
  );
}

export default BootCampList;
