'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    alignItems: 'center'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  }
});

class OthersPage extends Component {
  render() {
    return (React.createElement(Text, {style: styles.description}, "Search for houses to buy!!"));
  }
}

// this.props.navigator.push({
//     title:responseText.data.title,
//     name:'Others',
//     Others:responseText.data
// });

module.exports =OthersPage;