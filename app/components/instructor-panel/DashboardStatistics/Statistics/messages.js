/*
 * Add Course Messages
 *
 * This contains all the text for the Add Course component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.AddCourse';

export default defineMessages({
  Title: {
    id: `${scope}.Title`,
    defaultMessage: `Statistics`,
  },
  CourseTitle: {
    id: `${scope}.CourseTitle`,
    defaultMessage: `Recent Activites`,
  },
  RecentDesc: {
    id: `${scope}.RecentDesc`,
    defaultMessage: `30 July, 2021 | 10:37 PM`,
  },
});
