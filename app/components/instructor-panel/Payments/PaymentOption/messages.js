/*
 * Bank Account Messages
 *
 * This contains all the text for the Bank Account component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CoursesList';

export default defineMessages({
  BankAccount: {
    id: `${scope}.BankAccount`,
    defaultMessage: 'Bank Account',
  },
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
});
