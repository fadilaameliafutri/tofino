/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Style from '../../../shared/style';
import * as UIConstants from '../../constants/ui';
import { getStatusText } from '../../selectors';

const STATUS_STYLE = Style.registerStyle({
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: UIConstants.STATUS_BAR_ZINDEX,
  padding: '2px 10px',
  border: '1px solid var(--theme-content-selected-border-color)',
  borderTopRightRadius: 'var(--theme-default-roundness)',
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  backgroundColor: 'var(--theme-window-background)',
  backgroundImage: 'url(assets/chrome-background.png)',
  backgroundSize: 'var(--theme-window-image-tile-size)',
  backgroundAttachment: 'fixed',
  color: 'var(--theme-content-color)',
  whiteSpace: 'nowrap',
  maxWidth: '85%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: 'block',
});

/**
 * A status bar at the bottom of the browser UI.
 */

export function Status({ statusText }) {
  return (
    <div className={STATUS_STYLE}
      hidden={!statusText}>
      {statusText}
    </div>
  );
}

Status.displayName = 'Status';

Status.propTypes = {
  statusText: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    statusText: getStatusText(state),
  };
}

export default connect(mapStateToProps)(Status);
