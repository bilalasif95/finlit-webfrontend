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
    defaultMessage: 'Hackathon TechnoDiva Fresher',
  },
  Date: {
    id: `${scope}.Date`,
    defaultMessage: 'Date:',
  },
  Location: {
    id: `${scope}.Location`,
    defaultMessage: `Location:`,
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
