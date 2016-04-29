'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  View,
  ToastAndroid,
  StyleSheet,
  Component,
} = React;

var MyWebView = require('./WebView');

var UseNaModule = React.createClass({

  getInitialState(){
    return({
      url:'http://www.youku.com/',
      textStr:'JS部分文字',
    })
  },

  onWebViewScroll: function(event) {
    this.setState({
      textStr:'滑动距离:'+event,
    });
  },

  render() {
        return (
        <View style={styles.container}>
          <MyWebView style={{width:400,height:400}} 
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
