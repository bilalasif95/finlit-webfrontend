/**
 * Asynchronously loads the component for PaymentsPage
 */

import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: (
    <div className="page_loader">
      <LoadingIndicator />
    </div>
  ),
});
