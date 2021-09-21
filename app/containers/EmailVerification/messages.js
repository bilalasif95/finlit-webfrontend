/*
 * Signin Page Messages
 *
 * This contains all the text for the Signin Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SigninPage';

export default defineMessages({
  EmailTitle: {
    id: `${scope}.EmailTitle`,
    defaultMessage: 'Your email has been verified',
  },
  Emaildetail: {
    id: `${scope}.Emaildetail`,
    defaultMessage: 'Your email has been verified successfully. Please login to continue.',
  },
});
