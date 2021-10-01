/*
 * Live Session List Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import { BiTimeFive, BiCalendar } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
// import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../../images/reg.png';

function LiveSessionList() {
  const LiveSessionLists = [
    {
      id: 0,
      img: reg,
      alt: 'LiveSession',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timing: <FormattedMessage {...messages.Timing} />,
      from: <FormattedMessage {...messages.From} />,
      to: <FormattedMessage {...messages.To} />,
      date: <FormattedMessage {...messages.Date} />,
      attendees: <FormattedMessage {...messages.Attendees} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      joinus: <FormattedMessage {...messages.JoinUs} />,
    },
  ];
  return (
    <Wrapper id="list">
      <div className="courses">
        <Row>
          <Col lg={12}>
            <h4>
              <FormattedMessage {...messages.LiveSessionList} />
            </h4>
            <div className="courses_list">
              {LiveSessionLists.map(item => (
                <div className="single_course" key={item.id}>
                  <div className="live_status">
                    <GoPrimitiveDot /> Live
                  </div>
                  <div className="course_img">
                    <img
                      src={item.img}
                      alt="Course"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="course_info">
                    <h5>{item.title}</h5>
                    <div className="course_short_info">
                      <div className="course_desc">
                        <p>{item.desc}</p>
                      </div>
                      <div className="course_price">
                        <h5>{item.newprice}</h5>
                        <del>{item.oldprice}</del>
                      </div>
                    </div>
                    <div className="course_outcomes">
                      <div className="outcomes">
                        <div className="time">
                          <div className="timing">
                            <BiTimeFive />
                            <p>{item.timing}</p>
                          </div>
                          <div className="from-to">
                            {item.from} - {item.to}
                          </div>
                        </div>
                        <div className="date">
                          <BiCalendar />
                          {item.date}
                        </div>
                        <div className="viewer">
                          <HiUsers />
                          {item.viewer}
                          &nbsp;
                          {item.attendees}
                        </div>
                      </div>
                      <div className="like_enroll">
                        <Button>
                          <AiOutlineHeart />
                          {/* <AiFillHeart /> */}
                        </Button>
                        <Button>{item.joinus}</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default LiveSessionList;
