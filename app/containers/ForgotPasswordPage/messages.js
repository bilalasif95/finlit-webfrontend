/*
 * ForgotPassword Page Messages
 *
 * This contains all the text for the ForgotPassword Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ForgotPasswordPage';

export default defineMessages({
  ForgotPassword: {
    id: `${scope}.ForgotPassword`,
    defaultMessage: 'Forgot Password',
  },
  ForgotPasswordLine: {
    id: `${scope}.ForgotPasswordLine`,
    defaultMessage: `Enter your email address & we'll send you a link to reset your password`,
  },
  EmailAddress: {
    id: `${scope}.EmailAddress`,
    defaultMessage: 'Email Address',
  },
  EmailError: {
    id: `${scope}.EmailError`,
    defaultMessage: `
    Unable to reset password due to unkonown error. Please try again`,
  },
  ResetPassword: {
    id: `${scope}.ResetPassword`,
    defaultMessage: `Send Link`,
  },
  BackLogin: {
    id: `${scope}.BackLogin`,
    defaultMessage: `Back to Login`,
  },
});
