import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Calendar from 'react-calendar';
import messages from './messages';
import Wrapper from './Wrapper';

function Events() {
  const [value, onChange] = useState(new Date());

  return (
    <>
    {/* <Wrapper> */}
      {/* <div className="calendar-cont">
        <h3>
          <FormattedMessage {...messages.Title} />
        </h3>
        <div className="main">
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>

      <div className="Events-cont">
        <h3>
          <FormattedMessage {...messages.EventsTitle} />
        </h3>
        <p>Today 9 July 2021</p>
        <div className="Events-main">
          <p className="circle">
            10
          </p>
          <div className="textbox">
            <h5>Join Webinar</h5>
            <p>20 Persons Confirmation</p>
          </div>
          <p className="Time">12:00 pm</p>
        </div>
        <div className="Events-main">
          <p className="circle">
            21
          </p>
          <div className="textbox">
            <h5>Join Webinar</h5>
            <p>20 Persons Confirmation</p>
          </div>
          <p className="Time">12:00 pm</p>
        </div>
        <div className="Events-main">
          <p className="circle">
            25
          </p>
          <div className="textbox">
            <h5>Join Webinar</h5>
            <p>20 Persons Confirmation</p>
          </div>
          <p className="Time">12:00 pm</p>
        </div>


      </div> */}
    {/* </Wrapper> */}
    </>
  );
}

export default Events;
