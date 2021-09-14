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
  CompletePurchase: {
    id: `${scope}.CompletePurchase`,
    defaultMessage: `Complete your purchase by providing your payment details.`,
  },
  EmailAddress: {
    id: `${scope}.EmailAddress`,
    defaultMessage: `Email Address`,
  },
  CreditCard: {
    id: `${scope}.CreditCard`,
    defaultMessage: `Credit Card / Visa Card`,
  },
  PayPal: {
    id: `${scope}.PayPal`,
    defaultMessage: `PayPal`,
  },
  CardholderName: {
    id: `${scope}.CardholderName`,
    defaultMessage: `Cardholder name`,
  },
  CardNumber: {
    id: `${scope}.CardNumber`,
    defaultMessage: `Card Number`,
  },
  MMYYCVC: {
    id: `${scope}.MMYYCVC`,
    defaultMessage: `MM / YY CVC`,
  },
  RememberCard: {
    id: `${scope}.RememberCard`,
    defaultMessage: `Remember this card`,
  },
  Summary: {
    id: `${scope}.Summary`,
    defaultMessage: `Summary`,
  },
  OriginalPrice: {
    id: `${scope}.OriginalPrice`,
    defaultMessage: `Original Price:`,
  },
  CouponDiscounts: {
    id: `${scope}.CouponDiscounts`,
    defaultMessage: `Coupon Discounts:`,
  },
  Total: {
    id: `${scope}.Total`,
    defaultMessage: `Total:`,
  },
  YouAgree: {
    id: `${scope}.YouAgree`,
    defaultMessage: `By completing your purchase you agree to these`,
  },
  TermsService: {
    id: `${scope}.TermsService`,
    defaultMessage: `Terms of Service.`,
  },
  Pay: {
    id: `${scope}.Pay`,
    defaultMessage: `Pay`,
  },
  PaymentsEncrypted: {
    id: `${scope}.PaymentsEncrypted`,
    defaultMessage: `Payments are secure and encrypted`,
  },
});
