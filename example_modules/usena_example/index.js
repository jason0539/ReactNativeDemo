'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  View,
  ToastAndroid,
  StyleSheet,
  Component,
  Dimensions,
} = React;

var MyWebView = require('./WebView');

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var UseNaModule = React.createClass({

  getInitialState(){
    return({
      url:'http://www.youku.com/',
      textStr:'JS部分文字',
    })
  },

  onWebViewScroll: function(event) {
    this.setState({
      textStr:'Y方向滑动距离:'+event,
    });
  },

  render() {
        return (
        <View style={styles.container}>
          <MyWebView style={{width:WINDOW_WIDTH,height:WINDOW_HEIGHT*2/3}} 
                  url={this.state.url}
                  onScrollChange={this.onWebViewScroll}>
          </MyWebView>
          <Text style={styles.textStyle}>
            {this.state.textStr}
          </Text>
        </View>
      );
  }
    
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  textStyle:{
    fontSize:40,
    backgroundColor:'#dddddd',
    color:"#3385ff"
  },
});

module.exports = UseNaModule;
