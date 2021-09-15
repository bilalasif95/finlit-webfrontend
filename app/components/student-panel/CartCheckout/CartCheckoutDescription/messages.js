/*
 * Cart Checkout Description Messages
 *
 * This contains all the text for the Cart Checkout Description component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CartCheckoutDescription';

export default defineMessages({
  Courses: {
    id: `${scope}.Courses`,
    defaultMessage: `Courses`,
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price`,
  },
  Remove: {
    id: `${scope}.Remove`,
    defaultMessage: 'Remove',
  },
  Title: {
    id: `${scope}.Title`,
    defaultMessage: '100 Days of code',
  },
  ShortDesc: {
    id: `${scope}.ShortDesc`,
    defaultMessage: 'Lorem Ipsum',
  },
  ProvidedBy: {
    id: `${scope}.ProvidedBy`,
    defaultMessage: 'Provided By:',
  },
  ProviderName: {
    id: `${scope}.ProviderName`,
    defaultMessage: 'Joel & Natalie Rivera',
  },
  Subtotal: {
    id: `${scope}.Subtotal`,
    defaultMessage: 'Subtotal :',
  },
});
