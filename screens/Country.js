import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  StatusBar,
  Button,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Searchbar} from 'react-native-paper';
export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      list: [],
      searchArray: [],
      showSearch: false,
    };
    this.phoneInput = React.createRef();
  }
  LiveSearch = text => {
    this.state.showSearch = true;
    this.setState({showSearch: this.state.showSearch});
    var searchWord = text.trim();
    if (searchWord) {
      var tempArray = [];
      for (var x = 0; x < this.state.list.length; x++) {
        var arrayList = '' + this.state.list[x].Name;
        var index = arrayList.indexOf(searchWord);
        if (index != -1) {
          console.log('DATA Pushed');
          tempArray.push(this.state.list[x]);
        } else {
        }
      }
    } else {
      tempArray = this.state.list;
    }
    console.log('after search=', tempArray);
    this.setState({
      list: tempArray,
    });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            marginLeft: '3%',
          }}
          onPress={() => this.props.navigation.navigate('ProceedScreen')}>
          <Image source={require('../images/m.png')} />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatusBar barStyle="light-content" backgroundColor="#11062C" />

          <View
            style={{
              marginTop: '1%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: 156,
            }}>
            <Image
              style={{marginBottom: '9%'}}
              source={require('../images/mr.png')}
            />
            <Text
              style={{
                marginTop: '-10%',
                fontSize: 22,
                color: '#528234',
                fontWeight: 'bold',
              }}>
              MobiBanc
            </Text>
          </View>
          <Text
            style={{
              marginTop: '5%',
              marginBottom: '3%',
              fontSize: 18,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Where is your business registered
          </Text>
          <Searchbar
            style={{
              width: '80%',
              backgroundColor: '#11062C',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '3%',
            }}
            iconColor="white"
            placeholderTextColor="white"
            underlineColorAndroid="white"
            autoFocus={false}
            placeholder="Country"
            onChangeText={text => {
              this.LiveSearch(text);
            }}
          />
        </View>
        <ScrollView
          indicatorStyle="white"
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            padding: '2%',
            paddingBottom: '40%',
            paddingHorizontal: '25%',
          }}>
          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/uu.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Austria
            </Text>
          </View>
          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/bell.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Belgium
            </Text>
          </View>
          <TouchableOpacity
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
            onPress={() => this.props.navigation.navigate('Detail')}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/crr.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Croatia
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/cypp.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Cyprus
            </Text>
          </View>

          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/zzz.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Czech Republic
            </Text>
          </View>
          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/de.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Denmark
            </Text>
          </View>
          <View
            style={{
              marginBottom: '16%',
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: '25%', height: '170%'}}
              source={require('../images/ess.png')}
            />
            <Text
              style={{
                marginTop: '4%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Estonia
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: '#11062C',
  },
  loginBtn: {
    width: '74%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 50,
    marginBottom: '3%',
    height: '11%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    backgroundColor: '#FFC0CB',
    borderRadius: 5,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
});
