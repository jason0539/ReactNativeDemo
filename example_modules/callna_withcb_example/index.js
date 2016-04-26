'use strict'

var React = require('react-native');

var {
  Text,
  TouchableOpacity, // 按钮
  View,
  ToastAndroid,
  StyleSheet,
  Component,
  TextInput,
  TouchableHighlight,
} = React;

var CallNaWithCallbackModule = require('./callna_withcb_module');

class CallculatePage extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      numA :'0',
      numB :'0',
      result:'0',
    }
  }

  render() {
    return(
      <View style={styles.container}>
            <View style={styles.flowRight}>

              <TextInput
                style={styles.searchInput}
                placeholder='Input numA'
                value={this.state.numA}
                onChange={this.onNumAChanged.bind(this)}/>

              <TextInput
                style={styles.searchInput}
                placeholder='Input numB'
                value={this.state.numB}
                onChange={this.onNumBChanged.bind(this)}/>

              <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                onPress={this.onCalculateClick.bind(this)}>
                <Text style={styles.buttonText}>Go</Text>
              </TouchableHighlight>

            </View>
            <Text
                value={this.state.result}/>
        </View>
    );
  }


  onNumAChanged(event) {
    this.setState({ numA: event.nativeEvent.text });
  }

  onNumBChanged(event) {
    this.setState({ numB: event.nativeEvent.text });
  }

  onCalculateClick() {
    CallNaWithCallbackModule.calculatAdd(
      this.state.numA,
      this.state.numB,
      (msg)=>{
        ToastAndroid.show('计算出错：'+msg,ToastAndroid.SHORT);
      },
      (result)=>{
        ToastAndroid.show('结果是'+result,ToastAndroid.SHORT);
      }
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },

  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
});

module.exports = CallculatePage;
