/*
 * Article Sidebar Messages
 *
 * This contains all the text for the Article Sidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.CoursesList';

export default defineMessages({
  Title: {
    id: `${scope}.Title`,
    defaultMessage: `Top Recent Posts`,
  },
  Article: {
    id: `${scope}.Article`,
    defaultMessage: `Hiring Hacks: How to Recruit the Perfect Employee`,
  },
});
