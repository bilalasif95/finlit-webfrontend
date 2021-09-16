/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  AllRightsReserved: {
    id: `${scope}.AllRightsReserved`,
    defaultMessage: '2021 FinLit Inc. All rights reserved.',
  },
  Category: {
    id: `${scope}.Category`,
    defaultMessage: `Category`,
  },
  AboutCompany: {
    id: `${scope}.AboutCompany`,
    defaultMessage: `About Company`,
  },
  Terms: {
    id: `${scope}.Terms`,
    defaultMessage: `Terms`,
  },
  PrivacyPolicy: {
    id: `${scope}.PrivacyPolicy`,
    defaultMessage: `Privacy Policy`,
  },
  HelpCenter: {
    id: `${scope}.HelpCenter`,
    defaultMessage: `Help Center`,
  },
  ContactUs: {
    id: `${scope}.ContactUs`,
    defaultMessage: `Contact us`,
  },
});
