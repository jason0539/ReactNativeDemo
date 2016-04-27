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
 
 var{
    View,
    requireNativeComponent,
    PropTypes,
 }=React;
 
var iface = {
  name: 'RCTWebView',
  propTypes: {
    ...View.propTypes,
    url: PropTypes.string,
    html: PropTypes.string,
  },
};
 
module.exports = requireNativeComponent('RCTMyWebView', iface);
