/*
 * EmailVerification Page Messages
 *
 * This contains all the text for the EmailVerification Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.VerifyEmailPage';

export default defineMessages({
  EmailTitle: {
    id: `${scope}.EmailTitle`,
    defaultMessage: 'Welcome to FinLit',
  },
  Emaildetail: {
    id: `${scope}.Emaildetail`,
    defaultMessage: `Confirmation email has been sent.
    Please verify your account`,
  },
});
