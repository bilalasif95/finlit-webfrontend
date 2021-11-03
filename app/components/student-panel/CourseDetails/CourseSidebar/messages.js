/*
 * Cart Checkout Sidebar Messages
 *
 * This contains all the text for the CartCheckoutSidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CartCheckoutSidebar';

export default defineMessages({
  EnrollNow: {
    id: `${scope}.EnrollNow`,
    defaultMessage: `Enroll Now`,
  },
  AddtoCart: {
    id: `${scope}.AddtoCart`,
    defaultMessage: `Add to Cart`,
  },
  Details: {
    id: `${scope}.Details`,
    defaultMessage: `This course includes`,
  },
  Apply: {
    id: `${scope}.Apply`,
    defaultMessage: `Apply`,
  },
});
