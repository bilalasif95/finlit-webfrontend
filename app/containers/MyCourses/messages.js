/*
 * My Profile Page Messages
 *
 * This contains all the text for the My Profile Page.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.MyProfilesPage';

export default defineMessages({
  Published: {
    id: `${scope}.Published`,
    defaultMessage: 'Published',
  },
  Pending: {
    id: `${scope}.Pending`,
    defaultMessage: 'Pending',
  },
  AddTag: {
    id: `${scope}.AddTag`,
    defaultMessage: `Tags`,
  },
  Expired: {
    id: `${scope}.Expired`,
    defaultMessage: 'Expired',
  },
  Draft: {
    id: `${scope}.Draft`,
    defaultMessage: 'Draft',
  },
});
