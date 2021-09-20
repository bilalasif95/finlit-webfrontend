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
  EmailAddress: {
    id: `${scope}.EmailAddress`,
    defaultMessage: 'Email Address',
  },
  SendRecoveryCode: {
    id: `${scope}.SendRecoveryCode`,
    defaultMessage: `Send Recovery Link`,
  },
});
