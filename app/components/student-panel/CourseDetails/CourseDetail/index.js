/*
 * Cart Checkout Description Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
// import PropTypes from 'prop-types';
import { BiCheck } from 'react-icons/bi';
import { IoMdShare } from 'react-icons/io';
import { BsDot, BsPerson } from 'react-icons/bs';
// , BsChatLeftText, BsCardList
import { FaRegHeart } from 'react-icons/fa';
import { RiStarSFill, RiArrowDownSLine } from 'react-icons/ri';
import { TiLockClosed } from 'react-icons/ti';
import { GrCirclePlay } from 'react-icons/gr';
// import { MdOutlineRateReview } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';
// import moment from 'moment';
// import JoditEditor from 'jodit-react';
import { Player } from 'video-react';
import classnames from 'classnames';
import { useCopyAddress } from '../../../../config/copyAddress';
import 'react-accessible-accordion/dist/fancy-example.css';
import messages from './messages';
import Wrapper from './Wrapper';
import coursedummy from '../../../../images/coursedummy.png';
// import MoreCourses from '../../MoreCourses';
import './videoplayer.css';
import Pinterest from '../../../../images/pinterest.png';
import Twitter from '../../../../images/twitter.png';
import Instagram from '../../../../images/instagram.png';
import Facebook from '../../../../images/facebook.png';
import LinkedIn from '../../../../images/linkedIN.png';
import Ticon from '../../../../images/tIcon.png';

function CourseDetail() {
  // const editor = useRef(null);
  // const config = {
  //   readonly: true,
  // };
  // const {className} = props;
  const [modal, setModal] = useState(false);
  const [sharemodal, setShareModal] = useState(false);
  const toggle = () => setModal(!modal);
  const toggleShare = () => setShareModal(!sharemodal);
  const [activeTab, setActiveTab] = useState('1');
  const [copyText, CopyContactAddress] = useCopyAddress();

  const [accordinOne, setAccordinOne] = useState(true);
  const [accordinTwo, setAccordinTwo] = useState(false);
  const [accordinThree, setAccordinThree] = useState(false);
  const [accordinFour, setAccordinFour] = useState(false);
  const [accordinFive, setAccordinFive] = useState(false);

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  // const { detail } = props;
  // const dataDetails = detail.data;

  const openAccordinOne = () => {
    setAccordinOne(true);
    setAccordinTwo(false);
    setAccordinThree(false);
    setAccordinFour(false);
    setAccordinFive(false);
  };

  const openAccordinTwo = () => {
    setAccordinOne(false);
    setAccordinTwo(true);
    setAccordinThree(false);
    setAccordinFour(false);
    setAccordinFive(false);
  };

  const openAccordinThree = () => {
    setAccordinOne(false);
    setAccordinTwo(false);
    setAccordinThree(true);
    setAccordinFour(false);
    setAccordinFive(false);
  };

  const openAccordinFour = () => {
    setAccordinOne(false);
    setAccordinTwo(false);
    setAccordinThree(false);
    setAccordinFour(true);
    setAccordinFive(false);
  };

  const openAccordinFive = () => {
    setAccordinOne(false);
    setAccordinTwo(false);
    setAccordinThree(false);
    setAccordinFour(false);
    setAccordinFive(true);
  };

  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        <div className="breadcrumb_bar">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/">Courses</Link>
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
            <Button onClick={toggleShare}>
              <IoMdShare />
              <FormattedMessage {...messages.Share} />
            </Button>
          </div>
        </div>
        <div className="main_img">
          {/* <img src={detail.eventImage} alt="main" height="100%" width="100%" /> */}
          {/* <img src={coursedummy} alt="main" height="100%" width="100%" /> */}
          <Player
            // playsInline
            fluid
            height="100%"
            width="100%"
            poster={coursedummy}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <div className="tabs_cont">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggleTab('1');
                }}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggleTab('2');
                }}
              >
                Course Content
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggleTab('3');
                }}
              >
                Instructor
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => {
                  toggleTab('4');
                }}
              >
                Reviews
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => {
                  toggleTab('5');
                }}
              >
                Certificate
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="content_in">
                <h4>What you&apos;ll learn</h4>
                <ul>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                </ul>
              </div>
              <div className="content_in">
                <h4>Requirements</h4>
                <ul>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    <BiCheck />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
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
                <div className="custom_accordin">
                  <div className="accordin_item">
                    <Button
                      className={
                        accordinOne
                          ? 'active accordin_header'
                          : 'accordin_header'
                      }
                      onClick={openAccordinOne}
                    >
                      Getting started
                      <div className="accordin_icon">
                        <RiArrowDownSLine />
                      </div>
                    </Button>
                    {accordinOne && (
                      <div className="accordin_content">
                        <div className="section_in">
                          <div className="item">
                            <div className="left">
                              <Button>
                                <GrCirclePlay />
                                Reference site about Lorem Ipsum, giving
                                information on its origins
                              </Button>
                            </div>
                            <div className="right">
                              <TiLockClosed />
                            </div>
                          </div>
                          <div className="item">
                            <div className="left">
                              <Button>
                                <GrCirclePlay />
                                Giving information on its origins
                              </Button>
                            </div>
                            <div className="right">
                              <TiLockClosed />
                            </div>
                          </div>
                          <div className="item">
                            <div className="left">
                              <Button>
                                <GrCirclePlay />
                                As well as a random Lipsum generator.
                              </Button>
                            </div>
                            <div className="right">
                              <TiLockClosed />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="accordin_item">
                    <Button
                      className={
                        accordinTwo
                          ? 'active accordin_header'
                          : 'accordin_header'
                      }
                      onClick={openAccordinTwo}
                    >
                      Lesson 2
                      <div className="accordin_icon">
                        <RiArrowDownSLine />
                      </div>
                    </Button>
                    {accordinTwo && (
                      <div className="accordin_content">
                        <div className="section_in">
                          <div className="item">
                            <div className="left">
                              <Button>
                                <GrCirclePlay />
                                Introduction Copy
                              </Button>
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
                      </div>
                    )}
                  </div>
                  <div className="accordin_item">
                    <Button
                      className={
                        accordinThree
                          ? 'active accordin_header'
                          : 'accordin_header'
                      }
                      onClick={openAccordinThree}
                    >
                      Lesson 3
                      <div className="accordin_icon">
                        <RiArrowDownSLine />
                      </div>
                    </Button>
                    {accordinThree && (
                      <div className="accordin_content">Lesson 3</div>
                    )}
                  </div>
                  <div className="accordin_item">
                    <Button
                      className={
                        accordinFour
                          ? 'active accordin_header'
                          : 'accordin_header'
                      }
                      onClick={openAccordinFour}
                    >
                      Lesson 4
                      <div className="accordin_icon">
                        <RiArrowDownSLine />
                      </div>
                    </Button>
                    {accordinFour && (
                      <div className="accordin_content"> Lesson 4</div>
                    )}
                  </div>
                  <div className="accordin_item">
                    <Button
                      className={
                        accordinFive
                          ? 'active accordin_header'
                          : 'accordin_header'
                      }
                      onClick={openAccordinFive}
                    >
                      Lesson 5
                      <div className="accordin_icon">
                        <RiArrowDownSLine />
                      </div>
                    </Button>
                    {accordinFive && (
                      <div className="accordin_content">Lesson 5</div>
                    )}
                  </div>
                </div>
              </div>
              {/* </div> */}
            </TabPane>
            <TabPane tabId="3">
              <div className="content_in">
                <div className="instructor_detail">
                  <div className="instructor_img">
                    <img
                      src="https://i.imgur.com/qUzPHy4.jpg"
                      alt="Instructor"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="instructor_desc">
                    <h4>Dr. Frank Oliver</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry`s standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry`s standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged.
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
                  <Button onClick={toggle}>Add Review</Button>
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
                    <p>
                      {' '}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
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
                    <p>
                      {' '}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
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
                    <p>
                      {' '}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="more_reviews">
                  <Button>More reviews</Button>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="5">
              <div className="content_in">
                <div className="certify_header">
                  <h4>About this course</h4>
                  {/* <Button onClick={toggle}>Add Review</Button> */}
                  <b>
                    Complete Programming with python: HandsOn Introduction for Beginners
                    </b>
                  <p>
                    Approved by <b>FinLit</b>
                    </p>
                </div>
                <div className="user_details">
                  <div className="item">
                    <div className="left">Student Name</div>
                    <div className="right">Chad Sanders</div>
                  </div>
                  <div className="item">
                    <div className="left">Completion Date</div>
                    <div className="right">12/02/2021</div>
                  </div>
                  <div className="item">
                    <div className="left">Language</div>
                    <div className="right">English</div>
                  </div>
                  <div className="item">
                    <div className="left">Skill Level</div>
                    <div className="right">Expert</div>
                  </div>
                  <div className="item">
                    <div className="left">Instructor</div>
                    <div className="right">Beatrice Ross</div>
                  </div>
                  <div className="item">
                    <div className="left">Description</div>
                    <div className="right">
                      Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                      Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                      Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </div>
                  </div>
                  <div className="item">
                    <div className="left">Certificate</div>
                    <div className="right">
                      Get FinLit certificate by completing entire course
                      <Button>Download Certificate</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
        {/* <MoreCourses /> */}
      </div>
      {/* Modal */}
      <div className="ratingModal">
        <Modal isOpen={modal} toggle={toggle} className="ratingModal">
          <ModalHeader toggle={toggle}>Do you like this course ?</ModalHeader>
          <ModalBody>
            <p>Please rate your experience</p>
            <div className="rating">
              <span>
                <RiStarSFill />
              </span>
              <span>
                <RiStarSFill />
              </span>
              <span>
                <RiStarSFill />
              </span>
              <span>
                <RiStarSFill />
              </span>
              <span>
                <RiStarSFill />
              </span>
            </div>
            <textarea
              placeholder="Write a review"
              rows="5"
              className="form-control"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      {/* Share Modal */}
      {/* Modal */}
      <div className="shareModal">
        <Modal
          isOpen={sharemodal}
          toggle={toggleShare}
          className="ShareModal ratingModal"
        >
          <ModalHeader toggle={toggleShare}>Share this course</ModalHeader>
          <ModalBody>
            <ul className="list-unstyled socialList">
              <li>
                <img src={Pinterest} alt="Pinterest" />
              </li>
              <li>
                <img src={Twitter} alt="Twitter" />
              </li>
              <li>
                <img src={Instagram} alt="Instagram" />
              </li>
              <li>
                <img src={Facebook} alt="Facebook" />
              </li>
              <li>
                <img src={LinkedIn} alt="LinkedIn" />
              </li>
              <li>
                <img src={Ticon} alt="Ticon" />
              </li>
            </ul>
            <div className="copyLink">
              <h5 className="mb-3">Or copy link</h5>
              <div className="copyInput">
                <input
                  type="text"
                  value={window.location.href}
                  readOnly
                  className="form-control"
                />
                <button
                  onClick={() => CopyContactAddress(window.location.href)}
                  type="button"
                  className="btn btn-default"
                >
                  {copyText === window.location.href ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </Wrapper>
  );
}

// CourseDetail.propTypes = {
//   detail: PropTypes.any,
// };
export default CourseDetail;
