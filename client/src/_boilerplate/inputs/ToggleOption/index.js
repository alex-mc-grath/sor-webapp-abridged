/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { injectIntl, intlShape } from 'react-intl';

export const ToggleOption = ({ value, message, intl }) => (
  <option value={value}>
    {message &&
      //  ? intl.formatMessage(message) :
      value}
  </option>
);

ToggleOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object,
  // intl: intlShape.isRequired,
};

// export default injectIntl(ToggleOption);