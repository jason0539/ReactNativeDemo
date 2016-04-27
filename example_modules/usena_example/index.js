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

var WebView = require('./WebView');

class UseNaModule extends Component{

  constructor(props){
    super(props);
    this.state={
      url:'http://www.youku.com/',
    }
  }

  componentWillMount(){
  }

  render() {
        return (
        <View style={styles.container}>
          <WebView style={{width:400,height:400}} url={this.state.url}>
          </WebView>
          <Text style={styles.textStyle}>
            JS部分文字
          </Text>
        </View>
      );
  }
    
};

var styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
  },
  textStyle:{
    fontSize:40,
    backgroundColor:'#ffffff',
    color:"#3385ff"
  },
});

module.exports = UseNaModule;
