/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Input, Progress, Button, Label } from 'reactstrap';
// import axios from 'axios';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
// toast
import 'react-toastify/dist/ReactToastify.css';
// import history from 'utils/history';
// import { Link } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
// import { BsTagFill } from 'react-icons/bs';
// import { SiAirplayvideo } from 'react-icons/si';
import { FiCheck } from 'react-icons/fi';
import { GrCart, GrCirclePlay } from 'react-icons/gr';
// GrCertificate
import { HiUser, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { PieChart } from 'react-minimal-pie-chart';
import Wrapper from './Wrapper';
import messages from './messages';
// import { API } from '../../../../config/config';
// import { axiosHeader } from '../../../../utils/axiosHeader';

function CourseSidebar() {
  // const [loader, setLoader] = useState(false);
  const [checkedValue, setCheckedValue] = useState(false);
  const [quizStart, setQuizStart] = useState(true);
  const [questionOne, setQuestionOne] = useState(false);
  const [questionTwo, setQuestionTwo] = useState(false);
  const [questionThree, setQuestionThree] = useState(false);
  const [questionFour, setQuestionFour] = useState(false);
  // const { detail } = props;
  // const dataDetails = detail.data;
  // const handleQuizStart = () => {
  //   setQuestionOne(true);
  //   setQuestionOne(true);
  //   setQuestionTwo(false);
  //   setQuestionThree(false);
  //   setQuestionFour(false);
  // };
  const handleQuestionOne = () => {
    setQuizStart(false);
    setQuestionOne(true);
    setQuestionTwo(false);
    setQuestionThree(false);
    setQuestionFour(false);
  };
  const handleQuestionTwo = () => {
    setQuizStart(false);
    setQuestionOne(false);
    setQuestionTwo(true);
    setQuestionThree(false);
    setQuestionFour(false);
  };
  const handleQuestionThree = () => {
    setQuizStart(false);
    setQuestionOne(false);
    setQuestionTwo(false);
    setQuestionThree(true);
    setQuestionFour(false);
  }
  const handleQuestionFour = () => {
    setQuizStart(false);
    setQuestionOne(false);
    setQuestionTwo(false);
    setQuestionThree(false);
    setQuestionFour(true);
  }

  // const handleAddToCart = () => {
  //   setLoader(true);
  //   const data = {
  //     productType: detail.type,
  //     productId: detail.id,
  //     price: dataDetails && dataDetails.price,
  //   };

  //   axios
  //     .post(`${API}api/cart/addTocart`, data, axiosHeader)
  //     .then(() => {
  //       history.push('/cart');
  //       setLoader(false);
  //     })
  //     .catch(err => {
  //       setLoader(false);
  //       toast.error(
  //         err.response
  //           ? err.response && err.response.message
  //           : 'Message Not Readable',
  //       );
  //     });
  // };

  return (
    <Wrapper>
      <div className="sidebar">
        <div className="intro">
          <div className="top_detail">
            <div className="prices">
              {/* <h4>${dataDetails && dataDetails.price}</h4>
          <del>${dataDetails && dataDetails.price}</del> */}
              <h4>$44.99</h4>
              <div className="old_price">
                <del>$100</del>
                <span>50% off</span>
              </div>
            </div>
            {/* <div className="rating">
          <p>4.7</p>
          <div className="stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p>(76,876 ratings)</p>
        </div> */}
            {/* <Button onClick={() => handleAddToCart()} disabled={loader}>
          {loader ? 'Loading..' : <FormattedMessage {...messages.AddtoCart} />}
        </Button> */}
            <Button className="add_cart">
              <span className="icon">
                <GrCart />
              </span>
              <span className="text">
                <FormattedMessage {...messages.AddtoCart} />
              </span>
            </Button>
            {/* <div className="test">
          <button className="noselect"><span className="text">Delete</span></button>
        </div> */}
            <Button className="enroll_now">
              <span className="icon">
                <HiOutlineArrowNarrowRight />
              </span>
              <span className="text">
                <FormattedMessage {...messages.EnrollNow} />
              </span>
            </Button>
          </div>
          <div className="details">
            <h4>
              <FormattedMessage {...messages.Details} />
            </h4>
            <ul className="list">
              <li>
                <GrCirclePlay />
                <p>2 hours</p>
              </li>
              <li>
                <GoDeviceCameraVideo />
                <p>8 Lectures</p>
              </li>
              <li>
                <HiUser />
                <p>1200 Enroll</p>
              </li>
              <li>
                <BiTimeFive />
                <p>Full lifetime access</p>
              </li>
              <li>
                {/* <GrCertificate /> */}
                <FaAward />
                <p>Certificate of completion</p>
              </li>
            </ul>
            {/* <FormGroup>
          <Input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter Coupon"
          />
          <Button>
            <FormattedMessage {...messages.Apply} />
          </Button>
        </FormGroup> */}
          </div>
        </div>
        <div className="course_status">
          <div className="progress_chart">
            <div className="progress_time">
              <h4>Course Progress</h4>
              <p>Expend time 8.3hr</p>
            </div>
            <div className="chart">
              <div className="graph-box">
                <div className="PieChartCustom">
                  <div className="inner">
                    <div>
                      <span
                      // className={
                      //   Math.max(
                      //     data.voted_percentage,
                      //     data.not_voted_percentage,
                      //   ) === data.voted_percentage
                      //     ? 'green-text'
                      //     : 'mehroon-text'
                      // }
                      >
                        {/* {Math.max(
                          data.voted_percentage,
                          data.not_voted_percentage,
                        ).toFixed() + '%'} */}
                        100%
                      </span>
                      <br />
                      {/* {props.i18n.t('Most_Voted_On')} */}
                      Completed
                    </div>
                  </div>
                  <PieChart
                    lineWidth={20}
                    viewBoxSize={[100, 100]}
                    totalValue={100}
                    rounded
                    background="#f8f9fb"
                    startAngle={270}
                    data={[
                      {
                        // title: props.i18n.t('Voted'),
                        value: 54,
                        color: '#f59d07',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="progress_session">
            <div className="session">
              <p>Session 1 progress</p>
              <p>50/100</p>
            </div>
            <div className="progress_bar">
              <Progress value={50} />
            </div>
          </div>
          <div className="quiz">
            <div className="inner_box">
              <div className="title">
                <h6>Quiz 1</h6>
                <h6>Question 01/05</h6>
              </div>
              {quizStart && (
                <div className="quiz_box">
                  <div className="quiz_start">
                    <Button onClick={handleQuestionOne}>Start</Button>
                  </div>
                </div>
              )}
              {questionOne && (
                <div className="quiz_box">
                  <h6>The acronym PC stands for?</h6>
                  <ul>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio1' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio1"
                            value="radio1"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>1</span>
                            <FiCheck />
                          </div> */}
                          <p>Private Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio2' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio2"
                            value="radio2"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>2</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio3' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio3"
                            value="radio3"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>3</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Compact</p>
                        </Label>
                      </FormGroup>
                    </li>
                  </ul>
                  <div className="quiz_step">
                    <span />
                    <Button className="btn_next" onClick={handleQuestionTwo}>
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {questionTwo && (
                <div className="quiz_box">
                  <h6>The acronym PC stands?</h6>
                  <ul>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio1' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio1"
                            value="radio1"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>1</span>
                            <FiCheck />
                          </div> */}
                          <p>Private </p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio2' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio2"
                            value="radio2"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>2</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio3' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio3"
                            value="radio3"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>3</span>
                            <FiCheck />
                          </div> */}
                          <p>Compact</p>
                        </Label>
                      </FormGroup>
                    </li>
                  </ul>
                  <div className="quiz_step">
                    <Button className="btn_prev" onClick={handleQuestionOne}>
                      Previous
                    </Button>
                    <Button className="btn_next" onClick={handleQuestionThree}>
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {questionThree && (
                <div className="quiz_box">
                  <h6>The acronym PC stands for?</h6>
                  <ul>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio1' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio1"
                            value="radio1"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>1</span>
                            <FiCheck />
                          </div> */}
                          <p>Private Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio2' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio2"
                            value="radio2"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>2</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio3' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio3"
                            value="radio3"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>3</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Compact</p>
                        </Label>
                      </FormGroup>
                    </li>
                  </ul>
                  <div className="quiz_step">
                    <Button className="btn_prev" onClick={handleQuestionTwo}>
                      Previous
                    </Button>
                    <Button className="btn_next" onClick={handleQuestionFour}>
                      Next
                    </Button>
                  </div>
                </div>
              )}
              {questionFour && (
                <div className="quiz_box">
                  <h6>The acronym PC stands for?</h6>
                  <ul>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio1' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio1"
                            value="radio1"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>1</span>
                            <FiCheck />
                          </div> */}
                          <p>Private Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio2' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio2"
                            value="radio2"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>2</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Computer</p>
                        </Label>
                      </FormGroup>
                    </li>
                    <li>
                      <FormGroup check>
                        <Label
                          check
                        // className={
                        //   checkedValue === 'radio3' ? 'radio_bg' : ''
                        // }
                        >
                          <Input
                            type="radio"
                            name="radio3"
                            value="radio3"
                            onChange={e => setCheckedValue(e.target.value)}
                          />{' '}
                          {/* <div className="check_mark">
                            <span>3</span>
                            <FiCheck />
                          </div> */}
                          <p>Personal Compact</p>
                        </Label>
                      </FormGroup>
                    </li>
                  </ul>
                  <div className="quiz_step">
                    <Button className="btn_prev" onClick={handleQuestionThree}>
                      Previous
                    </Button>
                    <Button className="btn_next">
                      {/* onClick={handleSeeResult} */}
                      See Result
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
}
// CourseSidebar.propTypes = {
//   detail: PropTypes.any,
// };
export default CourseSidebar;
