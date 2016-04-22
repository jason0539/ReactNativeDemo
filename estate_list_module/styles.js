'use strict'

var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3385ff',
    height:50,
    width:1080,
  },

  titleText:{
    fontSize:20,
    color:'#ffffff',
    textAlign:'center',
  },

  listviewItemContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
  },

   houseImage: {
      width: 300,
      height: 100,
    },

    imageRightContainer:{
      flex:1,
    },

    houseTitle:{
      fontSize:20,
      textAlign:'left',
    },

    housePoi:{
      textAlign:'left',
      color: '#333333',
    },

    listView: {
      backgroundColor: '#ffffff',
    },


});

module.exports = styles;
