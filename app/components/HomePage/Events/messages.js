/*
 * Events Messages
 *
 * This contains all the text for the Events component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Events';

export default defineMessages({
  EventOneTitle: {
    id: `${scope}.EventOneTitle`,
    defaultMessage: 'Online Fitness Bootcamp mit Sanda - Mo lunch',
  },
  EventTwoTitle: {
    id: `${scope}.EventTwoTitle`,
    defaultMessage: 'Win Hackathons: Your Strategy Guide to Hackat',
  },
  EventThreeTitle: {
    id: `${scope}.EventThreeTitle`,
    defaultMessage: 'Event CONNECT 2021',
  },
  EventType: {
    id: `${scope}.EventType`,
    defaultMessage: 'Bootcamp',
  },
  EventDate: {
    id: `${scope}.EventDate`,
    defaultMessage: `Mon, Aug 16, 2021 6:00 PM PKT`,
  },
  EventPublisher: {
    id: `${scope}.EventPublisher`,
    defaultMessage: `Sandra Zangeri`,
  },
  EventRegister: {
    id: `${scope}.EventRegister`,
    defaultMessage: `Register for FREE`,
  },
});
