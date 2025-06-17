/*
 * Navbar Messages
 *
 * This contains all the text for the Navbar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  MyDashboard: {
    id: `${scope}.MyDashboard`,
    defaultMessage: 'My Dashboard',
  },
  AccountSetting: {
    id: `${scope}.AccountSetting`,
    defaultMessage: 'Account Setting',
  },
  MyFavorite: {
    id: `${scope}.MyFavorite`,
    defaultMessage: 'My Favorite',
  },
  Notifications: {
    id: `${scope}.Notifications`,
    defaultMessage: 'Notifications',
  },
  Messages: {
    id: `${scope}.Messages`,
    defaultMessage: 'Messages',
  },
  Language: {
    id: `${scope}.Language`,
    defaultMessage: 'Language',
  },
  Help: {
    id: `${scope}.Help`,
    defaultMessage: 'Help',
  },
  LogOut: {
    id: `${scope}.LogOut`,
    defaultMessage: 'Log Out',
  },
});
