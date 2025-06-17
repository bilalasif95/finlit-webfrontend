/*
 * Signin Page Messages
 *
 * This contains all the text for the Signin Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SigninPage';

export default defineMessages({
  TwoFA: {
    id: `${scope}.TwoFA`,
    defaultMessage: '2FA Verification',
  },
  Code: {
    id: `${scope}.Code`,
    defaultMessage: 'Code',
  },
  Verify: {
    id: `${scope}.Verify`,
    defaultMessage: 'Verify',
  },
});
