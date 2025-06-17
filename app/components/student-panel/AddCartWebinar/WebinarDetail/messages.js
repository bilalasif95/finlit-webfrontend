/*
 * Cart Checkout Description Messages
 *
 * This contains all the text for the Cart Checkout Description component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CartCheckoutDescription';

export default defineMessages({
  Title: {
    id: `${scope}.Title`,
    defaultMessage: 'Starting an E-Commerce Business from Scratch',
  },
  Date: {
    id: `${scope}.Date`,
    defaultMessage: 'Date:',
  },
  Location: {
    id: `${scope}.Location`,
    defaultMessage: `Location:`,
  },
  Timings: {
    id: `${scope}.Timings`,
    defaultMessage: 'Timings:',
  },
  Attendees: {
    id: `${scope}.Attendees`,
    defaultMessage: `Attendees:`,
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price`,
  },
  Remove: {
    id: `${scope}.Remove`,
    defaultMessage: 'Remove',
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
