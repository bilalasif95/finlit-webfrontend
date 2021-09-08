/*
 * Courses List Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../images/reg.png';

function CoursesList() {
  const CoursesLists = [
    {
      id: 0,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
    {
      id: 1,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
    {
      id: 2,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
    {
      id: 3,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
    {
      id: 4,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
    {
      id: 5,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      providedby: <FormattedMessage {...messages.ProvidedBy} />,
      providername: <FormattedMessage {...messages.ProviderName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
      enrollnow: <FormattedMessage {...messages.EnrollNow} />,
    },
  ];
  return (
    <Wrapper id="list">
      <div className="courses">
        <Row>
          <Col lg={12}>
            <h4>
              <FormattedMessage {...messages.CoursesList} />
            </h4>
            <div className="courses_list">
              {CoursesLists.map(item => (
                <div className="single_course" key={item.id}>
                  <div className="course_img">
                    <img src={item.img} alt="Course" />
                  </div>
                  <div className="course_info">
                    <h5>{item.title}</h5>
                    <div className="course_short_info">
                      <div className="course_desc">
                        <p>{item.desc}</p>
                        <div className="course_provider">
                          {item.providedby}
                          &nbsp;
                          <span className="provider">{item.providername}</span>
                        </div>
                      </div>
                      <div className="course_price">
                        <h5>{item.newprice}</h5>
                        <del>{item.oldprice}</del>
                      </div>
                    </div>
                    <div className="course_outcomes">
                      <div className="outcomes">
                        <div className="date_time">
                          <BiTimeFive />
                          <div className="hours">{item.time}</div>
                          <div className="date_level">
                            <p>
                              {item.updatedat}
                              &nbsp;
                              {item.level}
                            </p>
                          </div>
                        </div>
                        <div className="rating">
                          {item.rating}
                          <div className="stars">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                          </div>
                        </div>
                        <div className="viewer">
                          <HiUsers />
                          {item.viewer}
                        </div>
                      </div>
                      <div className="like_enroll">
                        <Button>
                          <AiOutlineHeart />
                          {/* <AiFillHeart /> */}
                        </Button>
                        <Button>{item.enrollnow}</Button>
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

export default CoursesList;
