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

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{
            marginLeft: '3%',

            backgroundColor: '#11062C',
          }}
          onPress={() => this.props.navigation.navigate('ProceedScreen')}>
          <Image source={require('../images/m.png')} />
        </TouchableOpacity>
        <StatusBar barStyle="light-content" backgroundColor="#11062C" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
          contentContainerStyle={{
            paddingBottom: '70%',
            paddingTop: '8%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              marginTop: '33%',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              height: 156,
            }}>
            <Image
              style={{marginBottom: '9%'}}
              source={require('../images/cr.png')}
            />
          </View>
          <Text
            style={{
              marginTop: '16%',
              marginBottom: '3%',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Ready!
          </Text>
          <Text
            style={{
              marginTop: '2%',
              marginBottom: '3%',
              fontSize: 11,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Now verify your account get full power of TransferGo
          </Text>
          <TouchableOpacity
            style={{
              width: '74%',
              marginTop: '14%',
              height: '9%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => this.props.navigation.navigate('Detail5')}>
            <Text
              style={{
                color: '#11062C',
                fontSize: 19,
                fontWeight: 'bold',
                color: 'black',
              }}>
              VERIFY NOW
            </Text>
          </TouchableOpacity>
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
    borderRadius: 1,
    width: '80%',
    position: 'absolute',
    bottom: 0,
    marginTop: '3%',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    marginTop: '-3%',
    backgroundColor: 'white',
    width: '40%',
    height: '100%',
  },
});
