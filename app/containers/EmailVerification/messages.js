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
    defaultMessage: 'Email',
  },
  SelectType: {
    id: `${scope}.SelectType`,
    defaultMessage: 'Select Type',
  },
  SelectProfession: {
    id: `${scope}.SelectProfession`,
    defaultMessage: 'Select Profession',
  },
  SelectGender: {
    id: `${scope}.SelectGender`,
    defaultMessage: 'Select Gender',
  },
  SelectCountry: {
    id: `${scope}.SelectType`,
    defaultMessage: 'Select Country',
  },
  FName: {
    id: `${scope}.FName`,
    defaultMessage: 'First Name',
  },
  LName: {
    id: `${scope}.LName`,
    defaultMessage: 'Last Name',
  },
  CreatePassword: {
    id: `${scope}.CreatePassword`,
    defaultMessage: `Create Password`,
  },
  ConfirmPassword: {
    id: `${scope}.ConfirmPassword`,
    defaultMessage: `Confirm Password`,
  },
  Address: {
    id: `${scope}.Address`,
    defaultMessage: `Address`,
  },
  SignUp: {
    id: `${scope}.SignUp`,
    defaultMessage: 'Sign Up',
  },
  AlreadyHaveAccount: {
    id: `${scope}.AlreadyHaveAccount`,
    defaultMessage: `Already have account?`,
  },
  Login: {
    id: `${scope}.Login`,
    defaultMessage: 'Log In',
  },
});
