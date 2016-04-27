'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  View,
  ToastAndroid,
  StyleSheet,
  Component,
  DeviceEventEmitter,
} = React;

class PartOfJsModule extends Component{

  constructor(props){
    super(props);
    this.state={
      textStr:'Hey,这部分是JS',
    }
  }

  componentWillMount(){
    DeviceEventEmitter.addListener('keyboardWillShow', (data)=>{
      this.setState({textStr:data.param});
    });
  }

  render() {
        return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>
                {this.state.textStr}
          </Text>
        </View>
      );
  }
    
};

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
