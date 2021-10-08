/*
 * Cart Checkout Sidebar Component
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import history from 'utils/history';
// import { GoDeviceCameraVideo } from 'react-icons/go';
// import { BiTimeFive } from 'react-icons/bi';
// import { MdDashboard } from 'react-icons/md';
// import { BsTagFill } from 'react-icons/bs';
// import { SiAirplayvideo } from 'react-icons/si';
import { RiStarSFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import Wrapper from './Wrapper';
import messages from './messages';
import { API } from '../../../../config/config';
import { axiosHeader } from '../../../../utils/axiosHeader';

function HackathonSidebar(props) {
  const [loader, setLoader] = useState(false);
  const { detail } = props;
  const dataDetails = detail.data;

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
          err.response && err.response.data.message
            ? err.response.data.message.toString()
            : 'Message Not Readable',
        );
      });
  };
  return (
    <Wrapper>
      <div className="top_detail">
        <div className="prices">
          <h4>${dataDetails && dataDetails.price}</h4>
          <del>${dataDetails && dataDetails.price}</del>
          {/* <span>|&nbsp;&nbsp;87% off</span> */}
        </div>
        <div className="rating">
          <p>4.7</p>
          <div className="stars">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </div>
          <p>(76,876 ratings)</p>
        </div>
        {/* <Link to="/" className="event_link">
          <FormattedMessage {...messages.AttendEvent} />
        </Link> */}
        <Button onClick={() => handleAddToCart()} disabled={loader}>
          {loader ? 'Loading...' : <FormattedMessage {...messages.AddtoCart} />}
        </Button>
      </div>
      <div className="details">
        <h4>
          <FormattedMessage {...messages.BootCampDetails} />
        </h4>
        <ul className="list">
          <li>
            <HiUsers />
            <p>1200 Attendees</p>
          </li>
          {/* <li>
            <BiTimeFive />
            <p>2 hours</p>
          </li>
          <li>
            <GoDeviceCameraVideo />
            <p>8 Lectures</p>
          </li>
          <li>
            <MdDashboard />
            <p>Development</p>
          </li>
          <li>
            <BsTagFill />
            <p>Android, JavaScript</p>
          </li>
          <li>
            <SiAirplayvideo />
            <p>English, French</p>
          </li> */}
        </ul>
        <FormGroup>
          <Input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter Coupon"
          />
          <Button>
            <FormattedMessage {...messages.Apply} />
          </Button>
        </FormGroup>
      </div>
      <ToastContainer />
    </Wrapper>
  );
}
HackathonSidebar.propTypes = {
  detail: PropTypes.any,
};
export default HackathonSidebar;
