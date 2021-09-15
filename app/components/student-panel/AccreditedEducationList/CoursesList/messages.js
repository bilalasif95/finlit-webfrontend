/*
 * Courses List Messages
 *
 * This contains all the text for the Courses List component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CoursesList';

export default defineMessages({
  CoursesList: {
    id: `${scope}.CoursesList`,
    defaultMessage: 'Courses List',
  },
  CourseTitle: {
    id: `${scope}.CourseTitle`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  CourseShortDesc: {
    id: `${scope}.CourseShortDesc`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  ProvidedBy: {
    id: `${scope}.ProvidedBy`,
    defaultMessage: 'Provided By:',
  },
  ProviderName: {
    id: `${scope}.ProviderName`,
    defaultMessage: 'Joel & Natalie Rivera',
  },
  NewPrice: {
    id: `${scope}.NewPrice`,
    defaultMessage: `$50.00`,
  },
  OldPrice: {
    id: `${scope}.OldPrice`,
    defaultMessage: `$150.00`,
  },
  Hours: {
    id: `${scope}.Hours`,
    defaultMessage: '63 total hours',
  },
  UpdatedDate: {
    id: `${scope}.UpdatedDate`,
    defaultMessage: 'Updated 5/2021',
  },
  Level: {
    id: `${scope}.Level`,
    defaultMessage: '- All Level',
  },
  Rating: {
    id: `${scope}.Rating`,
    defaultMessage: '4.7',
  },
  Viewer: {
    id: `${scope}.Viewer`,
    defaultMessage: '654,321',
  },
  EnrollNow: {
    id: `${scope}.EnrollNow`,
    defaultMessage: 'Enroll Now',
  },
});
