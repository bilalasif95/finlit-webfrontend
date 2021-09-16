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
    defaultMessage: 'BootCamp of the printing and typesetting',
  },
  Date: {
    id: `${scope}.Date`,
    defaultMessage: 'Date:',
  },
  Time: {
    id: `${scope}.Time`,
    defaultMessage: 'Timings:',
  },
  Location: {
    id: `${scope}.Location`,
    defaultMessage: `Location:`,
  },
  RequirementText: {
    id: `${scope}.RequirementText`,
    defaultMessage: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged.`,
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
