/*
 * Courses List Component
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrFormEdit } from 'react-icons/gr';
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
      createdby: <FormattedMessage {...messages.CreatedBy} />,
      creatorname: <FormattedMessage {...messages.CreatorName} />,
      newprice: <FormattedMessage {...messages.NewPrice} />,
      oldprice: <FormattedMessage {...messages.OldPrice} />,
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
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
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
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
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
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
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
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
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
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
      time: <FormattedMessage {...messages.Hours} />,
      updatedat: <FormattedMessage {...messages.UpdatedDate} />,
      level: <FormattedMessage {...messages.Level} />,
      rating: <FormattedMessage {...messages.Rating} />,
      viewer: <FormattedMessage {...messages.Viewer} />,
    },
  ];
  return (
    <Wrapper>
      <div className="courses_list">
        {CoursesLists.map(item => (
          <div className="single_course" key={item.id}>
            <div className="course_img">
              <img src={item.img} alt="Course" />
            </div>
            <div className="course_info">
              <div className="course_short_info">
                <div className="course_desc">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                  <div className="course_provider">
                    {item.createdby}
                    &nbsp;
                    <span className="provider">{item.creatorname}</span>
                  </div>
                </div>
                <div className="course_price">
                  <h5>{item.newprice}</h5>
                  <del>{item.oldprice}</del>
                </div>
              </div>
              <div className="course_outcomes">
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

export default CoursesList;
