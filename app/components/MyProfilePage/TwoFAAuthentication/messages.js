/*
 * Webinars Filters Messages
 *
 * This contains all the text for the Webinars Filters component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.WebinarsFilters';

export default defineMessages({
  SecurityVerification: {
    id: `${scope}.SecurityVerification`,
    defaultMessage: 'Security Verification',
  },
  Cancel: {
    id: `${scope}.Cancel`,
    defaultMessage: 'Cancel',
  },
  Continue: {
    id: `${scope}.Continue`,
    defaultMessage: 'Continue',
  },
  DownloadGA: {
    id: `${scope}.DownloadGA`,
    defaultMessage: 'Download & install the Authenticator app',
  },
  ScanQR: {
    id: `${scope}.ScanQR`,
    defaultMessage: 'Scan this QR in the Authenticator App',
  },
  EnableAuth: {
    id: `${scope}.EnableAuth`,
    defaultMessage: 'Enable Authenticator by verifying your account',
  },
  DisableAuth: {
    id: `${scope}.DisableAuth`,
    defaultMessage: 'Disable Authenticator by verifying your account',
  },
  AuthenticatorCode: {
    id: `${scope}.AuthenticatorCode`,
    defaultMessage: 'Authenticator Code',
  },
  ThankYou: {
    id: `${scope}.ThankYou`,
    defaultMessage: 'Thankyou!',
  },
});
