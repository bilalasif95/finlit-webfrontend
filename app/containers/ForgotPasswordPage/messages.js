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
<<<<<<< HEAD
    defaultMessage: `Send Recovery Email`,
=======
    defaultMessage: `Send Recovery Link`,
>>>>>>> 15743cb66ea5a48caacaa11f1723d1679d8469c5
  },
});
