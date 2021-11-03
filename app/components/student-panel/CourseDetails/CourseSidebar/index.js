/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Input, Progress, Button, Label } from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from 'utils/history';
import { Link } from 'react-router-dom';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { BsTagFill } from 'react-icons/bs';
import { SiAirplayvideo } from 'react-icons/si';
import { RiStarSFill } from 'react-icons/ri';
import { GrCart, GrCirclePlay, GrCertificate } from 'react-icons/gr';
import { HiUser, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Wrapper from './Wrapper';
import messages from './messages';
import { API } from '../../../../config/config';
import { axiosHeader } from '../../../../utils/axiosHeader';

function CourseSidebar(props) {
  const [loader, setLoader] = useState(false);
  // const { detail } = props;
  // const dataDetails = detail.data;

  const handleAddToCart = () => {
    setLoader(true);
    const data = {
      productType: detail.type,
      productId: detail.id,
      price: dataDetails && dataDetails.price,
    };

    axios
      .post(`${API}api/cart/addTocart`, data, axiosHeader)
      .then(() => {
        history.push('/cart');
        setLoader(false);
      })
      .catch(err => {
        setLoader(false);
        toast.error(
          err.response
            ? err.response && err.response.message
            : 'Message Not Readable',
        );
      });
  };

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
              <span className="icon"><GrCart /></span>
              <span className="text">
                <FormattedMessage {...messages.AddtoCart} />
              </span>
            </Button>
            {/* <div className="test">
          <button className="noselect"><span className="text">Delete</span></button>
        </div> */}
            <Button className="enroll_now">
              <span className="icon"><HiOutlineArrowNarrowRight /></span>
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
              <img src="https://cdn.discordapp.com/attachments/548125906472796170/905387362706681866/unknown.png" alt="chart" height="100%" width="100%" />
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
                <h4>Quiz 1</h4>
                </div>
                <div classname="quiz_box">
                  <h6>The acronym PC stands for?</h6>
                  <ul>
                    <li>
                      <Label>
                        <Input type="radio" />
                        
                      </Label>
                    </li>
                  </ul>
                  </div>
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
