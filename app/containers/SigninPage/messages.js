/*
 * Signin Page Messages
 *
 * This contains all the text for the Signin Page component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.SigninPage';

export default defineMessages({
  WelcomeBack: {
    id: `${scope}.WelcomeBack`,
    defaultMessage: 'Welcome Back',
  },
  EmailAddress: {
    id: `${scope}.EmailAddress`,
    defaultMessage: 'Email Address',
  },
  Password: {
    id: `${scope}.Password`,
    defaultMessage: `Password`,
  },
  RememberMe: {
    id: `${scope}.RememberMe`,
    defaultMessage: 'Remember me',
  },
  ForgotPassword: {
    id: `${scope}.ForgotPassword`,
    defaultMessage: `Forgot Password?`,
  },
  Login: {
    id: `${scope}.Login`,
    defaultMessage: 'Log in',
  },
  DontHaveAccount: {
    id: `${scope}.DontHaveAccount`,
    defaultMessage: `Don't have account?`,
  },
  CreateAnAccount: {
    id: `${scope}.CreateAnAccount`,
    defaultMessage: 'Create an account',
  },
});
