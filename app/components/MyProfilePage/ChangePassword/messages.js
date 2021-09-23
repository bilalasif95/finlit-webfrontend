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
    defaultMessage: 'Enter current password',
  },
  NewPassword: {
    id: `${scope}.NewPassword`,
    defaultMessage: 'Enter new password',
  },
  ConfirmPassword: {
    id: `${scope}.ConfirmPassword`,
    defaultMessage: 'Confirm new password',
  },
  Cancel: {
    id: `${scope}.Cancel`,
    defaultMessage: 'Cancel',
  },
  Save: {
    id: `${scope}.Save`,
    defaultMessage: 'Save',
  },
});
