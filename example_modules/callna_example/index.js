'use strict'

var React = require('react-native');

var {
  Text,
  Image,
  TouchableOpacity, // 按钮
  ListView,
  View,
  ToastAndroid,
} = React;

var styles = require('./styles');
var CallNaModule = require('./call_na_module')

var REQUEST_URL = 'http://mbcapi.baidu.com/mbc/?__c=dal&method=houseList&rt=houselist'
+'&bid=cc788fde9579bd8988fc0628,87be1cf3ab5b3f64e60738f5,c7b220c24dc08ff6c7f50d2a'
+'&city_id=131&st=1&pagesize=100&offset=0';

var ListViewModule = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.fetchData();
    return {
      dataSource: ds.cloneWithRows(this.fetchData),
      loaded:false
    };
  },

 fetchData(){
    fetch(REQUEST_URL)
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(responseData.result.content),
        loaded:true,
      })
    })
    .done();
  },

  _pressRow: function(rowToast: string) {
    CallNaModule.call(rowToast, CallNaModule.SHORT);
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    ReactNativeDemo
                </Text>
            </View>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        </View>
      
    );
  },

  renderMovie(movie){
    return (
        <TouchableOpacity onPress={() => this._pressRow(movie.poi_name)}>
          <View style={styles.listviewItemContainer}>
            <Image source={{uri: movie.logo_pic}}
                   style={styles.houseImage} />
              <View style={styles.imageRightContainer}>
              <Text style={styles.houseTitle}>{movie.title}</Text>
              <Text style={styles.housePoi}>{movie.poi_name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  },

  renderLoadingView(){
    return (
        <View style={styles.container}>
          <Text>
            Hey,正在加载数据。。。。。
          </Text>
        </View>
      );
  },

});

module.exports = ListViewModule;
