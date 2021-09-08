/*
 * Signin Page Messages
 *
 * This contains all the text for the Signin Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SigninPage';

export default defineMessages({
  CreateAnAccount: {
    id: `${scope}.CreateAnAccount`,
    defaultMessage: 'Create an account',
  },
  EmailAddress: {
    id: `${scope}.EmailAddress`,
    defaultMessage: 'Email Address',
  },
  SelectType: {
    id: `${scope}.SelectType`,
    defaultMessage: 'Select Type',
  },
  YourName: {
    id: `${scope}.YourName`,
    defaultMessage: 'Your Name',
  },
  CreatePassword: {
    id: `${scope}.CreatePassword`,
    defaultMessage: `Create Password`,
  },
  ConfirmPassword: {
    id: `${scope}.ConfirmPassword`,
    defaultMessage: `Confirm Password`,
  },
  SignUp: {
    id: `${scope}.SignUp`,
    defaultMessage: 'Sign up',
  },
  AlreadyHaveAccount: {
    id: `${scope}.AlreadyHaveAccount`,
    defaultMessage: `Already have account?`,
  },
  Login: {
    id: `${scope}.Login`,
    defaultMessage: 'Log in',
  },
});
