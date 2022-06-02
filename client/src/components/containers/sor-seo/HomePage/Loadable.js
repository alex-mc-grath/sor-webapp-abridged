/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import loadable from '../../../utils/loadable';
import LoadingIndicator from './LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
