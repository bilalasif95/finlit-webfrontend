/*
 * ForgotPassword Page Messages
 *
 * This contains all the text for the ForgotPassword Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ForgotPasswordPage';

export default defineMessages({
  ResetPassword: {
    id: `${scope}.ResetPassword`,
    defaultMessage: 'Reset Password',
  },
  ForgotPasswordLine: {
    id: `${scope}.ForgotPasswordLine`,
    defaultMessage: `Don't worry! Just fill in your email and we'll send you a link to reset your password`,
  },
  NewPassword: {
    id: `${scope}.NewPassword`,
    defaultMessage: 'New Password',
  },
  Password: {
    id: `${scope}.Password`,
    defaultMessage: 'Confirm Password',
  },
  EmailError: {
    id: `${scope}.EmailError`,
    defaultMessage: `
    Unable to reset password due to unkonown error. Please try again`,
  },
  ResetPassword: {
    id: `${scope}.ResetPassword`,
    defaultMessage: `Reset Password`,
  },
  BackLogin: {
    id: `${scope}.BackLogin`,
    defaultMessage: `Back to Login`,
  },
});
