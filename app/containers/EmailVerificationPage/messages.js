/*
 * EmailVerification Page Messages
 *
 * This contains all the text for the EmailVerification Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.EmailVerificationPage';

export default defineMessages({
  EmailTitle: {
    id: `${scope}.EmailTitle`,
    defaultMessage: 'Welcome to FinLit',
  },
  Emaildetail: {
    id: `${scope}.Emaildetail`,
    defaultMessage: `Your email has been verified.
    Please log into your account`,
  },
});
