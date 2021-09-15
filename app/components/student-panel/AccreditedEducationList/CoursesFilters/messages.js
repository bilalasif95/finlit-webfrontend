/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  Courses: {
    id: `${scope}.Courses`,
    defaultMessage: 'Courses',
  },
  CoursesType: {
    id: `${scope}.CoursesType`,
    defaultMessage: `Courses Type`,
  },
  Language: {
    id: `${scope}.Language`,
    defaultMessage: 'Language',
  },
  Level: {
    id: `${scope}.Level`,
    defaultMessage: 'Level',
  },
  Price: {
    id: `${scope}.Price`,
    defaultMessage: `Price`,
  },
});
