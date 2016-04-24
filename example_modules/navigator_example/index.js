//index.android.js

'use strict';

var React = require('react-native');

var HomePage = require('./HomePage');
var SearchResults = require('./SearchResults');
var PropertyView = require('./PropertyView');

var {
    AppRegistry,
    Navigator,
    StyleSheet,
    View,
    Text,
    BackAndroid,
    } = React;

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route, navigationOperations) {
  _navigator = navigationOperations;
  if (route.name === 'HomePage') {
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    ReactNativeDemo
                </Text>
            </View>
          <HomePage navigator={navigationOperations} />
        </View>
    );
  }
  else if (route.name === 'SearchResults') {
    console.log('RouteMapper->SearchResults');
    return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    ReactNativeDemo
                </Text>
            </View>
          <SearchResults navigator={navigationOperations}
                          SearchResults={route.SearchResults}/>
        </View>
    )
  }else if (route.name === 'PropertyView') {
      console.log('RouteMapper->PropertyView');
      console.log(route.passProperty);
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    ReactNativeDemo
                </Text>
            </View>
          <PropertyView navigator={navigationOperations}
                          passProperty={route.passProperty}/>
        </View>
    )
  };
};

var NavigatorModule = React.createClass({
  render() {
    var initialRoute = {name: 'HomePage'};
    return (
        <Navigator
            style={styles.container}
            initialRoute={initialRoute}
            configureScene={() => Navigator.SceneConfigs.FadeAndroid}
            renderScene={RouteMapper}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3385ff',
    height:56,
  },
  titleText:{
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
  },
});

module.exports = NavigatorModule;