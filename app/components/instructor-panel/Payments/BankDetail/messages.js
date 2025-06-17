/*
 * Bank Account Details Messages
 *
 * This contains all the text for the Bank Account Details component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CoursesList';

export default defineMessages({
  BankAccountDetail: {
    id: `${scope}.BankAccountDetail`,
    defaultMessage: 'Bank Account Details',
  },
  AccountHolderName: {
    id: `${scope}.AccountHolderName`,
    defaultMessage: 'Account Holder Name',
  },
  AccountNumber: {
    id: `${scope}.AccountNumber`,
    defaultMessage: 'Account Number',
  },
  Currency: {
    id: `${scope}.Currency`,
    defaultMessage: 'Currency',
  },
  SwiftCode: {
    id: `${scope}.SwiftCode`,
    defaultMessage: 'Swift Code/ BIC',
  },
  IBAN: {
    id: `${scope}.IBAN`,
    defaultMessage: 'IBAN',
  },
  Address: {
    id: `${scope}.Address`,
    defaultMessage: 'Address',
  },
  Back: {
    id: `${scope}.Back`,
    defaultMessage: 'Back',
  },
  Save: {
    id: `${scope}.Save`,
    defaultMessage: 'Save',
  },
  Update: {
    id: `${scope}.Update`,
    defaultMessage: 'Update',
  },
});
