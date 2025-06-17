/*
 * Articles Messages
 *
 * This contains all the text for the Articles component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Articles';

export default defineMessages({
  Articles: {
    id: `${scope}.Articles`,
    defaultMessage: 'Articles',
  },
  ViewAll: {
    id: `${scope}.ViewAll`,
    defaultMessage: `View all`,
  },
  InteractiveTools: {
    id: `${scope}.InteractiveTools`,
    defaultMessage: 'Interactive Tools',
  },
  LiveWebinars: {
    id: `${scope}.LiveWebinars`,
    defaultMessage: 'Live Webinars',
  },
  InteractiveToolsDesc: {
    id: `${scope}.InteractiveToolsDesc`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  LiveWebinarsDesc: {
    id: `${scope}.LiveWebinarsDesc`,
    defaultMessage: `Lorem ipsum vitea eros dictum, gravida massa id, pellentesque est.`,
  },
  ReadMore: {
    id: `${scope}.ReadMore`,
    defaultMessage: 'Read more',
  },
});
