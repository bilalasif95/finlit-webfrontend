/*
 * Cart Checkout Sidebar Messages
 *
 * This contains all the text for the CartCheckoutSidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CartCheckoutSidebar';

export default defineMessages({
  AttendEvent: {
    id: `${scope}.AttendEvent`,
    defaultMessage: `Attend Event`,
  },
  AddtoCart: {
    id: `${scope}.AddtoCart`,
    defaultMessage: `Add to Cart`,
  },
  BootCampDetails: {
    id: `${scope}.BootCampDetails`,
    defaultMessage: `BootCamp Details`,
  },
  Apply: {
    id: `${scope}.Apply`,
    defaultMessage: `Apply`,
  },
});
