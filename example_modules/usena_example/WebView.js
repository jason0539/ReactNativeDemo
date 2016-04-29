/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule WebView
 */
'use strict';

var React = require('react-native');
var {
  View,
  requireNativeComponent,
  PropTypes
} = React;

class ObservableWebView extends React.Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event: Event) {
    if (!this.props.onScrollChange) {
      return;
    }
    this.props.onScrollChange(event.nativeEvent.ScrollY);
  }

  render() {
    return <RCTWebView {...this.props} onChange={this._onChange} />;
  }
}

ObservableWebView.propTypes = {
  ...View.propTypes,
  url: PropTypes.string,
  html: PropTypes.string,
  onScrollChange: PropTypes.func,
};

var RCTWebView = requireNativeComponent('RCTMyWebView', ObservableWebView, {
  nativeOnly: {onChange: true}
});

module.exports = ObservableWebView;