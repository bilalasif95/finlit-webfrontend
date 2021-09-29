/*
 * Cart Checkout Description Component
 */
import React, {useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import { BiTimeFive, BiCalendar } from 'react-icons/bi';
import moment from 'moment';
import PropTypes from 'prop-types';
import JoditEditor from 'jodit-react';
import { IoMdShare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { Button } from 'reactstrap';
import messages from './messages';
import Wrapper from './Wrapper';

function BootcampDetail(props) {
  const editor = useRef(null);
  const config = {
    readonly: true,
  };
  // const [activeTab, setActiveTab] = useState('1');

  // const toggle = tab => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  const {detail} = props;
  const dataDetails = detail.data;

  return (
    <Wrapper id="list">
      <div className="addcart_detail">
        {/* <FormattedMessage {...messages.Subtotal} /> */}
        <div className="main_img">
          <img src={detail.eventImage} alt="main" />
        </div>
        <div className="header">
          <h4>
            {dataDetails && dataDetails.mainTitle}
          </h4>
          <div className="like_share">
            <Button>
              <FaRegHeart />
            </Button>
            <Button>
              <IoMdShare />
            </Button>
          </div>
        </div>
        <div className="date_location">
          <div className="item">
            <BiCalendar />{' '}
            <p>
              <FormattedMessage {...messages.Date} />
            </p>

            <p className="value">{moment(detail.updatedAt).format("MMM DD ,YYYY")}</p>
          </div>
          <div className="item time-item">
            <BiTimeFive />{' '}
            <p>
              <FormattedMessage {...messages.Time} />
            </p>
            <p className="value">{dataDetails && dataDetails.startTime} - {dataDetails && dataDetails.endTime}</p>
          </div>
        </div>
        <div className="requirement">
          {/* <h4>About the Bootcamp</h4> */}
          <p>
            <JoditEditor
              ref={editor}
              value={dataDetails && dataDetails.description}
              config={config}
              tabIndex={0} // tabIndex of textarea
            />
          </p>
        </div>
        {/* <div className="tabs_cont">
          <h4 className="shedule-head">Shedule</h4>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => {
                  toggle('1');
                }}
              >
                Monday
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggle('2');
                }}
              >
                Tuesday
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => {
                  toggle('3');
                }}
              >
                Wednesday
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => {
                  toggle('4');
                }}
              >
                Thursday
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '5' })}
                onClick={() => {
                  toggle('5');
                }}
              >
                Friday
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '6' })}
                onClick={() => {
                  toggle('6');
                }}
              >
                Saturday
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
            <TabPane tabId="3">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
            <TabPane tabId="4">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
            <TabPane tabId="5">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
            <TabPane tabId="6">
              <div className="weekdays">
                <p className="name">Orientation :</p>
                <p className="time">10:00 pm - 12:00 am</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture #1 :</p>
                <p className="time">12:00 pm - 01:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Lecture#2 :</p>
                <p className="time">02:00 pm - 04:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Brainstorming Excercises :</p>
                <p className="time">04:00 pm - 06:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Physical Exercises :</p>
                <p className="time">06:00 pm - 07:00 pm</p>
              </div>
              <div className="weekdays">
                <p className="name">Testing Period :</p>
                <p className="time">07:00 pm - 09:00 pm</p>
              </div>
            </TabPane>
          </TabContent>
        </div> */}
      </div>
    </Wrapper>
  );
}

BootcampDetail.propTypes = {
  detail: PropTypes.any,
};
export default BootcampDetail;
