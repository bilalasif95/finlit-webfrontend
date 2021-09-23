/*
 * My Profile Page Messages
 *
 * This contains all the text for the My Profile Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.MyProfilesPage';

export default defineMessages({
  ChangeProfile: {
    id: `${scope}.ChangeProfile`,
    defaultMessage: 'Change Profile',
  },
  EditProfile: {
    id: `${scope}.EditProfile`,
    defaultMessage: 'Edit Profile',
  },
  ChangePassword: {
    id: `${scope}.ChangePassword`,
    defaultMessage: 'Change Password',
  },
  TwoFAuth: {
    id: `${scope}.TwoFA`,
    defaultMessage: '2FA Authentication',
  },
});
