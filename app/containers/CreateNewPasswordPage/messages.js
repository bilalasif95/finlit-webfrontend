/*
 * Create New Password Page Messages
 *
 * This contains all the text for the Create New Password Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.CreateNewPasswordPage';

export default defineMessages({
  CreateNewPassword: {
    id: `${scope}.CreateNewPassword`,
    defaultMessage: 'Create New Password',
  },
  NewPassword: {
    id: `${scope}.NewPassword`,
    defaultMessage: 'New Password',
  },
  ConfirmPassword: {
    id: `${scope}.ConfirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  PasswordMatch: {
    id: `${scope}.PasswordMatch`,
    defaultMessage: 'Both password must match',
  },
  ResetPassword: {
    id: `${scope}.ResetPassword`,
    defaultMessage: `Reset Password`,
  },
});
