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

var CallNaModule = require('./example_modules/callna_example/index');
var NavigatorModule = require('./example_modules/navigator_example/index');
var PartOfJsModule = require('./example_modules/partofjs_example/index');

React.AppRegistry.registerComponent('CallNaActivity', () => CallNaModule);
React.AppRegistry.registerComponent('NavigatorActivity', () => NavigatorModule);
React.AppRegistry.registerComponent('PartOfJsActivity',() => PartOfJsModule);
