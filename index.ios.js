/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
} = React;

var CallNaListViewModule = require('./example_modules/callna_example/index');
var PropertyFinderApp = require('./example_modules/navigator_example/index');

AppRegistry.registerComponent('CallNaActivity', () => CallNaListViewModule);
AppRegistry.registerComponent('NavigatorActivity', () => PropertyFinderApp);
