/*
 * Cart Checkout Sidebar Messages
 *
 * This contains all the text for the CartCheckoutSidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CartCheckoutSidebar';

export default defineMessages({
  PaymentDetails: {
    id: `${scope}.PaymentDetails`,
    defaultMessage: `Payment Details`,
  },
  Article: {
    id: `${scope}.Article`,
    defaultMessage: `Hiring Hacks: How to Recruit the Perfect Employee`,
  },
});
