/*
 * Courses List Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import { BiTimeFive } from 'react-icons/bi';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers, HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import classnames from 'classnames';
import messages from './messages';
import Wrapper from './Wrapper';
import reg from '../../../../images/reg.png';
import Cardimg from '../../../../images/CardImg.png';
import Cardimg2 from '../../../../images/CardImg2.png';
import Cardimg3 from '../../../../images/CardImg3.png';

function CoursesList() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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
  const Cardlist = [
    {
      id: 0,
      img: Cardimg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CardTitle} />,
      subtitle: <FormattedMessage {...messages.CardSubTitle} />,
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
      id: 0,
      img: Cardimg2,
      alt: 'Course',
      title: <FormattedMessage {...messages.CardTitle1} />,
      subtitle: <FormattedMessage {...messages.CardSubTitle} />,
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
      id: 0,
      img: Cardimg3,
      alt: 'Course',
      title: <FormattedMessage {...messages.CardTitle2} />,
      subtitle: <FormattedMessage {...messages.CardSubTitle} />,
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
      id: 0,
      img: Cardimg,
      alt: 'Course',
      title: <FormattedMessage {...messages.CardTitle3} />,
      subtitle: <FormattedMessage {...messages.CardSubTitle} />,
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
            <div className="title-header">
              <h4>
                <FormattedMessage {...messages.CoursesList} />
              </h4>
              <div className="tabs_cont">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => {
                        toggle('1');
                      }}
                    >
                      List
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => {
                        toggle('2');
                      }}
                    >
                      Cards
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            <div className="courses_list">
              <div className="tabs_cont">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
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
                                <span className="provider">
                                  {item.providername}
                                </span>
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
                                <HiOutlineHeart />
                                {/* <AiFillHeart /> */}
                              </Button>
                              <Button>{item.enrollnow}</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      {Cardlist.map(item => (
                        <Col lg={3}>
                          <div className="single_card">
                            <Card>
                              <CardImg
                                top
                                width="100%"
                                src={item.img}
                                alt="Card_image"
                              />
                              <CardBody>
                                <div className="like_enroll">
                                  <Button>
                                    <AiOutlineHeart />
                                  </Button>
                                </div>
                                <CardTitle tag="h5">{item.title}</CardTitle>
                                <CardSubtitle>{item.subtitle}</CardSubtitle>
                                <div className="rating-box">
                                  <div className="star">
                                    <RiStarSFill />
                                    <p>4.7</p>
                                  </div>
                                  <div className="star">
                                    <HiUsers />
                                    <p>682,292</p>
                                  </div>
                                  <div className="star">
                                    <BiTimeFive />
                                    <p>63 hours</p>
                                  </div>
                                </div>
                                <div className="CardFooter">
                                  <Button>Enroll Now</Button>
                                  <div className="price-box">
                                    <h4>$50.00</h4>
                                    <p>
                                      <del>$150.00</del>
                                    </p>
                                  </div>
                                </div>
                              </CardBody>
                            </Card>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
}

export default CoursesList;
