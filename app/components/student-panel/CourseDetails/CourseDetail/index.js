/*
 * Cart Checkout Description Component
 */
import React, { useState, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { BiCheck } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { BsDot, BsPerson, BsChatLeftText, BsCardList } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { RiStarSFill } from 'react-icons/ri';
import { TiLockClosed } from 'react-icons/ti';
import { GrCirclePlay } from 'react-icons/gr';
// import { MdOutlineRateReview } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, Button, Progress } from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import moment from 'moment';
import JoditEditor from 'jodit-react';
import { Player } from 'video-react';
import classnames from 'classnames';
import 'react-accessible-accordion/dist/fancy-example.css';
import messages from './messages';
import Wrapper from './Wrapper';
import coursedummy from './../../../../images/coursedummy.png';

function CourseDetail(props) {
  const editor = useRef(null);
  const config = {
    readonly: true,
  };
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  // const { detail } = props;
  // const dataDetails = detail.data;

  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        <div className="breadcrumb_bar">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/">
                Courses
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              Programming with Python: HandsOn Introduction for Beginners
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        {/* <FormattedMessage {...messages.Subtotal} /> */}
        <div className="header">
          {/* <h4>{dataDetails && dataDetails.mainTitle}</h4> */}
          <h3>Programming with Python: HandsOn Introduction for Beginners</h3>
        </div>
        <div className="cat_rating">
          <div className="cat_type">
            <p>Programming Language</p>
          </div>
          <div className="rating">
            5.0
            <div className="stars">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
        </div>
        <div className="date_sharing">
          <div className="updates">
            <div className="item">
              {/* <BiCalendar />{' '} */}
              <p>
                <FormattedMessage {...messages.LastUpdate} />
              </p>
              <p className="value">
                October 2021
                {/* {moment(detail.updatedAt).format('MMM DD ,YYYY')} */}
              </p>
            </div>
            <div className="item">
              {/* <GrLocation /> */}
              <p>
                <FormattedMessage {...messages.Level} />{' '}
              </p>
              <p className="value">Advance</p>
            </div>
            <div className="item">
              {/* <GrLocation /> */}
              <p>
                <FormattedMessage {...messages.Language} />{' '}
              </p>
              <p className="value">English</p>
            </div>
          </div>
          <div className="like_share">
            <Button>
              <FaRegHeart />
              <FormattedMessage {...messages.Wishlist} />
            </Button>
            <Button>
              <IoMdShare />
              <FormattedMessage {...messages.Share} />
            </Button>
          </div>
        </div>
        <div className="main_img">
          {/* <img src={detail.eventImage} alt="main" height="100%" width="100%" /> */}
          <img src={coursedummy} alt="main" height="100%" width="100%" />
        git  */}
        </div>
        <div className="tabs_cont">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Course Content
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                Instructor
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => {
                  toggle('4');
                }}
              >
                Reviews
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="content_in">
                <h4>Overview</h4>
                {/* <p>
                <JoditEditor
                  ref={editor}
                  value={dataDetails && dataDetails.description}
                  config={config}
                  tabIndex={0} // tabIndex of textarea
                />
              </p> */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="content_in">
                <h4>What you'll learn</h4>
                <ul>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                </ul>
              </div>
              <div className="content_in">
                <h4>Requirements</h4>
                <ul>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </li>
                </ul>
              </div>
              <div className="content_in">
                <h4>Tags</h4>
                <ul className="tags_list">
                  <li>Programming Language</li>
                  <li>Data Cleaning</li>
                  <li>Data Analysis</li>
                  <li>SQL</li>
                  <li>Questioning</li>
                  <li>Decision-Making</li>
                </ul>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="course_content">
                <h4>Course Content</h4>
                <div className="short_info">
                  <p>05 Sections</p>
                  <BsDot />
                  <p>25 Lectures</p>
                  <BsDot />
                  <p>44h 29m total length</p>
                </div>
                <Accordion>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading className="headingBtn">
                      <AccordionItemButton>
                        Getting started
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="section_in">
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Introduction Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Interactive lesson Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Lesson 1.1 Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Lesson 2
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="section_in">
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Introduction Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Interactive lesson Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Lesson 1.1 Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Lesson 3
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="section_in">
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Introduction Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Interactive lesson Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Lesson 1.1 Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Lesson 4
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="section_in">
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Introduction Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Interactive lesson Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Lesson 1.1 Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Lesson 5
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="section_in">
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Introduction Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Interactive lesson Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                        <div className="item">
                          <div className="left">
                            <GrCirclePlay />
                            Lesson 1.1 Copy
                          </div>
                          <div className="right">
                            <TiLockClosed />
                          </div>
                        </div>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* </div> */}
            </TabPane>
            <TabPane tabId="3">
              <div className="content_in">
                <div className="instructor_detail">
                  <div className="instructor_img">
                    <img src="https://i.imgur.com/qUzPHy4.jpg" alt="Instructor" height="100%" width="100%" />
                  </div>
                  <div className="instructor_desc">
                    <h4>Dr. Frank Oliver</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </p>
                <ul className="features">
                  <li>
                    <RiStarSFill />
                    4.5 Instructor Rating
                  </li>
                  <li>
                    <BsPerson />
                    1917 Students
                  </li>
                  <li>
                    <RiStarSFill />
                    {/* <BsChatLeftText /> */}
                    522 Reviews
                  </li>
                  <li>
                    <RiStarSFill />
                    {/* <BsCardList /> */}
                    12 Courses
                  </li>
                </ul>
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="content_in">
                <div className="reviews_header">
                  <h4>Reviews</h4>
                  <Button>Add Review</Button>
                  <p>Our students says about this course</p>
                </div>
                <div className="rating_status">
                  <div className="rating_star">
                    <h4>5</h4>
                    <div className="star">
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                      <RiStarSFill />
                    </div>
                    <p>12 Reviews</p>
                  </div>
                  <div className="status">
                    <div className="item">
                      <p>Excellent</p>
                      <Progress value={100} />
                      <p>100%</p>
                    </div>
                    <div className="item">
                      <p>Very Good</p>
                      <Progress value={20} />
                      <p>20%</p>
                    </div>
                    <div className="item">
                      <p>Average</p>
                      <Progress value={10} />
                      <p>10%</p>
                    </div>
                    <div className="item">
                      <p>Poor</p>
                      <Progress value={5} />
                      <p>5%</p>
                    </div>
                    <div className="item">
                      <p>Terrible</p>
                      <Progress value={0} />
                      <p>0%</p>
                    </div>
                  </div>
                </div>
                <div className="user_reviews">
                  <div className="single_review">
                    <div className="user_info">
                      <div className="user_img">
                        <img src="https://i.imgur.com/qUzPHy4.jpg" alt="User" />
                      </div>
                      <div className="user_desc">
                        <div className="name_date">
                          <h6>Kelly Young</h6>
                          <p>Sep 2, 2021</p>
                        </div>
                        <div className="star">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </div>
                      </div>
                    </div>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="single_review">
                    <div className="user_info">
                      <div className="user_img">
                        <img src="https://i.imgur.com/qUzPHy4.jpg" alt="User" />
                      </div>
                      <div className="user_desc">
                        <div className="name_date">
                          <h6>Kelly Young</h6>
                          <p>Sep 2, 2021</p>
                        </div>
                        <div className="star">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </div>
                      </div>
                    </div>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <div className="single_review">
                    <div className="user_info">
                      <div className="user_img">
                        <img src="https://i.imgur.com/qUzPHy4.jpg" alt="User" />
                      </div>
                      <div className="user_desc">
                        <div className="name_date">
                          <h6>Kelly Young</h6>
                          <p>Sep 2, 2021</p>
                        </div>
                        <div className="star">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </div>
                      </div>
                    </div>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                </div>
                <div className="more_reviews">
                  <Button>More reviews</Button>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
        {/* <div className="requirement">
          <h4>Registration Requirements:</h4>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
        </div> */}
      </div>
    </Wrapper >
  );
}

// CourseDetail.propTypes = {
//   detail: PropTypes.any,
// };
export default CourseDetail;
