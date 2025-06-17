/*
 * BootCamp List Messages
 *
 * This contains all the text for the BootCamp List component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.BootCampList';

export default defineMessages({
  BootCampList: {
    id: `${scope}.BootCampList`,
    defaultMessage: 'BootCamp List',
  },
  CourseTitle: {
    id: `${scope}.CourseTitle`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  CourseShortDesc: {
    id: `${scope}.CourseShortDesc`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est. Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est. Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  NewPrice: {
    id: `${scope}.NewPrice`,
    defaultMessage: `$50.00`,
  },
  OldPrice: {
    id: `${scope}.OldPrice`,
    defaultMessage: `$150.00`,
  },
  Timings: {
    id: `${scope}.Timings`,
    defaultMessage: 'Timings:',
  },
  From: {
    id: `${scope}.From`,
    defaultMessage: '10:00 pm',
  },
  To: {
    id: `${scope}.To`,
    defaultMessage: '12:00 pm',
  },
  Date: {
    id: `${scope}.Date`,
    defaultMessage: 'July 07, 2021',
  },
  Attendees: {
    id: `${scope}.Attendees`,
    defaultMessage: 'Attendees',
  },
  Viewer: {
    id: `${scope}.Viewer`,
    defaultMessage: '654,321',
  },
  JoinUs: {
    id: `${scope}.JoinUs`,
    defaultMessage: 'Join Us',
  },
});
