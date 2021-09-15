import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wrapper from './Wrapper';
import messages from './messages';

function MyProfile() {
  return (
    <Wrapper>
      <h1>
        <FormattedMessage {...messages.MyProfile} />
      </h1>
    </Wrapper>
  );
}

export default MyProfile;
