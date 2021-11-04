/*
 * Webinars Filters Messages
 *
 * This contains all the text for the Webinars Filters component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.WebinarsFilters';

export default defineMessages({
  ChangePassword: {
    id: `${scope}.ChangePassword`,
    defaultMessage: 'Change Password',
  },
  YourCurrentPassword: {
    id: `${scope}.YourCurrentPassword`,
    defaultMessage: 'Current password',
  },
  NewPassword: {
    id: `${scope}.NewPassword`,
    defaultMessage: 'New password',
  },
  ConfirmPassword: {
    id: `${scope}.ConfirmPassword`,
    defaultMessage: 'Confirm password',
  },
  Cancel: {
    id: `${scope}.Cancel`,
    defaultMessage: 'Cancel',
  },
  Save: {
    id: `${scope}.Save`,
    defaultMessage: 'Update Password',
  },
});
