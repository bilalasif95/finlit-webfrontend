/*
 * Checkout Sidebar Messages
 *
 * This contains all the text for the Checkout Sidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CheckoutSidebar';

export default defineMessages({
  PaymentDetails: {
    id: `${scope}.PaymentDetails`,
    defaultMessage: `Checkout Process`,
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
  PayPalInfo: {
    id: `${scope}.PayPalInfo`,
    defaultMessage: `In order to complete your transaction, we will transfer you over PayPal's secure servers.`,
  },
  CardholderName: {
    id: `${scope}.CardholderName`,
    defaultMessage: `Cardholder name`,
  },
  CardNumber: {
    id: `${scope}.CardNumber`,
    defaultMessage: `Card Number`,
  },
  MMYY: {
    id: `${scope}.MMYY`,
    defaultMessage: `MM / YY`,
  },
  CVC: {
    id: `${scope}.CVC`,
    defaultMessage: `CVC`,
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
    defaultMessage: `Programming with Python : HandsOn Introduction`,
  },
  CouponDiscounts: {
    id: `${scope}.CouponDiscounts`,
    defaultMessage: `Virtual Speaking Masterclass :`,
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
