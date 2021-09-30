/*
 * Webinars List Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
// import { Link } from 'react-router-dom';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../images/reg.png';

function BootcampList() {
  const BootcampLists = [
    {
      id: 0,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
    {
      id: 1,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
    {
      id: 2,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
    {
      id: 3,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
    {
      id: 4,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
    {
      id: 5,
      img: reg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CourseTitle} />,
      desc: <FormattedMessage {...messages.CourseShortDesc} />,
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      timings: <FormattedMessage {...messages.Timings} />,
      time: <FormattedMessage {...messages.Hours} />,
      userNumbers: <FormattedMessage {...messages.UserNumbers} />,
      date: <FormattedMessage {...messages.Date} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
  ];
  return (
    <Wrapper>
      <div className="courses_list">
        {BootcampLists.map(item => (
          <div className="single_course" key={item.id}>
            <div className="course_img">
              <img src={item.img} alt="Course" height="100%" width="100%" />
            </div>
            <div className="course_info">
              <div className="course_short_info">
                <div className="course_desc">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  {/* <div className="course_provider">
                    {item.createdby}
                    &nbsp;
                    <span className="provider">{item.creatorname}</span>
                  </div> */}
                </div>
                <div className="course_price">
                  <h5>{item.newprice}</h5>
                  <del>{item.oldprice}</del>
                </div>
              </div>
              <div className="course_outcomes">
                <div className="date_time">
                  <div className="time-box">
                    <BiTimeFive />
                    <div className="time-text">{item.timings}</div>
                    &nbsp;
                    <div className="hours">{item.time}</div>
                  </div>

                  <div className="date_level">
                    <p>
                      <AiOutlineCalendar />
                      {item.date}
                    </p>
                  </div>
                  <div className="date_level">
                    <p>
                      <HiUsers />
                      {item.userNumbers}
                    </p>
                  </div>
                </div>
                {/* <div className="rating">
                  {item.rating}
                  <div className="stars">
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                </div> */}
                {/* <div className="viewer">
                  <HiUsers />
                  {item.viewer}
                </div> */}
              </div>
            </div>
            <div className="actions_btn">
              <Button>
                <GrFormEdit />
              </Button>
              <Button>
                <AiOutlineDelete />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="form_footer">
        <div className="bottom_btns">
          <Button className="btn_save">
            <FormattedMessage {...messages.Previous} />
          </Button>
          <Button className="btn_submit">
            <FormattedMessage {...messages.Next} />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default BootcampList;
