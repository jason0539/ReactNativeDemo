'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  View,
  ToastAndroid,
  StyleSheet,
} = React;

var PartOfJsModule = React.createClass({

  render() {
        return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Hey,这部分是JS
          </Text>
        </View>
      );
    }
    
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    padding:100
  },
  textStyle:{
    fontSize:20,
    color:"#3385ff"
  }
});

module.exports = PartOfJsModule;
