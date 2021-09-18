import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Calendar from 'react-calendar';
import messages from './messages';
import Wrapper from './Wrapper';

function Events() {
  const [value, onChange] = useState(new Date());

  return (
    <Wrapper>
      <div className="calendar-cont">
        <h3>
          <FormattedMessage {...messages.Title} />
        </h3>
        <Calendar onChange={onChange} value={value} />
      </div>
    </Wrapper>
  );
}

export default Events;
